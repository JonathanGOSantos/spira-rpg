<script>
  const {categoryName, categoryItems } = $props();
</script>

<section class="flex flex-col items-center gap-2 bg-slate-700 bg-opacity-20 p-2 rounded-lg">
  <h3 class="text-center">{categoryName}</h3>

  <ul class="flex justify-center gap-4">
    {#each categoryItems as item}
    <li class="flex flex-col items-center gap-2">
      <img src={item.icon.url} alt={item.alt || item.name}>
      <p class="text-sm">{item.amount || 0}</p>
    </li>
    {/each}
  </ul>
</section>