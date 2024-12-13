import { gameState } from '../stores/game';
import { outputStore } from '../stores/output';
import { Player, playerStore } from '../stores/player';
import { gameLoop } from './gameLoop';

function startNewGame(playerName) {
  outputStore.set([]);
  playerStore.set(new Player(playerName));
  gameState.set('playing');
  gameLoop();
}

export { startNewGame };
