<script>
  import { outputStore } from "../stores/output";
</script>

<section class="overflow-y-scroll">
  <output class="py-2 flex flex-col">
    {#each $outputStore.split('\n') as line}
    <p>
      {line}
    </p>
    {/each}
  </output>
</section>
