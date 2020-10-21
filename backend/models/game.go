// models/game.go

package models

import (
	"time"
)

// GameType represents the game being played
// Use the String function to convert the iota to a String representation
type GameType int

const (
	// Snake represents the snake game
	Snake GameType = iota

	// TicTacToe represents the tic tac toe game
	TicTacToe
)

func (gameType GameType) String() string {
	return [...]string{"Snake", "TicTacToe"}[gameType]
}

type GameState int

const (
	Started GameState = iota
	Ended
)

func (gameState GameState) String() string {
	return [...]string{"Started", "Ended"}[gameState]
}

// Game represents a game instance
type Game struct {
	ID        string    `json:"id"`
	GameType  GameType  `json:"gameType"`
	State     GameState `json:"state"`
	StartTime time.Time `json:"startTime"`
	EndTime   time.Time `json:"endTimex"`
}
