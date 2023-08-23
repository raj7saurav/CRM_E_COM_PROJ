//This should be starting point of the server

const dbConfig = require("./configs/db.config");
const express = require("express");
const serverConfig = require("./configs/server.config");
const app = express();

const mongoose = require("mongoose"); 


//I need to connect to the database

mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;

db.on('error' , () =>{
    console.log("Error wile connecting to db");
});

db.once("open" , () => {
    console.log("Connected with database");
});


app.listen(serverConfig.PORT,() =>{
    console.log("Server started on the port no:" , serverConfig.PORT);

})