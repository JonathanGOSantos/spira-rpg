import { battle } from './battle';
import { components } from '../stores/actions';

import { playerStore } from '../stores/player';
import { enemyStore } from '../stores/enemy';

import { newMonster } from './getRandomEnemy';

let player;
playerStore.subscribe((value) => (player = value));
let enemy;
enemyStore.subscribe((value) => (enemy = value));

function actionHandler(event) {
  const action = event.target.id;

  switch (action) {
    case 'playerAttack':
      battle.playerAttack(player, enemy);
      break;
    case 'playerEscape':
      battle.escape(player, enemy);
      break;
    case 'showInventory':
      components.showInventory();
      break;
    case 'showAtributes':
      components.showAtributes();
      break;
  }
}

async function gameLoop() {
  if (battle.goingOn) {
    const actions = document.querySelectorAll('[data-actions]');
    actions.forEach((action) =>
      action.addEventListener('click', actionHandler)
    );
  } else {
    enemyStore.set(await newMonster(player.level));
    battle.start(player, enemy);
  }
  window.requestAnimationFrame(gameLoop);
}

export { gameLoop };
