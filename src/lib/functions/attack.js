export function attack(attacking, defending) {
  if (!attacking || !defending) {
    throw new Error('Atacante ou defensor invalido.');
  }

  const attackingRoll = Math.floor(Math.random() * 20) + 1;
  const defendingRoll = Math.floor(Math.random() * 12) + 1;

  let calculatedAttack;
  let calculatedDefense = Math.max(defending.defense, 0);
  let message = '';

  if (attackingRoll === 20) {
    calculatedAttack = attacking.strength * 2;
    message = `\n${defending.name} foi atingido com um golpe crítico!`;
  } else if (attackingRoll !== 1 && attackingRoll > defendingRoll) {
    calculatedAttack = attacking.strength;
    message = `\n${defending.name} foi atingido!`;
  } else {
    calculatedAttack = 0;
    message = `\n${attacking.name} errou o ataque!`;
  }

  let damage = calculatedAttack - calculatedDefense;
  damage = Math.max(damage, 0);

  message += ` ${defending.name} ${
    damage === 0 ? 'não sofreu dano' : `sofreu ${damage} de dano`
  }.`;

  return {
    message,
    damage,
  };
}
