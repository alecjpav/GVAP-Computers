
var db = require("../models")

module.exports = function(app) {

	app.get("/api/components", function(req, res) {

		db.Components.findAll({}).then(function(data) {

			res.json(data);
		});
	});

	app.get("/api/type", function(req, res) {

		db.Tiers.findAll({}).then(function(data) {

			res.render("tiers", {tiers:data});		
		});	
	})

	app.get("/api/mortal", function(req, res) {

		db.Components.findAll({

			where: {

				item_tier: 1
			}
		}).then(function(data) {

			res.render("index", {stuff:data});		
		});	
	})

	app.get("/api/artisan", function(req, res) {

		db.Components.findAll({

			where: {

				item_tier: 2
			}
		}).then(function(data) {

			res.render("index", {stuff:data});		
		})
	});

	app.get("/api/zeus", function(req, res) {

		db.Components.findAll({

			where: {

				item_tier: 3
			}
		}).then(function(data) {

			res.render("index", {stuff:data});
		})
	});
}




