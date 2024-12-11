export function scape(player, enemy) {
  const scapeRoll = Math.random();

  if (scapeRoll > 0.2) {
    return true, `Você conseguiu fugir do ${monster.name}!`;
  } else {
    return false, `Você não conseguiu fugir do ${monster.name}!`;
  }
}
