var mysqlConn = require("../database/database");
module.exports = class Provider {
 
  constructor(provider) {
    this.name = provider.name;
    this.email = provider.email;
    this.password = provider.password;
    this.role = provider.role;
  }

  create(provider) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO provider set ?", provider, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(provider);
        }
      });
    });
  }
  
  getAll() {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from provider", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }



  getById(providerId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from provider where id = ?",
        providerId,
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  updateById(providerId, provider) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE provider SET name = ?, email = ?, password = ?, WHERE id = ?",
        [
          provider.name,
          provider.email,
          provider.password,
          providerId
        ],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  delete(providerId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "DELETE FROM provider WHERE id = ?",
        providerId,
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }
};
