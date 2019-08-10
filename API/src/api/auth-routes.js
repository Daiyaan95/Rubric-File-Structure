const express = require("express");
const router = express.Router();
const authService = require("../services/auth-service");

router.post("/login", (req, res) => {
  authService.prototype
    .login(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.post("/register", (req, res) => {
  console.log("registering user");
  authService.prototype
    .register(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

module.exports = router;
