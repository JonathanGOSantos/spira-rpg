<script>
  import { useItem } from "../../../functions/useItem";

  const {categoryName, categoryItems } = $props();
</script>

<section class="flex flex-col items-center gap-2 bg-slate-700 bg-opacity-20 p-2 rounded-lg h-fit">
  <h3 class="text-center">{categoryName}</h3>

  <ul class="flex justify-center gap-4">
    {#each categoryItems as item}
    <li class="flex flex-col items-center gap-2">
      <button 
      class="border outline-none rounded-md p-1 hover:bg-slate-600" 
      onclick={(e) => useItem(item, e)}
      >
        <img src={item.icon.url} alt={item.alt || item.name}>
      </button>
        <p class="text-sm">{item.amount || 0}</p>
    </li>
    {/each}
  </ul>
</section>