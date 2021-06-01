package main

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/redhat-marketplace/marketplace-games-ui/backend/models"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestGETStatusPing(t *testing.T) {
	s := &Server{
		Router: gin.Default(),
	}
	s.init()

	t.Run("should return the correct status code", func(t *testing.T) {
		req := httptest.NewRequest("GET", "/status/ping", nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		got := w.Code
		want := http.StatusOK

		if got != want {
			t.Errorf("GET /status/ping status code = %d; want %d", got, want)
		}
	})

	t.Run("should return {\"response\": \"pong\"}", func(t *testing.T) {
		req := httptest.NewRequest("GET", "/status/ping", nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		got := w.Body.String()
		want := "\"response\":\"pong\""

		if !strings.Contains(got, want) {
			t.Errorf("GET /status/ping response = %s; want %s", got, want)
		}
	})
}

func TestGETGameAPISnake(t *testing.T) {
	type games struct {
		Games []models.Game `json:"games"`
	}

	s := &Server{
		Router: gin.Default(),
	}
	s.routes()

	basePath := "/games/api/snake"

	t.Run("should return the correct status code", func(t *testing.T) {
		req := httptest.NewRequest("GET", basePath, nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		got := w.Code
		want := http.StatusOK

		if got != want {
			t.Errorf("POST /games/api/snake status code = %d; want %d", got, want)
		}
	})

	t.Run("should return an empty slice for games if none have been created", func(t *testing.T) {
		req := httptest.NewRequest("GET", basePath, nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		var resp games
		if err := json.Unmarshal([]byte(w.Body.String()), &resp); err != nil {
			t.Fatalf("failed to marshal JSON for response: err = %v", err)
		}

		got := len(resp.Games)
		want := 0

		if got != want {
			t.Errorf("GET /games/api/snake number of games = %d; want %d", got, want)
		}
	})

	t.Run("should return any games that have been created", func(t *testing.T) {
		createGame(t, s)
		req := httptest.NewRequest("GET", basePath, nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		var resp games
		if err := json.Unmarshal([]byte(w.Body.String()), &resp); err != nil {
			t.Fatalf("failed to marshal JSON for response: err = %v", err)
		}

		got := len(resp.Games)
		want := 1

		if got != want {
			t.Errorf("GET /games/api/snake number of games = %d; want %d", got, want)
		}
	})
}

func TestPOSTGameAPISnake(t *testing.T) {
	s := &Server{
		Router: gin.Default(),
	}
	s.routes()

	basePath := "/games/api/snake"

	t.Run("should return the correct status code", func(t *testing.T) {
		req := httptest.NewRequest("POST", basePath, nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		got := w.Code
		want := http.StatusOK

		if got != want {
			t.Errorf("POST /games/api/snake status code = %d; want %d", got, want)
		}
	})

	t.Run("should return the newly created game", func(t *testing.T) {
		req := httptest.NewRequest("POST", basePath, nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		var resp models.Game
		if err := json.Unmarshal([]byte(w.Body.String()), &resp); err != nil {
			t.Fatalf("failed to marshal JSON for response: err = %v", err)
		}

		if resp.ID == "" {
			t.Errorf("POST /games/api/snake id = \"\"; want unique id")
		}

		if resp.GameType != "Snake" {
			t.Errorf("POST /games/api/snake gameType = %s; want %s", resp.GameType, "Snake")
		}

		if resp.State != "Started" {
			t.Errorf("POST /games/api/snake state = %s; want %s", resp.State, "Started")
		}
	})
}

func TestGETGameAPISnakeID(t *testing.T) {
	s := &Server{
		Router: gin.Default(),
	}
	s.routes()

	basePath := "/games/api/snake"
	newGame := createGame(t, s)

	t.Run("should return the correct status code if the game is not found", func(t *testing.T) {
		req := httptest.NewRequest("GET", basePath+"123", nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		got := w.Code
		want := http.StatusNotFound

		if got != want {
			t.Errorf("POST /games/api/snake status code = %d; want %d", got, want)
		}
	})

	t.Run("should return the correct status code if the game is found", func(t *testing.T) {
		req := httptest.NewRequest("GET", basePath+"/"+newGame.ID, nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		got := w.Code
		want := http.StatusOK

		if got != want {
			t.Errorf("POST /games/api/snake status code = %d; want %d", got, want)
		}
	})

	t.Run("should return the game as the response", func(t *testing.T) {
		req := httptest.NewRequest("GET", basePath+"/"+newGame.ID, nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		var resp models.Game
		if err := json.Unmarshal([]byte(w.Body.String()), &resp); err != nil {
			t.Fatalf("failed to marshal JSON for response: err = %v", err)
		}

		got := resp.ID
		want := newGame.ID

		if got != want {
			t.Errorf("GET /games/api/snake/:id id = %s; want %s", got, want)
		}
	})
}

func TestPUTGameAPISnakeID(t *testing.T) {
	s := &Server{
		Router: gin.Default(),
	}
	s.routes()

	basePath := "/games/api/snake"
	newGame := createGame(t, s)

	t.Run("should return the correct status code if the game is not found", func(t *testing.T) {
		req := httptest.NewRequest("PUT", basePath+"123", nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		got := w.Code
		want := http.StatusNotFound

		if got != want {
			t.Errorf("POST /games/api/snake status code = %d; want %d", got, want)
		}
	})

	t.Run("should return the correct status code if the game is found", func(t *testing.T) {
		req := httptest.NewRequest("PUT", basePath+"/"+newGame.ID, nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		got := w.Code
		want := http.StatusOK

		if got != want {
			t.Errorf("POST /games/api/snake status code = %d; want %d", got, want)
		}
	})

	t.Run("should return the game as the response with a new endTime and state property", func(t *testing.T) {
		req := httptest.NewRequest("PUT", basePath+"/"+newGame.ID, nil)
		w := httptest.NewRecorder()
		s.Router.ServeHTTP(w, req)

		var resp models.Game
		if err := json.Unmarshal([]byte(w.Body.String()), &resp); err != nil {
			t.Fatalf("failed to marshal JSON for response: err = %v", err)
		}

		if resp.EndTime == newGame.EndTime {
			t.Errorf("PUT /games/api/snake should have set a new end time; got = %s; previous = %s", resp.EndTime, newGame.EndTime)
		}

		tests := []struct {
			name   string
			errStr string
			got    string
			want   string
		}{
			{
				name:   "has the correct id",
				errStr: "id",
				got:    resp.ID,
				want:   newGame.ID,
			},
			{
				name:   "state has changed to ended",
				errStr: "state",
				got:    resp.State,
				want:   "Ended",
			},
		}

		for _, tt := range tests {
			t.Run(tt.name, func(t *testing.T) {
				if tt.got != tt.want {
					t.Errorf("PUT /games/api/snake - %s = %s; want %s", tt.errStr, tt.got, tt.want)
				}
			})
		}
	})
}

func createGame(t *testing.T, s *Server) models.Game {
	t.Helper()

	req := httptest.NewRequest("POST", "/games/api/snake", nil)
	w := httptest.NewRecorder()
	s.Router.ServeHTTP(w, req)

	var resp models.Game
	if err := json.Unmarshal([]byte(w.Body.String()), &resp); err != nil {
		t.Fatalf("failed to marshal JSON for createGame response: err = %v", err)
	}

	return resp
}
