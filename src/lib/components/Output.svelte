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

<section bind:this={outputSection} class="overflow-y-scroll flex-1">
  <output class="py-2 flex flex-col gap-1">
    {#each $outputStore as line, i}
      <p class={line.style}>
        <span class="text-white">{i+1}.</span> {line.text}
      </p>
    {/each}
  </output>
</section>
