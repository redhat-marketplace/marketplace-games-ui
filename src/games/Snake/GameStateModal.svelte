<style>
  .header {
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  .score {
    text-align: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  .score h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .score p {
    color: #00b9e4;
    margin-bottom: 0.5rem;
  }
</style>

<script>
  import { currentGame, currentGameLifecycle } from '../../store/currentGame';
  import Modal from '../../components/Modal/Modal.svelte';
  import Button from '../../components/Button/Button.svelte';

  function newGame() {
    currentGame.resetCurrentScore();
    currentGameLifecycle.setIsPlaying(true);
  }
</script>

<Modal open={!$currentGameLifecycle.isPlaying}>
  {#if $currentGameLifecycle.isEndOfGame}
    <h2 class="header">Game over</h2>
    <div class="score">
      <p>Final score</p>
      <h3>{$currentGame.currentScore}</h3>
    </div>
    <Button on:click={newGame}>New game</Button>
  {:else}
    <h2 class="header">Ready to play?</h2>
    <Button on:click={() => currentGameLifecycle.setIsPlaying(true)}>
      Start
    </Button>
  {/if}
</Modal>
