<script>
  import { onMount } from "svelte";
  import { playerStore } from "../stores/player";
  import { enemyStore } from "../stores/enemy";
  import { gameLoop } from "../functions/gameLoop";

  let playerHealthBar;
  let enemyHealthBar;

  function updateHealthBar(healthBar, health, maxHealth) {
    if (healthBar && maxHealth !== undefined) {
      healthBar.style.width = `${(health / maxHealth) * 100}%`;
    }
  }

  onMount(() => {
    playerStore.subscribe(value => {
      updateHealthBar(playerHealthBar, value.health, value.maxHealth);
    });

    if($enemyStore) {      
      enemyStore.subscribe(value => {
        updateHealthBar(enemyHealthBar, value.health, value.maxHealth);
      });
    }
  });
  
  $: {
    updateHealthBar(playerHealthBar, $playerStore.health, $playerStore.maxHealth);
    if($enemyStore) {      
    updateHealthBar(enemyHealthBar, $enemyStore.health, $enemyStore.maxHealth);
    }
  }

  gameLoop()
</script>

<section class="grid grid-cols-2 pb-2">
  <section class="flex flex-col gap-2">
    <span>{$playerStore.name}</span>
    <div>
      <span>{$playerStore.health}/{$playerStore.maxHealth}</span>
      <div class="border border-slate-200 w-[120px] rounded-sm overflow-hidden">
        <div bind:this={playerHealthBar} class={`h-2 ${$playerStore.health / $playerStore.maxHealth > 0.3 ? "bg-green-800" : "bg-red-800"}`}></div>
      </div>
    </div>
  </section>
  {#if $enemyStore}
    <section class="flex flex-col items-end text-end gap-2">
      <span>{$enemyStore.name}</span>
      <div>
        <span>{$enemyStore.health}/{$enemyStore.maxHealth}</span>
        <div class="border border-slate-200 w-[120px] rounded-sm overflow-hidden">
          <div bind:this={enemyHealthBar} class={`h-2 ${$enemyStore.health / $enemyStore.maxHealth > 0.3 ? "bg-green-800" : "bg-red-800"}`}></div>
        </div>
      </div>
    </section>
  {/if}
</section>
