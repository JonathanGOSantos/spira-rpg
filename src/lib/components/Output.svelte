<script>
  import { outputStore } from "../stores/output";
  import { afterUpdate } from "svelte";

  let outputSection;

  afterUpdate(() => {
    if (outputSection) {
      outputSection.scrollTop = outputSection.scrollHeight;
    }
  });
</script>

<section bind:this={outputSection} class="overflow-y-scroll h-[200px]">
  <output class="py-2 flex flex-col">
    {#each $outputStore.split('\n') as line}
    <p>
      {line}
    </p>
    {/each}
  </output>
</section>
