import { outputStore } from '../stores/output';

export const newEnemy = async () => {
  let enemies = [];
  try {
    const response = await fetch('../data/enemies.json');

    if (response.ok) {
      enemies = await response.json();
    } else {
      console.error('Erro ao carregar o JSON', response.status);
    }
  } catch (error) {
    console.error(error);
  }
};

// newEnemy();

export function getRandomEnemy(playerLevel) {
  // const availableMonsters = monsters.filter(
  //   (monster) => monster.minLevel <= playerLevel
  // );
  // const randomIndex = Math.floor(Math.random() * availableMonsters.length);
  // const enemy = availableMonsters[randomIndex];

  return {
    name: 'Slime',
    health: 10,
    maxHealth: 10,
    attack: 200,
    defense: 0,
    experience: 10,
    minLevel: 1,
    alive: true,
  };
}
