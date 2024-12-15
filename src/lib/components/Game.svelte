<script>
  import Stats from "./Stats.svelte";
  import Output from "./Output.svelte";
  import Actions from "./Actions/Actions.svelte";

  import { bagStore } from "../stores/bag";
  import Bag from "./Bag/Bag.svelte";
</script>


<Stats />

<Output />

<Actions />

{#if $bagStore.opened}
  <Bag />
{/if}