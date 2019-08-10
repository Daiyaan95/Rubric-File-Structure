const express = require("express");
const router = express.Router();
const authProviderService = require("../services/provider-auth-service");

router.post("/login", (req, res) => {
  authProviderService.prototype
    .login(req.body)
    .then(provider => {
      res.send(provider);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.post("/register", (req, res) => {
  console.log("registering user");
  authProviderService.prototype
    .register(req.body)
    .then(provider => {
      res.send(provider);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

module.exports = router;
