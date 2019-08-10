const User = require("../models/user-model");

const roles = {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user"
};

module.exports = class AuthService {
  constructor() {}

  login(authUser) {
    // get users
    // loop through users find user by email (user.email ==req.body.email)
    //validate the password (user.password ==req.body.password)
    // if successful return the user
    return new Promise((resolve, reject) => {
      User.prototype
        .getAll()
        .then(users => {
          const dbUser = users.filter(user => {
            return user.email == authUser.email;
          });

          if (dbUser.length > 0) {
            if (dbUser[0].password == authUser.password) {
              resolve(dbUser[0]);
            } else {
              reject("incorrect password");
            }
          } else {
            reject("user not found");
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  register(user) {
    return new Promise((resolve, reject) => {
      User.prototype
        .getAll()
        .then(dbUsers => {
          dbUsers.forEach(existingUser => {
            if (existingUser.email === user.email) {
              reject("This email address already been used");
            }
          });
          user.role = roles.USER;

          const newUser = new User(user);
          User.prototype
            .create(newUser)
            .then(newUser => {
              User.prototype
                .getByEmail(newUser.email)
                .then(res => {
                  resolve(res[0]);
                })
                .catch(err => {
                  reject(err);
                });
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
