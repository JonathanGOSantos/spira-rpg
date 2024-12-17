import { battleState } from '../stores/battle';
import { bagStore } from '../stores/bag';
import { playerStore } from '../stores/player';
import { enemyStore } from '../stores/enemy';

import { addOutputMessage } from '../stores/output';
import { get } from 'svelte/store';

function calculateLevel(player, enemy) {
  playerStore.update((p) => {
    let newHealth = p.health;
    let newMaxHealth = p['max-health'];
    let newAttack = p.attack;
    let newLevel = p.level;
    let newExperience = p.experience + enemy.experience;
    if (newExperience >= 3) {
      newLevel += 1;
      newMaxHealth += 5;
      newHealth = newMaxHealth;
      newAttack += 1;
      newExperience -= 5;

      const style = 'text-yellow-400';

      addOutputMessage(style, `Parabéns, você subiu de nível!`);
      addOutputMessage(style, `Você agora está no nível ${newLevel}!`);
      addOutputMessage(style, `Sua vida máxima aumentou para ${newMaxHealth}!`);
      addOutputMessage(style, `Sua vida foi restaurada para ${newHealth}!`);
      addOutputMessage(style, `Seu ataque aumentou para ${newAttack}!`);
      bagStore.update((bag) => {
        bag.consumable.items['heal-potion'].amount += 1;
        addOutputMessage(style, `Você ganhou uma poção de cura!`);
        return bag;
      });
    }
    return {
      ...p,
      health: newHealth,
      'max-health': newMaxHealth,
      attack: newAttack,
      level: newLevel,
      experience: newExperience,
    };
  });
}

function getDrops(enemy) {
  const drops = enemy.drops;
  for (let item of drops) {
    const roll = Math.floor(Math.random() * 100) + 1;

    bagStore.update((bag) => {
      let dropQuantity = 0;
      const drop = bag.drop.items[item.drop.uid];

      if (roll <= drop.chance) {
        dropQuantity = Math.floor(Math.random() * drop['max-drop']) + 1;
        addOutputMessage(
          'text-green-400',
          `Você obteve ${dropQuantity} ${drop.name}!`
        );
      }
      bag.drop.items[drop.uid].amount += dropQuantity;
      return bag;
    });
  }
}

function playerWins(player, enemy) {
  setTimeout(() => {
    addOutputMessage('text-green-400', `Você derrotou um ${enemy.name}!`);
  }, 300);
  setTimeout(() => {
    getDrops(enemy);
  }, 300);
  setTimeout(() => {
    addOutputMessage(
      'text-green-400',
      `Você ganhou ${enemy.experience} de experiência!`
    );
    calculateLevel(player, enemy);
  }, 300);
  setTimeout(() => {
    battleState.set({ goingOn: false });
  }, 100);
}

export { playerWins };
