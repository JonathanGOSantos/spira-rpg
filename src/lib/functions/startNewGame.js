export class Character {
  constructor(name, health, level, strength, experience, inventory, alive) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.strength = strength;
    this.defense = this.strength;
    this.experience = experience;
    this.inventory = inventory;
    this.alive = alive;
  }
}

export function startNewGame() {
  const playerName = prompt('Digite seu nome: ');
  const player = new Character(playerName, 100, 1, 3, 0, [], true);
  return player;
}
