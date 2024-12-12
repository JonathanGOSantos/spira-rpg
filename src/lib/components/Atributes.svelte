<script>
  import { components } from '../stores/actions';
  import { playerStore } from '../stores/player.js';
</script>

<section class="grid grid-cols-2 gap-2 pt-2">
  <p class="py-2 bg-slate-500 rounded-md text-center">Vida: {$playerStore.health}/{$playerStore.maxHealth}</p>
  <p class="py-2 bg-slate-500 rounded-md text-center">Nível: {$playerStore.level} | XP: {$playerStore.experience}</p>
  <p class="py-2 bg-slate-500 rounded-md text-center">Força: {$playerStore.attack}</p>

  <button onclick={components.showActions} class="py-2 bg-slate-500 rounded-md text-center hover:bg-opacity-75">Voltar</button>
</section>