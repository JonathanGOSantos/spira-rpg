import { playerStore } from '../stores/player';
import { bagStore } from '../stores/bag';
import { addOutputMessage } from '../stores/output';
import { get } from 'svelte/store';

function useItem(item, e) {
  if (!item.usable) return;
  if (!item.amount === 0) return;

  const effect = item.effect.uid;

  switch (effect) {
    case 'basic-heal':
      if (get(playerStore).health === get(playerStore)['max-health']) {
        addOutputMessage(
          'text-orange-400',
          'Você já está com a vida cheia, não é possível usar este item!'
        );
        bagStore.update((bag) => {
          bag.opened = false;
          return bag;
        });
        return;
      }

      playerStore.update((p) => {
        let oldHealth = p.health;
        let health = Math.min(oldHealth + 3, 20);
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
