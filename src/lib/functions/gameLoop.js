import { get } from 'svelte/store';

import { battle } from './battle';

import { playerStore } from '../stores/player';
import { enemyStore } from '../stores/enemy';
import { newMonster } from '../services/getRandomMonster';
import { bagStore, toggleBag } from '../stores/bag';
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
      if (player.relaxed) {
        addOutputMessage('text-slate-200', 'Você já está descansado!');
        break;
      }
      if (player.relax() < 0.25) {
        startBattle(player, enemy);
      } else {
        addOutputMessage(
          'text-green-400',
          'Você descansou e recuperou um pouco de vida!'
        );
        playerStore.update((value) => {
          const updatedPlayer = { ...value };
          const heal = updatedPlayer.health + updatedPlayer['max-health'] * 0.3;
          updatedPlayer.health = Math.min(heal, updatedPlayer['max-health']);
          return updatedPlayer;
        });
      }
      break;
    case 'playerAttack':
      battle.playerAttack(player, enemy);
      break;
    case 'playerEscape':
      battle.escape(player, enemy);
      break;
    case 'toggleBag':
      toggleBag();
      break;
    case 'openAtributes':
      break;
    case 'closeAtributes':
      break;
  }

  if (action === 'playerRelax') {
    playerStore.update((value) => {
      return {
        ...value,
        relaxed: true,
      };
    });
  } else {
    playerStore.update((value) => {
      return {
        ...value,
        relaxed: false,
      };
    });
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
