import { showTitle, gameOver } from './gameBasics.js';
import { startNewGame } from './startNewGame.js';
import { getRandomMonster } from './getRandomMonster.js';
import { attack, scape } from './battle.js';
import { inventory } from './inventory.js';

function main() {
  showTitle();
  const player = startNewGame();

  player.onBattle = false;
  let monster;

  while (player.alive) {
    if (!player.onBattle) {
      monster = getRandomMonster(player.level);
      player.onBattle = true;
      alert(`Você encontrou um ${monster.name}!`);
    } else {
      alert(`Você esta enfrentando um ${monster.name}!`);
      alert(`${monster.name} HP: ${monster.health}`);
    }

    const action = prompt(`
      ${player.name} 
      HP: ${player.health}
      Level: ${player.level}
      O que deseja fazer?
      1 - Atacar
      2 - Usar item
      3 - Fugir
      4 - Ver atributos
      5 - Sair do jogo 
    `);

    switch (action) {
      case '1':
        alert(attack(player, monster));

        if (monster.alive) {
          alert(attack(monster, player));
        }
        break;
      case '2':
        const item = prompt(`
                    1 - Poção
                    2 - Voltar
                    `);

        if (item === '1') {
          inventory[0].use(player);
        }

        if (monster.alive) {
          alert(attack(monster, player));
        }
        break;
      case '3':
        const [escaped, message] = scape(player, monster);
        alert(message);
        if (escaped) {
          player.onBattle = false;
        }
        break;
      case '4':
        alert(`
          ${player.name}
          HP: ${player.health}
          Level: ${player.level}
          Strength: ${player.strength}
          Experience: ${player.experience}
        `);
        break;
      case '5':
        gameOver('Você saiu do jogo!');
        return;
      default:
        alert('Opção inválida!');
        break;
    }
  }

  gameOver('Você morreu!');
}
