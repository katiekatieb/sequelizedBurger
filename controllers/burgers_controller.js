var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.burgers.findAll({}).then(function(data) {
      var hbsObject = {
        burgers: data
      };

      res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.burgers.create({
      burger_name: req.body.name,
      devoured: false
    }).then(function(dbBurger) {
      res.json({ id: dbBurger.insertId });
    });
  });

  app.get("/", function(req, res) {
    db.customers.findAll({}).then(function(data) {
      var hbsObject = {
        customers: data
      };
      console.log(hbsObject);

      res.render("index", hbsObject);
    });
  });

  // app.post("/api/customers", function(req, res) {
  //   db.customers.create({
  //     name: req.body.name,
  //     burger_id: req.body.burger_id
  //   }).then(function(dbBurger) {
  //     res.json({ id: dbBurger.insertId });
  //   });
  // });


  app.delete("/api/burgers/:id", function(req, res) {
    db.burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });

  });


  app.put("/api/burgers/:id", function(req, res) {
    db.burgers.update({
      burger_name: req.body.text,
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

};
