import { writable } from 'svelte/store';

class Monster {
  constructor(name, maxHealth, strength, defense, experience, minLevel, alive) {
    this.name = name;
    this.health = maxHealth;
    this.maxHealth = maxHealth;
    this.strength = strength;
    this.defense = defense;
    this.experience = experience;
    this.minLevel = minLevel;
    this.alive = alive;
  }
}

const monsters = [
  new Monster('Slime', 10, 2, 0, 10, 1, true),
  new Monster('Goblin', 20, 4, 0, 20, 1, true),
  new Monster('Troll', 40, 8, 4, 40, 3, true),
  new Monster('Orc', 80, 16, 8, 80, 5, true),
  new Monster('Múmia', 160, 32, 16, 160, 8, true),
  new Monster('Quimera', 320, 64, 32, 320, 10, true),
  new Monster('Dragão', 1000, 100, 64, 1000, 15, true),
];

function getRandomMonster(playerLevel) {
  const availableMonsters = monsters.filter(
    (monster) => monster.minLevel <= playerLevel
  );
  const randomIndex = Math.floor(Math.random() * availableMonsters.length);
  return availableMonsters[randomIndex];
}

let playerLevel = 1;
export const enemyStore = writable(getRandomMonster(playerLevel));
