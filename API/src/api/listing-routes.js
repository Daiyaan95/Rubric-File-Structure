const express = require("express");
const router = express.Router();
const Listing = require("../models/listing-model.js");

router.get("/", function (req, res) {
    
    Listing.prototype
        .getAll()
        .then(listing => {
            res.send(listing);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/", function (req, res) {
    
    Listing.prototype
        .create(req.body)
        .then(listing => {
            res.send(listing);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.get("/getByID/:id", function (req, res) {
    
    Listing.prototype
        .getByID(parseInt(req.params.id))
        .then(listing => {
            res.send(listing);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});



router.get("/getByProviderID/:id", function (req, res) {
    
    Listing.prototype
        .getByProviderID(parseInt(req.params.id))
        .then(listing => {
            res.send(listing);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/updateByID", function (req, res) {
    
    Listing.prototype
        .updateByID(req.body.id, req.body)
        .then(listing => {
            res.send(listing);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/delete/:id", function (req, res) {
    
    Listing.prototype
        .delete(parseInt(req.params.id))
        .then(listing => {
            res.send(listing);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;