package controllers

import (
	"github.com/gin-gonic/gin"
	"math/rand"
	"net/http"
)

// Ping provides a heartbeat response
func Ping(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"response": "pong", "message": Quotes[rand.Intn(len(Quotes))]})
}
