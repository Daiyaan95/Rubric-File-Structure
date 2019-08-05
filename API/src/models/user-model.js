var mysqlConn = require("../data-base/data-base");

module.exports = class User {
  constructor(newName, newEmail, newPphone, newPassword, surveyResults) {
    this.name = newName;
    this.email = newEmail;
    this.password = newPassword;
    this.phone = newPhone;
    this.surveyResults = surveyResults;
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

  getById() {
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

  updateById(userId, user) {
      return new Promise((resolve, reject)=> {
          mysqlConn.query(
              "UPDATE user SET name = ?, email =?, password = ?, phone = ?, surveyResults = ? WHERE id = ?"
              [
                  user.name,
                  user.email,
                  user.password,
                  user.phone,
                  user.surveyResults,
                  user.id
              ],
              (err, res)=>{
                  if(err){
                      reject(err);
                  } else{
                      resolve(res);
                  }
              }
          )
      })
  }

  remove(userId){
      return new Promise((resolve, reject) => {
          mysqlConn.query("DELETE FROM user WHERE id = ?", (err, res)=> {
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
