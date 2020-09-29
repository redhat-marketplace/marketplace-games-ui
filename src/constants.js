export const DIRECTION = {
  UP: "UP",
  LEFT: "LEFT",
  DOWN: "DOWN",
  RIGHT: "RIGHT",
};
export const DIRECTION_VECTOR = {
  [DIRECTION.UP]: {x: 0, y: -1},
  [DIRECTION.DOWN]: {x: 0, y: 1},
  [DIRECTION.RIGHT]: {x: 1, y: 0},
  [DIRECTION.LEFT]: {x: -1, y: 0},
};
export const GRID_SIZE = 42;
