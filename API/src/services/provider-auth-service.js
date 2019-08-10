const Provider = require("../models/provider-model.js");
//var bcrypt = require('bcryptjs');

/* var providerFound = 0; */
const roles = {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user"
};

module.exports = class ProviderAuthService {
  constructor() {}

  /*  hashPassword(password){
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(password, salt);
    }


    login(authEmail, authPassword){
      return new Promise((resolve, reject) => {
        Provider.prototype.getAll().then(provider => {
          // get current person
          // loop through users
          provider.forEach(provider => {
              if (provider.email == authEmail) {
                providerFound++;
                  // validate password
                  //const authPasswordHash = this.hashPassword(authPassword);

                  const match = bcrypt.compareSync(authPassword, provider.password)
                  if (match) {
                      // sucess
                      providerFound = 0;
                      resolve(provider);


                  } else {
                      // fail wrong password
                      //resolve("Incorrect Password");
                  }
              } else {
                  // fail user doesn't exist
                  //resolve("User not found");
              }
          })
          if(providerFound >= 1){
            reject("Incorrect Password");
            providerFound = 0;
          }
          if(providerFound == 0){
            reject("Provider account not found for this email");
          }
        })
          .catch(err => {
              reject(err);
          });

      });
      
      }

      register(AuthProvider) {
        return new Promise((resolve, reject) => {
  
          Provider.prototype.getAll().then(provider => {
            const dbProvider = provider.filter(provider =>{
              return provider.email == AuthProvider.email
            });
            if(dbProvider.length >= 1){
              reject("Provider email is already registered with an account");
            } else {

              const passwordHash = this.hashPassword(AuthProvider.password);
              console.log(passwordHash);

              const newProvider =
                {
                  firstName: AuthProvider.firstName,
                  lastName: AuthProvider.lastName,
                  email: AuthProvider.email,
                  password: passwordHash,
                  dateCreated: AuthProvider.dateCreated
                };

              Provider.prototype.create(newProvider).then(provider =>{
                resolve(provider);
              }).catch(err => {
                reject(err);
              })
            }
  
          }).catch(err => {
            reject(err);
          })
          });
      }
}; */

  login(authProvider) {
    // get users
    // loop through users find user by email (user.email ==req.body.email)
    //validate the password (user.password ==req.body.password)
    // if successful return the user
    return new Promise((resolve, reject) => {
      Provider.prototype
        .getAll()
        .then(providers => {
          const dbProvider = providers.filter(provider => {
            return provider.email == authProvider.email;
          });

          if (dbProvider.length > 0) {
            if (dbProvider[0].password == authProvider.password) {
              resolve(dbProvider[0]);
            } else {
              reject("incorrect password");
            }
          } else {
            reject("provider not found");
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  register(provider) {
    return new Promise((resolve, reject) => {
      Provider.prototype
        .getAll()
        .then(dbProviders => {
          dbProviders.forEach(existingProvider => {
            if (existingProvider.email === provider.email) {
              reject("This email address already been used");
            }
          });
          provider.role = roles.PROVIDER;

          const newProvider = new Provider(provider);
          Provider.prototype
            .create(newProvider)
            .then(newProvider => {
              Provider.prototype
                .getByEmail(newProvider.email)
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
