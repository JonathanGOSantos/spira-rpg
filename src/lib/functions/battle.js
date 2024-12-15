import { attack } from './attack';
import { playerWins } from './playerWins';
import { gameOver } from './gameOver';

import { battleState } from '../stores/battle';
import { playerStore } from '../stores/player';
import { enemyStore } from '../stores/enemy';
import { playerEscape } from './playerEscape';
import { addOutputMessage } from '../stores/output';

const battle = {
  start(player, enemy) {
    battleState.set({ goingOn: true });
  },

  playerAttack(player, enemy) {
    const damage = attack(player, enemy);
    const health = enemy.health - damage;

    enemyStore.update((e) => {
      const updatedEnemy = { ...e, health: Math.max(health, 0) };
      if (this.verifyWinner(player, updatedEnemy)) return updatedEnemy;

      setTimeout(() => {
        this.enemyAttack(player, enemy);
      }, 300);
      return updatedEnemy;
    });
  },

  enemyAttack(player, enemy) {
    const damage = attack(enemy, player);
    const health = player.health - damage;
    playerStore.update((p) => {
      const updatedPlayer = { ...p, health: Math.max(health, 0) };
      this.verifyWinner(updatedPlayer, enemy);
      return updatedPlayer;
    });
  },

  escape(player, enemy) {
    const playerEscaped = playerEscape(player);
    if (playerEscaped) {
      battleState.set({ goingOn: false });
      enemyStore.set();
    } else {
      setTimeout(() => {
        this.enemyAttack(player, enemy);
      }, 300);
    }
  },

  verifyWinner(player, enemy) {
    if (enemy.health <= 0) {
      playerWins(player, enemy);
      return true;
    } else if (player.health <= 0) {
      this.playerLoses();
      return true;
    }
    return false;
  },

  playerLoses() {
    battleState.set({ goingOn: false });
    gameOver('Você morreu!');
  },
};

export { battle };
