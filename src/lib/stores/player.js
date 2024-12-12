import { writable } from 'svelte/store';
import { enemyStore } from './enemy.js';

const player = {
  name: 'jSantt',
  health: 100,
  maxHealth: 100,
  level: 1,
  attack: 3,
  defense: 0,
  experience: 0,
  inventory: [],
  alive: true,
};

export const playerStore = writable(player);
