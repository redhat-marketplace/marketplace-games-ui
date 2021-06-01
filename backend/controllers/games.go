package controllers

import (
	"errors"
	"fmt"
	"github.com/google/uuid"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
	"github.com/redhat-marketplace/marketplace-games-ui/backend/models"
	"log"
	"time"
)

var games = make(map[string]models.Game)

const (
	Started = "Started"
	Ended   = "Ended"
)

var gamesCounter = promauto.NewCounter(prometheus.CounterOpts{
	Namespace: "rhm_games",
	Name:      "number_of_games_played",
	Help:      "The number of games that have been started",
})

func StartGame(gameType string) models.Game {
	game := models.Game{
		ID:        uuid.New().String(),
		GameType:  gameType,
		State:     Started,
		StartTime: time.Now(),
	}
	games[game.ID] = game
	gamesCounter.Add(1)
	log.Println("Started a new ", game.GameType, " game with ID ", game.ID, ".")
	return game
}

func GetGame(id string) (error, models.Game) {
	log.Println("Searching for game with ID of", id, ".")

	game, found := games[id]
	if !found {
		return errors.New(fmt.Sprintln("Unable to find game with ID ", id, ".")), game
	}

	return nil, game
}

func GetGames() []models.Game {
	log.Println("Getting all games.")

	gamesList := make([]models.Game, 0, len(games))
	for _, game := range games {
		gamesList = append(gamesList, game)
	}

	log.Println("Returning ", len(gamesList), " games.")
	return gamesList
}

func EndGame(id string) (error, models.Game) {
	log.Println("Ending for game with ID ", id, ".")
	game, found := games[id]

	if !found {
		return errors.New(fmt.Sprintln("Unable find game with ID of", id, ".")), game
	} else {
		game.State = Ended
		game.EndTime = time.Now()
		games[game.ID] = game
		log.Println("Ended game with ID ", id, ".")
	}

	// TODO Leave the game in the "games" map for a short time after it's ended?
	return nil, game
}
