<style>
  .header {
    align-items: center;
    background: url('/images/header-bar.svg') no-repeat bottom 0 left 0;
    background-size: 100%;
    display: flex;
    height: 3rem;
    max-width: 72rem;
    margin: var(--spacing--09) auto var(--spacing--05);
    padding: 0 var(--spacing--05);
  }

  .header :global(a) {
    color: var(--color--white);
    font-size: 1.125rem;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 var(--spacing--05);
    position: relative;
  }

  .header :global(a):before {
    content: ' ';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 1px;
    left: 0;
    background: var(--color--blue-200);
    transition: box-shadow linear 100ms;
    box-shadow: 0 -2px 7px 0 var(--color--blue-200);
  }

  .header :global(a):hover:before {
    box-shadow: 0 -10px 15px 0 var(--color--blue-200);
  }

  .header--bold {
    font-weight: 700;
    margin-right: var(--spacing--02);
  }

  .container {
    background: url('/images/container-bg.svg') no-repeat top 0 left 0;
    background-size: 100%;
    display: flex;
    max-width: 72rem;
    padding: var(--spacing--07) var(--spacing--06);
    margin-left: auto;
    margin-right: auto;
  }

  .left-rail {
    align-items: center;
    background: url('/images/content-divider.svg') no-repeat top 0 right 1.5rem;
    background-size: auto 100%;
    padding-right: var(--spacing--09);
    width: 75%;
  }

  .right-rail {
    width: 25%;
  }
</style>

<script>
  import { currentGame } from '../../store/currentGame';
  import Gradient from './Gradient.svelte';
  import GameName from '../GameName/GameName.svelte';
  import Score from '../Score/Score.svelte';
  import Difficulty from '../Difficulty/Difficulty.svelte';

  $: scores = [
    { title: 'Current', score: $currentGame.currentScore },
    { title: 'PB', score: $currentGame.personalBest },
  ];

  let boardSize;
</script>

<Gradient />
<header class="header">
  <a class="logo" href="/"><span class="header--bold">RHM</span> Games</a>
</header>
<main>
  <div class="container">
    <section
      data-testid="left-rail"
      class="left-rail"
      bind:clientWidth={boardSize}
      style="--board-size: {boardSize - 136}px"
    >
      <slot />
    </section>
    <aside data-testid="right-rail" class="right-rail">
      <GameName name={$currentGame.name} />
      <Score {scores} />
      <Difficulty
        selected={$currentGame.gameDifficulty}
        options={$currentGame.gameLevels}
        on:change={(evt) => currentGame.setGameDifficulty(evt.target.value)}
      />
    </aside>
  </div>
</main>
