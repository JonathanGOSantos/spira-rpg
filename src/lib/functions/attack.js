import { outputStore } from '../stores/output';

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
    messages = attacking.critical || attacking.hit;
    console.log('Ataque Crítico!');
  } else if (attackingRoll !== 1 && attackingRoll > defendingRoll) {
    calculatedAttack *= 1;
    messages = attacking.hit;
    console.log('Ataque Normal!');
  } else {
    calculatedAttack *= 0;
    messages = attacking.noattack;
    console.log('Ataque Falhou!');
  }

  let damage = calculatedAttack - calculatedDefense;
  damage = Math.max(damage, 0);

  if (calculatedAttack > 0 && damage === 0) {
    messages = defending.nodamage;
    console.log('Sem dano!');
  }

  messageIndex = Math.floor(Math.random() * messages.length);

  const messageStyle = attacking.player ? 'text-cyan-600' : 'text-red-400';
  message = {
    style: messageStyle,
    text: messages[messageIndex].message,
  };

  outputStore.update((messages) => {
    messages.push(message);
    return messages;
  });

  message = {
    style: messageStyle,
    text: `${damage} de dano.`,
  };

  outputStore.update((messages) => {
    messages.push(message);
    return messages;
  });
  return damage;
}
