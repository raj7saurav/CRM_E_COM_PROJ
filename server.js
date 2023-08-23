//This should be starting point of the server

const serverConfig = require("./configs/server.config");
const dbConfig = require("./configs/server.config");
const express=require('express');

const app = express();

app.listen(serverConfig.PORT,() =>{
    console.log("Server started on the port no:" , serverConfig.PORT);
    
})