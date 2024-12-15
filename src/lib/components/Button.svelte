<script>
  import { actionHandler } from "../functions/gameLoop";

  const { id, label, style } = $props();

  function handleClick(e) {
    e.target.disabled = true;

    actionHandler(e);

    setTimeout(() => {
      e.target.disabled = false;
    }, 300);
  }
</script>

<button data-actions id={id} onclick={handleClick} class={`py-2 bg-slate-500 rounded-md hover:bg-opacity-75 ${style} disabled:opacity-50 disabled:cursor-not-allowed`}>
  {label}
</button>