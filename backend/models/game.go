// models/game.go

package models

import (
	"time"
)

const (
	Snake     = "Snake"
	TicTacToe = "TicTacToe"
)

// Game represents a game instance.
type Game struct {
	ID        string    `json:"id"`
	GameType  string    `json:"gameType"`
	State     string    `json:"state"`
	StartTime time.Time `json:"startTime"`
	EndTime   time.Time `json:"endTime"`
}
