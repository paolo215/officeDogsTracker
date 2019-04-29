
const express = require("express");
const app = express();
const config = require("./config.json");

const port = config.server.port;
const dbHandler = require("./dbHandler/")();

dbHandler.init(config.db.filename);

const routes = require("./routes")(dbHandler);

app.use(routes.router);


console.log("Port: " + port);
app.listen(port);
