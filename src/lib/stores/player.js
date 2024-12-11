import { writable } from 'svelte/store';
import { enemyStore } from './enemy.js';

class Character {
  constructor(
    name,
    maxHealth,
    level,
    strength,
    defense,
    experience,
    inventory,
    alive
  ) {
    this.name = name;
    this.health = maxHealth;
    this.maxHealth = maxHealth;
    this.level = level;
    this.strength = strength;
    this.defense = defense;
    this.experience = experience;
    this.inventory = inventory;
    this.alive = alive;
  }
}

export const playerStore = writable(
  new Character('jSantt', 100, 1, 3, 0, 0, [], true)
);
