package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/redhat-marketplace/marketplace-games-ui/backend/controllers"
	"github.com/redhat-marketplace/marketplace-games-ui/backend/handlers/snake"
	"log"
	"os"
)

var host = "localhost"
var port = "8080"
var ginMode = "debug"

type Server struct {
	Router *gin.Engine
}

func (s *Server) init() {
	s.Router.Use(cors.Default())
	s.Router.Use(static.Serve("/", static.LocalFile("./dist", true)))

	s.Router.GET("/status/ping", controllers.Ping)
	s.Router.GET("/metrics", gin.WrapH(promhttp.Handler()))
}

func (s *Server) routes() {
	snakeAPI := s.Router.Group("/games/api/snake")
	snakeAPI.POST("", snake.StartGame)
	snakeAPI.GET("", snake.GetGames)
	snakeAPI.GET("/:id", snake.GetGame)
	snakeAPI.PUT("/:id", snake.EndGame)
}

func (s *Server) Start() {
	s.init()
	s.routes()

	if err := s.Router.Run(host + ":" + port); err != nil {
		panic("Server failed to start.")
	}
}

func main() {
	envHost, ok := os.LookupEnv("HOST")
	if ok {
		host = envHost
		log.Println("Got host from environment: " + host)
	}

	envPort, ok := os.LookupEnv("PORT")
	if ok {
		port = envPort
		log.Println("Got port from environment: " + port)
	}

	envGinMode, ok := os.LookupEnv("GIN_MODE")
	if ok {
		ginMode = envGinMode
		log.Println("Got Gin mode from environment: " + ginMode)
	}

	gin.SetMode(ginMode)
	s := &Server{
		Router: gin.Default(),
	}
	s.Start()
}
