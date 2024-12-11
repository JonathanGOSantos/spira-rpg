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

export function getPotion() {
  const potion = inventory[0];

  const chance = Math.floor(Math.random() * 100) + 1;
  if (chance <= 20) {
    console.log('Você encontrou uma poção!');
    potion.amount += 1;
  }
}
