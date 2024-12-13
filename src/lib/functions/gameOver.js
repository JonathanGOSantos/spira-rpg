import { gameState } from '../stores/game';

export function gameOver(reason) {
  gameState.set('gameOver');
}
