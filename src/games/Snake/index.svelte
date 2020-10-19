<style>
  #game-board {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid #0d7285;
    display: grid;
    grid-template-rows: repeat(42, 1fr);
    grid-template-columns: repeat(42, 1fr);
    position: relative;

    background-image: radial-gradient(
      circle at 1px 1px,
      rgba(255, 255, 255, 0.15) 1px,
      transparent 0
    );
    background-size: var(--grid-overlay-size) var(--grid-overlay-size);
    background-position: 2% 2%;
  }

  #game-board,
  .board-divider,
  .board-outline {
    width: 50vmin;
    height: 50vmin;
  }

  .board-divider,
  .board-outline {
    position: absolute;
  }

  .board-divider {
    opacity: 0;
    height: 1px;
    top: 25.75vmin;
    background: #aeefff;
    animation: disappear 1s ease-in reverse;
  }

  @keyframes disappear {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
</style>

<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';

  import Corners from '../../components/Corners/Corners.svelte';
  import { currentGame, currentGameLifecycle } from '../../store/currentGame';
  import GameStateModal from './GameStateModal.svelte';
  import Snake from './Snake.svelte';
  import Food from './Food.svelte';

  import { dropFirst, dropLast, merge } from '../../utils/base';
  import {
    createRandomCoordinate,
    isValidMove,
    nextHeadCoordinate,
    willEat,
    willCollide,
  } from './game-board';

  import { DIRECTION, DIRECTION_VECTOR, GRID_SIZE } from './constants';

  // milliseconds between re-renders
  let FRAMES_PER_SECOND = 15;

  let difficultyLevels = {
    Easy: 15,
    Normal: 20,
    Hard: 30,
  };

  currentGame.setGameDifficulty('Easy');
  currentGame.setGameLevels(Object.keys(difficultyLevels));

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
      throw Error('game over');
    } else if (willEat(state)) {
      currentGame.incrementScore();
      return [nextHeadCoordinate(state), ...state.snakeBody];
    } else {
      return [nextHeadCoordinate(state), ...dropLast(state.snakeBody)];
    }
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
    try {
      if (
        !(FRAMES_PER_SECOND === difficultyLevels[$currentGame.gameDifficulty])
      ) {
        FRAMES_PER_SECOND = difficultyLevels[$currentGame.gameDifficulty];
      }

      if ($currentGameLifecycle.isPlaying) {
        if (lastRenderedTime - currentTime > 1000 / FRAMES_PER_SECOND) {
          currentState = nextState(currentState);
          requestAnimationFrame(step(lastRenderedTime));
        } else {
          requestAnimationFrame(step(currentTime));
        }
      }
    } catch {
      currentGameLifecycle.setIsEndOfGame(true);
      currentGame.setPersonalBest($currentGame.currentScore);
      currentState = initialState();
    }
  };

  let currentState = initialState();
  let show = false;
  let gridCellSize;

  let fadeOptions = {
    duration: 1500,
    delay: 3150,
    easing: quintInOut,
  };

  $: if ($currentGameLifecycle.isPlaying) {
    requestAnimationFrame(step(0));
  }

  function calcDotSize() {
    // compute dot grid-size for background overly
    let foodEl = document.body.getElementsByClassName('food').item(0);
    gridCellSize =
      (foodEl &&
        Math.floor(
          window.getComputedStyle(foodEl).height.replace(/px$/, '')
        )) ||
      18;
  }

  onMount(() => {
    setTimeout(() => {
      show = true;
    }, 0);
    setTimeout(() => {
      calcDotSize();
    }, fadeOptions.delay);
  });
</script>

<svelte:window on:keydown={onKeyDown} on:resize={calcDotSize} />

{#if show}
  <div class="board-outline">
    <div class="board-divider" />
    <Corners />
  </div>
  <div
    in:fade={fadeOptions}
    out:fade
    id="game-board"
    data-testid="game-board"
    style="--grid-overlay-size: {gridCellSize}px"
  >
    <GameStateModal />
    <Snake snakeBodies={currentState.snakeBody} />
    <Food coordinates={currentState.foodCoordinate} />
  </div>
{/if}
