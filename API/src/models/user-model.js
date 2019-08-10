var mysqlConn = require("../database/database");

module.exports = class User {
  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
  }

  create(user) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO user set ?", user, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(user);
        }
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from user", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  getById(userId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from user where id = ?", userId, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  getByEmail(email) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from user where email = ?",
        email,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  updateById(userId, user) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE user SET name = ?, email =?, password = ?, WHERE id = ?"[
          (user.name, user.email, user.password, user.id)
        ],
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  remove(userId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("DELETE FROM user WHERE id = ?", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  removeAll() {
    return new Promise((resolve, reject) => {
      mysqlConn.query("DELETE * FROM user", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
