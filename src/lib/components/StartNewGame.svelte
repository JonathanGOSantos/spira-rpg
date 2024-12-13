<script>
  import { startNewGame } from "../functions/startNewGame";

  let name;
  let form;

  function startGame() {
    if (form.checkValidity()) {
      startNewGame(name);
    } else {
      form.reportValidity();
    }
  }
</script>

<section class="py-4 flex-1 grid place-items-center">
  <p class="text-center bg-slate-200 bg-opacity-20 p-4 rounded-lg">
    Bem-vindo a Spira, uma terra onde a energia da vida pulsa em cada folha, em cada sopro de vento, e nas profundezas dos corações dos aventureiros. Aqui, desafios épicos e segredos antigos aguardam aqueles corajosos o suficiente para explorá-los. 
  </p>

  <form bind:this={form} class="flex flex-col items-center gap-2 bg-slate-200 bg-opacity-20 p-4 rounded-lg" on:submit|preventDefault={startGame}>
    <label class="flex flex-col items-center gap-1">
      <span class="text-slate-200">Nome do Personagem</span>
      <input type="text" bind:value={name} placeholder="Nome..." class="p-2 rounded-lg bg-slate-200 bg-opacity-50 border border-slate-800 text-slate-800 placeholder:text-slate-200 placeholder:text-center text-center" required />
    </label>
    <button type="submit" class="bg-emerald-700 px-4 py-2 rounded-lg w-full">Novo Jogo</button>
  </form>
</section>
