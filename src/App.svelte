<script>
  import Header from "./lib/components/Header.svelte";
  import Stats from "./lib/components/Stats.svelte";
  import Output from "./lib/components/Output.svelte";
  import { activeModal } from "./lib/stores/actions";
  import Actions from "./lib/components/Actions.svelte";
  import Inventory from "./lib/components/Inventory.svelte";
  import Atributes from "./lib/components/Atributes.svelte";
</script>

<main class="bg-gray-800 text-slate-200 p-2 max-w-screen-sm">
  <Header />

  <Stats />

  <Output />

  
  {#if $activeModal.name === "actions"}
    <Actions />
  {:else if $activeModal.name === "inventory"}
    <Inventory />
  {:else if $activeModal.name === "atributes"}
    <Atributes />
  {/if}
</main>