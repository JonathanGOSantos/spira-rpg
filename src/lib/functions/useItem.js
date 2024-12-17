import { playerStore } from '../stores/player';
import { bagStore } from '../stores/bag';
import { addOutputMessage } from '../stores/output';

function useItem(item, e) {
  if (!item.usable) return;
  if (!item.amount === 0) return;

  const effect = item.effect.uid;

  switch (effect) {
    case 'basic-heal':
      playerStore.update((p) => {
        let oldHealth = p.health;
        let health = oldHealth + 10;
        if (health > p['max-health']) {
          health = p['max-health'];
        }
        let heal = health - oldHealth;
        let maxHealth = p['max-health'];

        addOutputMessage(
          'text-green-400',
          `Você usou uma ${item.name} e recuperou ${heal} de vida!`
        );

        bagStore.update((bag) => {
          bag.consumable.items[item.uid].amount -= 1;
          bag.opened = false;
          return bag;
        });

        return {
          ...p,
          health: health,
        };
      });
  }
}

export { useItem };
