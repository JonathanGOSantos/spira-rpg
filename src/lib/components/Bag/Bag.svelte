<script>
  import { get } from "svelte/store";
  import { bagStore, setCategories } from "../../stores/bag";
  import Button from "../Button.svelte";
  import Category from "./components/Category.svelte";
  
  const categories = setCategories(get(bagStore));
</script>

<section class={`bg-slate-900 bg-opacity-95 flex flex-col gap-2 p-2 absolute top-[72px] bottom-0 left-0 w-full`}>
  <h2 class="text-center text-xl">Mochila</h2>
  <div class="grid grid-cols-2 gap-4">
    {#each categories as category}
      <Category categoryName={category.name} categoryItems={category.items} />
    {/each}
  </div>
  <Button id="closeBag" label="Fechar Mochila" style="col-span-2 mt-1" />
</section>