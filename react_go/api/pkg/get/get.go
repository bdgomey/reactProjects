package get

import (
	db_connection "api/pkg/connection"
	"encoding/json"
	"log"
	"net/http"
)

type Person struct {
	ID      int    `json:"id"`
	Name    string `json:"Name"`
	Age     int    `json:"Age"`
	Address string `json:"Address"`
	Height  int    `json:"Heigth"`
	Weight  int    `json:"Weight"`
}

func Get(w http.ResponseWriter, r *http.Request) {
	
	db, err := db_connection.DB_connection()
	if err != nil{
		log.Fatal(err)
	}

	rows, err := db.Query("SELECT * FROM person")
	if err != nil{
		log.Fatal(err)
	}
	defer rows.Close()

	var people []Person
	for rows.Next(){
		var p Person
		err := rows.Scan(&p.ID,&p.Name, &p.Age, &p.Address, &p.Height, &p.Weight)
		if err != nil{
			log.Fatal(err)
		}
		people = append(people, p)
	}
	w.Header().Set("Content-Type", "application/json")

	err = json.NewEncoder(w).Encode(people)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
