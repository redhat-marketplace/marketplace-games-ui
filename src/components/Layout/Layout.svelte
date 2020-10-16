<style>
  .header {
    align-items: center;
    background: url('/images/header-bar.svg') no-repeat bottom 0 left 0;
    background-size: 100%;
    display: flex;
    height: 3rem;
    max-width: 72rem;
    margin: 3rem auto 1rem;
    padding: 0 1rem;
  }

  .header :global(a) {
    color: #fff;
    font-size: 1.125rem;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    position: relative;
  }

  .header :global(a):before {
    content: ' ';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 1px;
    left: 0;
    background: #73bcf7;
    transition: box-shadow linear 100ms;
    box-shadow: 0 -2px 7px 0 #73bcf7;
  }

  .header :global(a):hover:before {
    box-shadow: 0 -10px 15px 0 #73bcf7;
  }

  .header--bold {
    font-weight: 700;
    margin-right: 0.25rem;
  }

  .container {
    background: url('/images/container-bg.svg') no-repeat top 0 left 0;
    background-size: 100%;
    display: flex;
    max-width: 72rem;
    padding: 2rem 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  .left-rail {
    align-items: center;
    background: url('/images/content-divider.svg') no-repeat top 0 right 1.5rem;
    background-size: auto 100%;
    padding-right: 3rem;
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
</script>

<Gradient />
<header class="header">
  <a class="logo" href="/"><span class="header--bold">RHM</span> Games</a>
</header>
<main>
  <div class="container">
    <section data-testid="left-rail" class="left-rail">
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
