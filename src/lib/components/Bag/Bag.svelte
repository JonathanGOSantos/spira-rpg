<script>
  import { get } from "svelte/store";
  import { bagStore, categories } from "../../stores/bag";
  import Button from "../Button.svelte";
  import Category from "./components/Category.svelte";

  const {style} = $props()
</script>

<section class="absolute {style} left-0 w-full h-dvh grid place-items-center bg-slate-700 bg-opacity-90">
  <div class="bg-slate-900 bg-opacity-95 rounded-lg flex flex-col gap-2 p-2">
    <h2 class="text-center text-xl">Mochila</h2>
    <div class="grid grid-cols-2 grid-rows-auto gap-4 h-min">
    {#each categories as category}
      <Category categoryName={category.name} categoryItems={category.items} />
      {/each}
    </div>
    <Button id="toggleBag" label="Fechar Mochila"/>
  </div>
</section>

<style>
  .startNewGame {
    top: 500%;
  }
  .game {
    top: 0;
  }
</style>