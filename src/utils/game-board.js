import { mod } from './base';

export function createRandomCoordinate(gridSize) {
  return {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1,
  };
}
export const areCoordinatesEqual = (c1) => (c2) =>
  c1.x === c2.x && c1.y === c2.y;
export const isValidMove = (move, state) =>
  state.moves[0].x + move.x !== 0 || state.moves[0].y + move.y !== 0;
export const nextHeadCoordinate = (state) => ({
  x: mod(state.gridSize + 1)(state.snakeBody[0].x + state.moves[0].x),
  y: mod(state.gridSize + 1)(state.snakeBody[0].y + state.moves[0].y),
});
export const willEat = (state) =>
  areCoordinatesEqual(nextHeadCoordinate(state))(state.foodCoordinate);
export const willCollide = (state) =>
  state.snakeBody.find(areCoordinatesEqual(nextHeadCoordinate(state)));
