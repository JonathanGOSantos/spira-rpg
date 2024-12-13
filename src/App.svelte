<script>
  import Header from "./lib/components/Header.svelte";
  import Game from "./lib/components/Game.svelte";
  import StartNewGame from "./lib/components/StartNewGame.svelte";
  import { gameState } from "./lib/stores/game";
  import GameOver from "./lib/components/GameOver.svelte";

  const styleNewGame = `text-slate-100`;
  const styleGame = `text-slate-200`
</script>

<main class={`${$gameState === 'off' ? styleNewGame : styleGame}  sm:border-x border-slate-500 p-2 max-w-screen-sm mx-auto flex flex-col h-dvh`}>
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