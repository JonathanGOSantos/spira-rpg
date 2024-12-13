<script>
  import Stats from "./Stats.svelte";
  import Output from "./Output.svelte";
  import { activeModal } from "../stores/actions";
  import Actions from "./Actions.svelte";
  import Inventory from "./Inventory.svelte";
  import Atributes from "./Atributes.svelte";
</script>


<Stats />

<Output />

{#if $activeModal.name === "actions"}
  <Actions />
{:else if $activeModal.name === "inventory"}
  <Inventory />
{:else if $activeModal.name === "atributes"}
  <Atributes />
{/if}