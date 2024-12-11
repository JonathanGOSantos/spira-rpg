class Monster {
  constructor(name, health, strength, experience, minLevel, alive) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.defense = this.strength;
    this.experience = experience;
    this.minLevel = minLevel;
    this.alive = alive;
  }
}

const monsters = [
  new Monster('Slime', 10, 2, 10, 1, true),
  new Monster('Goblin', 20, 4, 20, 1, true),
  new Monster('Troll', 40, 8, 40, 3, true),
  new Monster('Orc', 80, 16, 80, 5, true),
  new Monster('Múmia', 160, 32, 160, 8, true),
  new Monster('Quimera', 320, 64, 320, 10, true),
  new Monster('Dragão', 1000, 100, 1000, 15, true),
];

export function getRandomMonster(playerLevel) {
  const availableMonsters = monsters.filter(
    (monster) => monster.minLevel <= playerLevel
  );
  const randomIndex = Math.floor(Math.random() * availableMonsters.length);
  return availableMonsters[randomIndex];
}
