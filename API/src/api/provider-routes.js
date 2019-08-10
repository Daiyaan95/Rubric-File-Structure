const express = require("express");
const router = express.Router();
const Provider = require("../models/provider-model.js");

router.get("/", (req, res) => {
  Provider.prototype
    .getAll()
    .then(provider => {
      res.send(provider);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.post("/", (req, res) => {
  Provider.prototype
    .create(req.body)
    .then(provider => {
      res.send(provider);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.get("/getByID/:id", (req, res) => {
  Provider.prototype
    .getByID(parseInt(req.params.id))
    .then(provider => {
      res.send(provider);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.post("/updateByID", (req, res) => {
  Provider.prototype
    .updateByID(req.body.id, req.body)
    .then(provider => {
      res.send(provider);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.post("/delete", (req, res) => {
  Provider.prototype
    .delete(req.body.id)
    .then(provider => {
      res.send(provider);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

module.exports = router;
