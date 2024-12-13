import { attack } from './attack';
import { calculateLevel } from './calculateLevel';
import { getPotion } from './inventory';
import { gameOver } from './gameOver';

import { playerStore } from '../stores/player';
import { enemyStore } from '../stores/enemy';
import { playerEscape } from './playerEscape';

const battle = {
  goingOn: false,

  start(player, enemy) {
    this.goingOn = true;
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
      this.goingOn = false;
    } else {
      setTimeout(() => {
        this.enemyAttack(player, enemy);
      }, 300);
    }
  },

  verifyWinner(player, enemy) {
    if (enemy.health <= 0) {
      this.playerWins(player, enemy);
      return true;
    } else if (player.health <= 0) {
      this.playerLoses();
      return true;
    }
    return false;
  },

  playerWins(player, enemy) {
    this.goingOn = false;
    calculateLevel(player, enemy);
    getPotion(enemy);
  },

  playerLoses() {
    gameOver('Você morreu!');
  },
};

export { battle };
