import { get } from 'svelte/store';

import { battle } from './battle';

import { playerStore } from '../stores/player';
import { enemyStore } from '../stores/enemy';
import { newMonster } from '../services/getRandomMonster';
import { bagStore, closeBag, openBag } from '../stores/bag';
import { addOutputMessage } from '../stores/output';

let player = get(playerStore);
let enemy = get(enemyStore);

playerStore.subscribe((value) => (player = value));
enemyStore.subscribe((value) => (enemy = value));

function actionHandler(event) {
  const action = event.target.id;

  switch (action) {
    case 'playerMoveForward':
      enemyStore.set();
      if (player.moveForward() < 0.75) {
        addOutputMessage(
          'text-slate-200',
          'Você avançou e encontrou um monstro!'
        );
        startBattle(player, enemy);
        break;
      }
      addOutputMessage('text-slate-200', 'Você avançou e não encontrou nada!');
      break;
    case 'playerRelax':
      console.log(player);
      if (player.relax() < 0.25) {
        startBattle(player, enemy);
      } else {
        playerStore.update((value) => {
          return { ...value, health: value.health + 10 };
        });
      }
      break;
    case 'playerAttack':
      battle.playerAttack(player, enemy);
      break;
    case 'playerEscape':
      battle.escape(player, enemy);
      break;
    case 'openBag':
      openBag();
      break;
    case 'closeBag':
      closeBag();
      break;
    case 'openAtributes':
      break;
    case 'closeAtributes':
      break;
  }
}

async function startBattle() {
  enemyStore.set(await newMonster(player.level));
  battle.start(player, enemy);
}

// function gameLoop() {
//   const actions = document.querySelectorAll('[data-actions]');
//   actions.forEach((action) => action.addEventListener('click', actionHandler));

//   window.requestAnimationFrame(gameLoop);
// }

export { actionHandler };
