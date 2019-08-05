const express = require("express");
const router = express.Router();
const User = require("../models/user-model.js");

router.get("/", function (req, res) {
    
    User.prototype
        .getAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/", function (req, res) {
    
    User.prototype
        .create(req.body)
        .then(users => {
            console.log(users);
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.get("/getByID/:id", function (req, res) {
    
    User.prototype
        .getByID(parseInt(req.params.id))
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/updateByID", function (req, res) {
    
    User.prototype
        .updateByID(req.body.id, req.body)
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/delete", function (req, res) {
    
    User.prototype
        .delete(req.body.id)
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;