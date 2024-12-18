<script>
  import Header from "./lib/components/Header.svelte";
  import Game from "./lib/components/Game.svelte";
  import StartNewGame from "./lib/components/StartNewGame.svelte";
  import { gameState } from "./lib/stores/game";
  import GameOver from "./lib/components/GameOver.svelte";

  const styleNewGame = ``;
  const styleGame = `bg-slate-700`
</script>

  <main class={`text-slate-200 ${$gameState === 'off' ? styleNewGame : styleGame} p-2 w-dvw max-w-screen-sm flex flex-col h-dvh relative`}>
    <Header />

    {#if $gameState === 'off'}
      <div class="background"></div>  
    
      <StartNewGame />
      {:else}
      <Game />

      {#if $gameState === 'gameOver'}
      <GameOver />
      {/if}
    {/if}
  </main>

<style>
  .background {
    background-image: url('/images/bg-spira-rpg.jpg');
    background-size: cover;
    background-position: center;
    filter: brightness(0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    }
</style>