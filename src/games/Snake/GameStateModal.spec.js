import { fireEvent, render, screen } from '@testing-library/svelte';

import GameStateModal from './GameStateModal.svelte';
import { currentGame, currentGameLifecycle } from '../../store/currentGame';

describe('<GameStateModal />', function () {
  describe('default state', function () {
    beforeEach(() => render(GameStateModal));

    it('should render Ready to play by default', function () {
      expect(
        screen.getByRole('heading', { name: /Ready to play/i })
      ).toBeInTheDocument();
    });

    it('should render a start button by default', async function () {
      expect(
        screen.getByRole('button', { name: /Start/i })
      ).toBeInTheDocument();
    });

    it('should hide the the modal when the user clicks the start button', async function () {
      const button = screen.getByRole('button', { name: /Start/i });

      await fireEvent.click(button);

      expect(
        screen.queryByRole('heading', { name: /Ready to play/i })
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /Start/i })
      ).not.toBeInTheDocument();
    });
  });

  describe('game over state', function () {
    it('should render the end of game screen with currentGameLifecycle.isEndOfGame is true', async function () {
      currentGame.incrementScore();
      currentGameLifecycle.setIsEndOfGame(true);

      render(GameStateModal);

      const button = screen.getByRole('button', { name: /New game/i });

      expect(
        screen.queryByRole('heading', { name: /Ready to play/i })
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /Start/i })
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: /Game over/i })
      ).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /10/i })).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });

    it('should reset the game state when the New game button is clicked', async function () {
      currentGame.incrementScore();
      currentGameLifecycle.setIsEndOfGame(true);

      render(GameStateModal);

      const button = screen.getByRole('button', { name: /New game/i });

      await fireEvent.click(button);

      expect(button).not.toBeInTheDocument();
      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    });
  });
});
