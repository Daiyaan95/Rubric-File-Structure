const User = require("../models/user-model");

module.exports = class AuthService {
  constructor() {}

  login(authUser) {
    // get users
    // loop through users find user by email (user.email ==req.body.email)
    //validate the password (user.password ==req.body.password)
    // if successful return the user
    return new Promise((resolve, reject) => {
      User.prototype
        .getUsers()
        .then(users => {
          const dbUser = users.filter(user => {
            return user.email == authUser.email;
          });

          if (dbUser) {
            if (dbUser[0].password == authUser.password) {
              res.send(dbUser[0]);
            } else {
              res.status(400).send("incorrect password");
            }
          } else {
            res.status(400).send("user not found");
          }
        })
        .catch(err => {
          res.status(400).send(err);
        });
    });
  }
};

var fs = require("fs");

const roles = {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user"
};

module.exports = class AuthService {
  constructor() {}

  register(user) {
    return new Promise((resolve, reject) => {

      fs.readFile("./src/data/data.json", function(err, data) {
        if (err) reject(err);
        var parseData = JSON.parse(data);

        var count = 0;
        parseData.users.forEach(existingUser => {
          if (existingUser.email === user.email) {
            reject("This email address already been used");
          }
          count++;
        });

        const userObj = {
          id: (count + 1).toString(),
          name: user.name,
          surname: user.surname,
          cellPhone: user.cellPhone,
          email: user.email,
          password: user.password,
          role: roles.USER
        };

        const newUser = new User(userObj);
        parseData.users.push(newUser);

        fs.writeFile("./src/data/data.json", JSON.stringify(parseData), function(err) {
          if (err) reject(err);
          resolve(res);
        });
      });

    });
  }

  async login(user) {
    return new Promise((resolve, reject) => {
    
      var found = false;
      fs.readFile("./src/data/data.json", function(err, data) {
        if (err) reject(err);
        var parseData = JSON.parse(data);
        parseData.users.forEach(existingUser => {
          if (existingUser.email === user.email) {
            found = true;
          }
          if (found) {
            if (existingUser.name !== user.name) {
              reject("Incorrect username");
            } else if (existingUser.password !== user.password) {
              reject("Incorrect password");
            } else {
              resolve(user);
            }
          } else {
            reject("User not found");
          }
        });
      });
    });
  }
};