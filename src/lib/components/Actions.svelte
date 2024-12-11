<script>
  import { showAtributes, showInventory } from "../stores/actions";

  import battle from "../functions/battle";
  import { playerStore } from "../stores/player";
  import { enemyStore } from '../stores/enemy';

  let currentPlayer;
  let currentEnemy;

  playerStore.subscribe(value => {
    currentPlayer = value;
  });

  enemyStore.subscribe(value => {
    currentEnemy = value;
  });

  function playerAttack() {
    battle.playerAttack(currentPlayer, currentEnemy);
  }
</script>

<section class="grid grid-cols-2 gap-2 pt-2">
  <button onclick={playerAttack} class="py-2 bg-slate-500 rounded-md hover:bg-opacity-75">Atacar</button>
  <button onclick={showInventory} class="py-2 bg-slate-500 rounded-md hover:bg-opacity-75">Inventário</button>
  <button class="py-2 bg-slate-500 rounded-md hover:bg-opacity-75">Fugir</button>
  <button onclick={showAtributes} class="py-2 bg-slate-500 rounded-md hover:bg-opacity-75">Atributos</button>
</section>