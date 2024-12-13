import { outputStore } from '../stores/output';

export const inventory = [
  {
    name: 'Poção',
    description: 'Recupera 20 de vida',
    amount: 1,

    use(player) {
      if (this.amount === 0) {
        alert('Você não tem poções!');
        return;
      }
      this.amount -= 1;
      player.health += 20;
      if (player.health > 100) {
        player.health = 100;
      }
    },
  },
];

export function getPotion(enemy) {
  const potion = inventory[0];

  const chance = Math.floor(Math.random() * 100) + 1;
  if (chance <= 100) {
    potion.amount += 1;
    const message = {
      style: 'text-yellow-400',
      text: `Você encontrou uma poção!`,
    };

    outputStore.update((messages) => {
      messages.push(message);
      return messages;
    });
  }
}
