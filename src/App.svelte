<style>
  :global(:root) {
    --color-one: #fff;
  }

  :global(body) {
    background-color: #06092c;
    color: var(--color-one);
  }

  #game-board {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(42, 1fr);
    grid-template-columns: repeat(42, 1fr);
    border: 1px solid #0d7285;
    position: relative;
  }

  .container {
    padding: 38px;
    width: 100vmin;
    height: 100vmin;
    margin: auto;
  }
</style>

<script>
  import { onMount } from 'svelte';

  import Snake from './components/Snake.svelte';
  import Food from './components/Food.svelte';

  import { dropFirst, dropLast, merge } from './utils/base';
  import {
    createRandomCoordinate,
    isValidMove,
    nextHeadCoordinate,
    willEat,
    willCollide,
  } from './utils/game-board';

  import { DIRECTION, DIRECTION_VECTOR, GRID_SIZE } from './constants';
  import Gradient from './components/Gradient.svelte';

  // milliseconds between re-renders
  let FRAMES_PER_SECOND = 15;

  const initialState = () => ({
    gridSize: GRID_SIZE,
    columns: GRID_SIZE,
    rows: GRID_SIZE,
    foodCoordinate: createRandomCoordinate(GRID_SIZE),
    moves: [DIRECTION_VECTOR[DIRECTION.RIGHT]],
    snakeBody: [createRandomCoordinate(GRID_SIZE)],
  });

  const nextMoves = (state) =>
    state.moves.length > 1 ? dropFirst(state.moves) : state.moves;
  const nextFood = (state) =>
    willEat(state)
      ? createRandomCoordinate(state.gridSize)
      : state.foodCoordinate;
  const nextSnakeBody = (state) => {
    const isGameOver = willCollide(state);

    if (isGameOver) {
      return [];
    }

    return willEat(state)
      ? [nextHeadCoordinate(state), ...state.snakeBody]
      : [nextHeadCoordinate(state), ...dropLast(state.snakeBody)];
  };
  const enqueue = (state, move) =>
    isValidMove(move, state)
      ? merge(state)({ moves: [...state.moves, move] })
      : state;
  const nextState = (state) => ({
    gridSize: state.gridSize,
    rows: state.rows,
    columns: state.columns,
    foodCoordinate: nextFood(state),
    moves: nextMoves(state),
    snakeBody: nextSnakeBody(state),
  });
  const onKeyDown = (event) => {
    switch (event.key) {
      case 'w':
      case 'ArrowUp':
        currentState = enqueue(currentState, DIRECTION_VECTOR[DIRECTION.UP]);
        break;
      case 'a':
      case 'ArrowLeft':
        currentState = enqueue(currentState, DIRECTION_VECTOR[DIRECTION.LEFT]);
        break;
      case 's':
      case 'ArrowDown':
        currentState = enqueue(currentState, DIRECTION_VECTOR[DIRECTION.DOWN]);
        break;
      case 'd':
      case 'ArrowRight':
        currentState = enqueue(currentState, DIRECTION_VECTOR[DIRECTION.RIGHT]);
        break;
    }
  };
  const step = (currentTime) => (lastRenderedTime) => {
    if (lastRenderedTime - currentTime > 1000 / FRAMES_PER_SECOND) {
      currentState = nextState(currentState);
      requestAnimationFrame(step(lastRenderedTime));
    } else {
      requestAnimationFrame(step(currentTime));
    }
  };

  let currentState = initialState();

  onMount(() => {
    requestAnimationFrame(step(0));
  });
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<svelte:window on:keydown="{onKeyDown}" />

<main>
  <Gradient />
  <div class="container">
    <div id="game-board">
      <Snake snakeBodies="{currentState.snakeBody}" />
      <Food coordinates="{currentState.foodCoordinate}" />
    </div>
  </div>
</main>
