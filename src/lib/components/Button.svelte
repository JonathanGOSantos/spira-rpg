<script>
  import { actionHandler } from "../functions/gameLoop";

  const { id, label, style, disabled } = $props();
</script>

<button data-actions id={id} onclick={actionHandler} class="py-2 bg-slate-500 rounded-md hover:bg-opacity-75 {style} disabled:opacity-50 disabled:cursor-not-allowed" {disabled}>
  {label}
</button>