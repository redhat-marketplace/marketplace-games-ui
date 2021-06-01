package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/redhat-marketplace/marketplace-games-ui/backend/models"
	"math/rand"
	"net/http"
)

// Ping provides a heartbeat response
func Ping(c *gin.Context) {
	c.JSON(
		http.StatusOK,
		gin.H{
			"response": "pong",
			"message":  models.Quotes[rand.Intn(len(models.Quotes))],
		},
	)
}
