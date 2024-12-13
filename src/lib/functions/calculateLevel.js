import { playerStore } from '../stores/player';
import { outputStore } from '../stores/output';

function calculateLevel(player, enemy) {
  playerStore.update((p) => {
    let newHealth = p.health;
    let newAttack = p.attack;
    let newLevel = p.level;
    let newExperience = p.experience + enemy.experience;
    if (newExperience >= p.level ** 2) {
      newLevel += 1;
      newHealth = 100;
      newAttack += 2;
      newExperience -= p.level ** 2;

      const message = {
        style: 'text-yellow-400',
        text: 'Parabéns, você subiu de nível!',
      };

      outputStore.update((messages) => {
        messages.push(message);
        return messages;
      });
    }
    return {
      ...p,
      health: newHealth,
      attack: newAttack,
      level: newLevel,
      experience: newExperience,
    };
  });
}

export { calculateLevel };
