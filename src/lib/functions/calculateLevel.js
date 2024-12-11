export function calculateLevel(player, enemy) {
  const experience = player.experience + enemy.experience;
  const needExperience = player.level ** 2;

  if (experience >= needExperience) {
    console.log('Parabéns, você subiu de nível!');
    player.level += 1;
    player.health = 100;
    player.strength *= 2;
    player.experience = experience - needExperience;
  }
}
