<style>
  .header {
    margin-bottom: var(--spacing--07);
    text-transform: uppercase;
  }

  .score {
    text-align: center;
    margin-bottom: var(--spacing--07);
    text-transform: uppercase;
  }

  .score h3 {
    font-size: var(--spacing--06);
    font-weight: var(--font-weight--medium);
  }

  .score p {
    color: var(--color--light-blue-400);
    margin-bottom: var(--spacing--03);
  }
</style>

<script>
  import { currentGame, currentGameLifecycle } from '../../store/currentGame';
  import Modal from '../../components/Modal/Modal.svelte';
  import Button from '../../components/Button/Button.svelte';

  async function newGame() {
    try {
      const res = await fetch(`http://localhost:8080/games/api/snake`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      });
      const game = await res.json();
      currentGameLifecycle.setCurrentGameId(game.id);
    } catch (e) {
      console.error(`An error occurred when attempting start the game: ${e}`);
    } finally {
      currentGame.resetCurrentScore();
      currentGameLifecycle.setIsPlaying(true);
    }
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
    <Button on:click={newGame}>Start</Button>
  {/if}
</Modal>
