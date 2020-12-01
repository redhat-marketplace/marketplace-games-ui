package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/redhat-marketplace/marketplace-games-ui/backend/controllers"
	"github.com/redhat-marketplace/marketplace-games-ui/backend/handlers/snake"
	"os"
)

var host = "localhost"
var port = "8080"
var ginMode = "debug"

func main() {
	envHost, ok := os.LookupEnv("HOST")
	if ok {
		host = envHost
		println("Got host from environment: " + host)
	}

	envPort, ok := os.LookupEnv("PORT")
	if ok {
		port = envPort
		println("Got port from environment: " + port)
	}

	envGinMode, ok := os.LookupEnv("GIN_MODE")
	if ok {
		ginMode = envGinMode
		println("Got Gin mode from environment: " + ginMode)
	}

	gin.SetMode(ginMode)
	r := gin.Default()
	r.Use(cors.Default())

	r.Use(static.Serve("/", static.LocalFile("./dist", true)))

	r.GET("/status/ping", controllers.Ping)
	r.GET("/metrics", gin.WrapH(promhttp.Handler()))

	r.POST("/games/api/snake", snake.StartGame)
	r.GET("/games/api/snake", snake.GetGames)
	r.GET("/games/api/snake/:id", snake.GetGame)
	r.PUT("/games/api/snake/:id", snake.EndGame)

	println("Started on " + host + ":" + port)

	if err := r.Run(host + ":" + port); err != nil {
		panic("Server could not start.")
	}
}
