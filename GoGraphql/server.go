package main

import (
	"Go_Graphql/graph"
	"Go_Graphql/graph/generated"
  "Go_Graphql/graph/postgre"
  "github.com/go-chi/chi"
  "github.com/go-pg/pg/v10"
  "github.com/rs/cors"
  "log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
)

const defaultPort = "5000"

func main() {
  router := chi.NewRouter()
  router.Use(cors.New(cors.Options{
    AllowedOrigins:   []string{"http://localhost:4200"},
    AllowCredentials: true,
    Debug:            true,
  }).Handler)

  pgDB := pg.Connect(&pg.Options{
    Addr:     ":5436",
    User:     "postgres",
    Password: "postgres",
    Database: "Youtube_Clone",
  })
  defer pgDB.Close()

  pgDB.AddQueryHook(postgre.DBLogger{})

  port := os.Getenv("PORT")
  if port == "" {
    port = defaultPort
  }

  srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{DB: pgDB}}))

  router.Handle("/", playground.Handler("GraphQL playground", "/query"))
  router.Handle("/query", srv)

  log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
  log.Fatal(http.ListenAndServe(":"+port, router))
}
