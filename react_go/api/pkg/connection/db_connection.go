package db_connection

import (
	"database/sql"
	"log"
	"github.com/go-sql-driver/mysql"
	_ "github.com/go-sql-driver/mysql"
)


func DB_connection() (*sql.DB, error){

	cfg := mysql.Config{
		User: "root",
		Passwd: "AvaMohr0414!",
		Net: "tcp",
		DBName: "golang",
		Addr: "127.0.0.1:3306",
		AllowNativePasswords: true,
	}

	dsn := cfg.FormatDSN()
	db, err := sql.Open("mysql", dsn)
	if err != nil{
		log.Fatal(err)
	}
	
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}
	return db, nil
}