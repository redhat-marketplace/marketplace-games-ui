<style>
  #game-board {
    background: rgba(0, 0, 0, 0.2);
    width: 50vmin;
    height: 50vmin;
    border: 1px solid #0d7285;
    display: grid;
    grid-template-rows: repeat(42, 1fr);
    grid-template-columns: repeat(42, 1fr);
    position: relative;
  }
</style>

<script>
  import { onMount } from 'svelte';

  import { currentGame, currentGameLifecycle } from '../../store/currentGame';
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
      currentGame.resetCurrentScore();
      currentState = initialState();
    }
  };

  let currentState = initialState();

  $: if ($currentGameLifecycle.isPlaying) {
    requestAnimationFrame(step(0));
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<div id="game-board" data-testid="game-board">
  <Snake snakeBodies={currentState.snakeBody} />
  <Food coordinates={currentState.foodCoordinate} />
</div>
