<script>
  import { onMount } from "svelte";
  import { playerStore } from "../stores/player";
  import { enemyStore } from "../stores/enemy";

  let playerHealthBar;
  let enemyHealthBar;

  function updateHealthBar(healthBar, health, maxhealth) {
    if (healthBar && maxhealth !== undefined) {
      healthBar.style.width = `${(health / maxhealth) * 100}%`;
    }
  }

  onMount(() => {
    playerStore.subscribe(value => {
      updateHealthBar(playerHealthBar, value.health, value['max-health']);
    });

    if($enemyStore) {      
      enemyStore.subscribe(value => {
        updateHealthBar(enemyHealthBar, value.health, value['max-health']);
      });
    }
  });
  
  $: {
    updateHealthBar(playerHealthBar, $playerStore.health, $playerStore['max-health']);
    if($enemyStore) {      
    updateHealthBar(enemyHealthBar, $enemyStore.health, $enemyStore['max-health']);
    }
  }
</script>

<section class="grid grid-cols-2 pb-2">
  <section class="flex flex-col gap-2">
    <span>{$playerStore.name}</span>
    <div>
      <span>{$playerStore.health}/{$playerStore['max-health']}</span>
      <div class="border border-slate-200 w-[120px] rounded-sm overflow-hidden">
        <div bind:this={playerHealthBar} class={`h-2 ${$playerStore.health / $playerStore['max-health'] > 0.3 ? "bg-green-800" : "bg-red-800"}`}></div>
      </div>
    </div>
  </section>
  {#if $enemyStore}
    <section class="flex flex-col items-end text-end gap-2">
      <span>{$enemyStore.name}</span>
      <div>
        <span>{$enemyStore.health}/{$enemyStore['max-health']}</span>
        <div class="border border-slate-200 w-[120px] rounded-sm overflow-hidden">
          <div bind:this={enemyHealthBar} class={`h-2 ${$enemyStore.health / $enemyStore['max-health'] > 0.3 ? "bg-green-800" : "bg-red-800"}`}></div>
        </div>
      </div>
    </section>
  {/if}
</section>
