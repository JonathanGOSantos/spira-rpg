import { addOutputMessage } from '../stores/output';

export function attack(attacking, defending) {
  if (!attacking || !defending) {
    throw new Error('Atacante ou defensor invalido.');
  }

  const attackingRoll = Math.floor(Math.random() * 20) + 1;
  const defendingRoll = Math.floor(Math.random() * 6) + 1;

  let calculatedAttack = attacking.attack;
  let calculatedDefense = defending.defense;
  let messageIndex;
  let messages = [];
  let message;

  if (attackingRoll === 20) {
    calculatedAttack *= 2;
    messages = attacking['critical-hit'];
  } else if (attackingRoll !== 1 && attackingRoll > defendingRoll) {
    calculatedAttack *= 1;
    messages = attacking.hit;
  } else {
    calculatedAttack *= 0;
    messages = attacking['no-attack'];
  }

  let damage = calculatedAttack - calculatedDefense;
  damage = Math.max(damage, 0);

  if (calculatedAttack > 0 && damage === 0) {
    messages = defending['no-damage'];
  }

  messageIndex = Math.floor(Math.random() * messages.length);

  const messageStyle = attacking.player ? 'text-cyan-600' : 'text-red-400';

  addOutputMessage(messageStyle, messages[messageIndex].message);
  addOutputMessage(messageStyle, `${damage} de dano.`);

  return damage;
}
