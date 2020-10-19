package main

import (
	rice "github.com/GeertJohan/go.rice"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"log"
	"os"
)

var host = "localhost"
var port = "8080"
var ginMode = "debug"

func main() {
	appBox, err := rice.FindBox("../client/public")
	if err != nil {
		log.Fatal(err)
	}
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

	r.StaticFS("/", appBox.HTTPBox())

	println("Started on " + host + ":" + port)

	r.Run(host + ":" + port)
}
