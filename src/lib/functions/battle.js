import { attack } from './attack';
import { calculateLevel } from './calculateLevel';
import { getPotion } from './inventory';
import { gameOver } from './gameOver';

import { playerStore } from '../stores/player';
import { enemyStore } from '../stores/enemy';
import { outputStore } from '../stores/output';

const battle = {
  start(player, enemy) {
    outputStore.update(
      (value) =>
        `${value}\nBatalha entre ${player.name} e ${enemy.name} iniciada!`
    );
  },

  verifyWinner(player, enemy) {
    if (enemy.health <= 0) {
      outputStore.update((value) => `${value}\n${enemy.name} foi derrotado!`);
      enemyStore.update((e) => ({ ...e, alive: false }));
      getPotion();
      calculateLevel(player, enemy);
      return true;
    } else if (player.health <= 0) {
      outputStore.update((value) => `${value}\n${player.name} foi derrotado!`);
      playerStore.update((p) => ({ ...p, alive: false }));
      gameOver('Você morreu!');
      return true;
    }
    return false;
  },

  playerAttack(player, enemy) {
    const { message, damage } = attack(player, enemy);
    outputStore.update((value) => `${value}\n${message}`);
    const health = enemy.health - damage;

    enemyStore.update((e) => {
      const updatedEnemy = { ...e, health: Math.max(health, 0) };
      if (!this.verifyWinner(player, updatedEnemy)) {
        setTimeout(() => {
          if (updatedEnemy.alive) {
            this.enemyAttack(player, updatedEnemy);
          }
        }, 500);
      }
      return updatedEnemy;
    });
  },

  enemyAttack(player, enemy) {
    const { message, damage } = attack(enemy, player);
    outputStore.update((value) => `${value}\n${message}`);
    const health = player.health - damage;

    playerStore.update((p) => {
      const updatedPlayer = { ...p, health: Math.max(health, 0) };
      this.verifyWinner(updatedPlayer, enemy);
      return updatedPlayer;
    });
  },
};

export default battle;
