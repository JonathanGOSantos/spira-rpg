# Battle Module Documentation

A função `battle` gerencia o sistema de batalha entre um jogador e um inimigo no rpg. Ela inclui métodos para iniciar a batalha, verificar o vencedor e processar ataques tanto do jogador quanto do inimigo.

## Métodos

### `start(player, enemy)`

Inicia uma batalha entre o jogador e o inimigo.

- **Parâmetros:**
  - `player` (Object): O objeto representando o jogador.
  - `enemy` (Object): O objeto representando o inimigo.
- **Descrição:** Atualiza o `outputStore` para indicar o início de uma batalha entre o jogador e o inimigo.

### `verifyWinner(player, enemy)`

Verifica se há um vencedor após um ataque.

- **Parâmetros:**
  - `player` (Object): O objeto representando o jogador.
  - `enemy` (Object): O objeto representando o inimigo.
- **Retorno:** `true` se houver um vencedor (jogador ou inimigo morto), `false` caso contrário.
- **Descrição:** Atualiza o `outputStore` com mensagens de vitória. Atualiza os estados `alive` do `player` e `enemy` se estiverem mortos. Chama as funções `getPotion` e `calculateLevel` após a vitória do jogador. Chama `gameOver` se o jogador for derrotado.

### `playerAttack(player, enemy)`

Processa o ataque do jogador ao inimigo.

- **Parâmetros:**
  - `player` (Object): O objeto representando o jogador.
  - `enemy` (Object): O objeto representando o inimigo.
- **Descrição:** Executa a função `attack` e atualiza o `outputStore` com a mensagem de ataque. Atualiza a saúde do `enemy` e chama `verifyWinner`. Se o inimigo ainda estiver vivo, agenda o ataque do inimigo com um pequeno atraso.

### `enemyAttack(player, enemy)`

Processa o ataque do inimigo ao jogador.

- **Parâmetros:**
  - `player` (Object): O objeto representando o jogador.
  - `enemy` (Object): O objeto representando o inimigo.
- **Descrição:** Executa a função `attack` e atualiza o `outputStore` com a mensagem de ataque. Atualiza a saúde do `player` e chama `verifyWinner`.

## Exemplos

**Exemplo de uso:**

```javascript
import battle from './battle.js';
import { playerStore } from '../stores/player';
import { enemyStore } from '../stores/enemy';

let currentPlayer;
let currentEnemy;

playerStore.subscribe((value) => {
  currentPlayer = value;
});

enemyStore.subscribe((value) => {
  currentEnemy = value;
});

function startBattle() {
  battle.start(currentPlayer, currentEnemy);
}

function playerAttack() {
  battle.playerAttack(currentPlayer, currentEnemy);
}

// Iniciar batalha
startBattle();

// Jogador ataca inimigo
playerAttack();
```
