package main

import (
	"api/pkg/get"
	"log"
	"net/http"
	"github.com/rs/cors"
)

func main (){
	mux := http.NewServeMux()
	mux.HandleFunc("/api/get", get.Get)

	handler := cors.Default().Handler(mux)

	log.Println("Starting Server on :8080")
	err := http.ListenAndServe(":8080", handler)
	if err != nil {
		log.Fatal(err)
	}
}