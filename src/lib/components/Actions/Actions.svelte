<script>
  import { get } from "svelte/store";

  import { battleState } from "../../stores/battle";
  import { bagStore } from "../../stores/bag";
  import Button from "../Button.svelte";
</script>
<section class="grid grid-cols-2 gap-2 pt-2">
    {#if $battleState.goingOn}
      <Button id="playerAttack" label="Atacar" />
      <Button id="playerEscape" label="Fugir" />
    {:else}
      <Button id="playerMoveForward" label="Avançar" />
      <Button id="playerRelax" label="Descançar" />
    {/if}
    
    <Button id="toggleBag" label="Mochila"/>
    <Button id="openAtributes" label="Atributos" />
</section>