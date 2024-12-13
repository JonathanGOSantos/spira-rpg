<script>
  import { gameState } from "../stores/game";

  function newGame() {
    gameState.set('off');
  }
</script>

<section class="grid place-items-center bg-slate-900 bg-opacity-85 text-white p-2">
  <div class="flex flex-col items-center bg-slate-800 bg-opacity-90 p-4 rounded-lg gap-4">
    <p class="text-center bg-slate-200 bg-opacity-20 p-4 rounded-lg">
        <span class="text-red-400">Fim de jogo!</span> Você foi derrotado por um inimigo poderoso. Mas não desanime! A jornada é longa e cheia de desafios. Continue treinando e aprimorando suas habilidades, e quem sabe, um dia você se tornará o herói que Spira precisa.  
    </p>

    <button onclick={newGame} class="bg-emerald-700 px-4 py-2 rounded-lg w-full">Tentar Novamente</button>
  </div>
</section>

<style>
  section {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100dvh;
  }
</style>