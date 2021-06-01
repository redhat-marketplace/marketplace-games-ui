package snake

import (
	"github.com/gin-gonic/gin"
	"github.com/redhat-marketplace/marketplace-games-ui/backend/controllers"
	"github.com/redhat-marketplace/marketplace-games-ui/backend/models"
	"log"
	"net/http"
)

// StartGame will initiate a new game.
func StartGame(c *gin.Context) {
	game := controllers.StartGame(models.Snake)
	c.JSON(
		http.StatusOK,
		gin.H{
			"id":        game.ID,
			"gameType":  game.GameType,
			"state":     game.State,
			"startTime": game.StartTime,
		},
	)
	return
}

// GetGame returns a game with the id passed.
func GetGame(c *gin.Context) {
	id := c.Param("id")
	err, game := controllers.GetGame(id)

	if err != nil {
		log.Println(err)
		c.JSON(http.StatusNotFound, gin.H{})
		return
	}

	log.Println("Found game with ID ", id, ".")

	data := gin.H{
		"id":        game.ID,
		"gameType":  game.GameType,
		"state":     game.State,
		"startTime": game.StartTime,
	}
	if !game.EndTime.IsZero() {
		data["endTime"] = game.EndTime
	}
	c.JSON(http.StatusOK, data)
	return
}

// GetGames returns all games.
func GetGames(c *gin.Context) {
	gamesList := controllers.GetGames()
	// TODO remove endDate if not set
	// TODO set GameType as string value
	// TODO set State as string value
	c.JSON(http.StatusOK, gin.H{"games": gamesList})
	return
}

// EndGame stops the game with the id passed.
func EndGame(c *gin.Context) {
	id := c.Param("id")
	err, game := controllers.EndGame(id)
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusNotFound, gin.H{})
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"id":        game.ID,
			"gameType":  game.GameType,
			"state":     game.State,
			"startTime": game.StartTime,
			"endTime":   game.EndTime,
		},
	)
	return
}
