package controllers

import (
	"fmt"
	"github.com/google/uuid"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
	"github.com/redhat-marketplace/marketplace-games-ui/backend/models"
	"time"
)

var games = make(map[string]models.Game)

var gamesCounter = promauto.NewCounter(prometheus.CounterOpts{
	Namespace: "rhm_games",
	Name:      "number_of_games_played",
	Help:      "The number of games that have been started",
})

func StartGame(gameType models.GameType) models.Game {
	var game = models.Game{ID: uuid.New().String(), GameType: gameType, State: models.Started, StartTime: time.Now()}
	games[game.ID] = game
	gamesCounter.Add(1)
	fmt.Printf("\nStarted a new game with ID %s.\n", game.ID)
	return game
}

func GetGame(id string) (models.Game, bool) {
	fmt.Printf("\nSearching for game with ID %s.\n", id)
	game, found := games[id]
	return game, found
}

func GetGames() []models.Game {
	fmt.Printf("Getting all games")
	var gamesList = make([]models.Game, 0)
	for _, game := range games {
		gamesList = append(gamesList, game)
	}
	fmt.Printf("\nReturning %d games.\n", len(gamesList))
	return gamesList
}

func EndGame(id string) (models.Game, bool) {
	fmt.Printf("\nEnding for game with ID %s.\n", id)
	game, found := games[id]

	if found {
		game.State = models.Ended
		game.EndTime = time.Now()
		games[game.ID] = game
		fmt.Printf("\nEnded game with ID %s.\n", id)
	}
	// Leave the game in the "games" map for a short time after it's ended?
	return game, found
}
