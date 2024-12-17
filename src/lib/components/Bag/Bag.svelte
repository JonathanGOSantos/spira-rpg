<script>
  import { get } from "svelte/store";
  import { bagStore, categories } from "../../stores/bag";
  import Button from "../Button.svelte";
  import Category from "./components/Category.svelte";

  const {style} = $props()
</script>

<section class="bg-slate-900 bg-opacity-95 flex flex-col gap-2 p-2 absolute left-0 w-full {style}">
  <h2 class="text-center text-xl">Mochila</h2>
  <div class="grid grid-cols-2 grid-rows-auto gap-4 h-min">
    {#each categories as category}
      <Category categoryName={category.name} categoryItems={category.items} />
    {/each}
  </div>
  <div class="flex-1"></div>
  <Button id="closeBag" label="Fechar Mochila" style="mt-1" />
</section>

<style>
  .startNewGame {
    top: 500%;
    bottom: auto;
  }
  .game {
    top: 146px;
    bottom: 0;
  }
</style>