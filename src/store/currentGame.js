import { writable } from 'svelte/store';

export function createGameStore({
  name = 'Snake',
  scoreInc = 10,
  currentScore = 0,
  personalBest = 0,
}) {
  const { subscribe, update } = writable({
    currentScore,
    name,
    personalBest,
    scoreInc,
  });

  return {
    subscribe,
    incrementScore: () =>
      update((self) => ({
        ...self,
        currentScore: (self.currentScore += self.scoreInc),
      })),
    resetCurrentScore: () => update((self) => ({ ...self, currentScore: 0 })),
    setName: (name) => update((self) => ({ ...self, name })),
    setPersonalBest: (newScore) =>
      update((self) => {
        if (newScore > self.personalBest) self.personalBest = newScore;
        return self;
      }),
  };
}

export function createGameLifecycle() {
  const { subscribe, update, set } = writable({
    isPlaying: false,
    isEndOfGame: false,
  });

  return {
    subscribe,
    setIsPlaying: (isPlaying) => update((self) => ({ ...self, isPlaying })),
    setIsEndOfGame: () =>
      update((self) => ({
        ...self,
        isPlaying: false,
        isEndOfGame: true,
      })),
    reset: () => set({ isPlaying: false, isEnd: false }),
  };
}

export let currentGame = createGameStore({});
export let currentGameLifecycle = createGameLifecycle();
