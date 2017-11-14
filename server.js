//====================================================================
// DEPENDENCIES
//====================================================================
var express = require("express");
var bodyParser = require("body-parser");
var expHand = require("express-handlebars");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// Requiring our models for syncing
var db = require("./models");
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Static directory
app.use(express.static("public"));

app.engine("handlebars", expHand({
	defaultLayout: "main"
}));

app.set("view engine", "handlebars")

// Routes
// =============================================================
require('./routes/apiRoutes')(app);
require("./routes/htmlRoutes")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});