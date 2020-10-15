<style>
  .scores {
    display: flex;
  }

  .score-block {
    background: url('/images/verticle-divider.svg') no-repeat top 0 right 0;
    margin-right: 1rem;
    padding-right: 1.5rem;
    padding-bottom: 0.75rem;
  }

  .score-block:last-child {
    background: transparent;
    padding-right: 0;
    margin-right: 0;
  }

  .score-block__title {
    color: #00b9e4;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }

  .score-block__score {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.125rem;
  }
</style>

<script>
  import Block from '../Block/Block.svelte';

  export let scores = [];
</script>

<Block title="Score">
  {#if scores.length > 0}
    <div class="scores">
      {#each scores as { title, score }}
        <div class="score-block">
          <p class="score-block__title">{title}</p>
          <p class="score-block__score">{score}</p>
        </div>
      {/each}
    </div>
  {:else}
    <p>No scores available</p>
  {/if}
</Block>
