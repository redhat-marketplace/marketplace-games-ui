<style>
  .scores {
    display: flex;
  }

  .score-block {
    background: url('/images/verticle-divider.svg') no-repeat top 0 right 0;
    margin-right: var(--spacing--05);
    padding-right: var(--spacing--06);
    padding-bottom: var(--spacing--04);
  }

  .score-block:last-child {
    background: transparent;
    padding-right: 0;
    margin-right: 0;
  }

  .score-block__title {
    color: var(--color--light-blue-400);
    text-transform: uppercase;
    font-weight: var(--font-weight--medium);
    font-size: 0.875rem;
    margin-bottom: var(--spacing--02);
  }

  .score-block__score {
    text-transform: uppercase;
    font-weight: var(--font-weight--bold);
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
