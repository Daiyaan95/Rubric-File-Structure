var mysqlConn = require("../database/database");
module.exports = class Booking {
  constructor(newID, newListingID, newUserID, newDateFrom, newDateTo) {
    this.id = newID;
    this.listingID = newListingID;
    this.userID = newUserID;
    this.dateFrom = newDateFrom;
    this.dateTo = newDateTo;
  }

  getAll() {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from booking", (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          console.log("Bookings : ", res);
          resolve(res);
        }
      });
    });
  }

  create(newBooking) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO booking set ?", newBooking, (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          console.log(res);
          resolve(res);
        }
      });
    });
  }

  getByID(bookingID) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from booking where bookingID = ?",
        bookingID,
        (err, res) =>{
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

  getByUserID(userID) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from booking where userID = ? ",
        userID,
        (err, res) =>{
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

  getByListingID(listingID) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from booking where listingID = ? ",
        listingID,
        (err, res) =>{
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

  updateByID(bookingID, booking) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE booking SET listingID = ?, userID = ?, dateFrom = ?, dateTo = ?, status = ? WHERE bookingID = ?",
        [
          booking.listingID,
          booking.userID,
          booking.dateFrom,
          booking.dateTo,
          booking.status,
          bookingID
        ],
        (err, res)=> {
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

  delete(bookingID) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "DELETE FROM booking WHERE bookingID = ?",
        bookingID,
        (err, res)=> {
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

  deleteByListingID(listingID) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "DELETE FROM booking WHERE listingID = ?",
        listingID,
        (err, res) =>{
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
