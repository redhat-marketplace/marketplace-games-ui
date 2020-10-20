package snake

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/redhat-marketplace/marketplace-games-ui/backend/controllers"
	"github.com/redhat-marketplace/marketplace-games-ui/backend/models"
	"net/http"
)

// StartGame will initiate a new game
func StartGame(c *gin.Context) {
	game := controllers.StartGame(models.Snake)
	c.JSON(http.StatusOK, gin.H{"id": game.ID, "gameType": game.GameType.String(), "state": game.State.String(), "startTime": game.StartTime})
	return
}

// GetGame returns a game by id
func GetGame(c *gin.Context) {
	var id = c.Param("id")
	game, found := controllers.GetGame(id)
	if !found {
		fmt.Printf("\nGame with ID %s was not found.\n", id)
		c.JSON(http.StatusNotFound, gin.H{})
		return
	}
	fmt.Printf("\nFound game with ID %s.\n", id)
	if game.EndTime.IsZero() {
		c.JSON(http.StatusOK, gin.H{"id": game.ID, "gameType": game.GameType.String(), "state": game.State.String(), "startTime": game.StartTime})
	} else {
		c.JSON(http.StatusOK, gin.H{"id": game.ID, "gameType": game.GameType.String(), "state": game.State.String(), "startTime": game.StartTime, "endTime": game.EndTime})
	}
	return
}

// GetGames queries games
func GetGames(c *gin.Context) {
	gamesList := controllers.GetGames()
	// TODO remove endDate if not set
	// TODO set GameType as string value
	// TODO set State as string value
	c.JSON(http.StatusOK, gin.H{"games": gamesList})
	return
}

// EndGame queries all games
func EndGame(c *gin.Context) {
	var id = c.Param("id")
	game, found := controllers.EndGame(id)
	if !found {
		fmt.Printf("\nGame with ID %s was not found.\n", id)
		c.JSON(http.StatusNotFound, gin.H{})
		return
	}

	c.JSON(http.StatusOK, gin.H{"id": game.ID, "gameType": game.GameType.String(), "state": game.State.String(), "startTime": game.StartTime, "endTime": game.EndTime})
	return
}
