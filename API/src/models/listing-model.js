var mysqlConn = require("../database/database");

module.exports = class Listing {
  constructor(
    newID,
    newproviderID,
    newName,
    newLocation,
    newPrice,
    newDescription
  ) {
    this.id = newID;
    this.providerID = newproviderID;
    this.name = newName;
    this.location = newLocation;
    this.newPrice = newPrice;
    this.description = newDescription;
  }

  getAll() {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from listing", (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          console.log("Listings : ", res);
          let listings = res;
          mysqlConn.query(
            "Select * from listing_image_mapping WHERE listingID in (SELECT id FROM listing);",
            (err, res) => {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } else {
             /*    listings.forEach(listing => {
                  listing.imgUrl = [];

                  res.forEach(imgUrl => {
                    if (imgUrl.listingID == listing.id) {
                      listing.imgUrl.push(imgUrl.imageURL);
                    }
                  });
                }); */
                console.log("Listings : ", res);
                resolve(listings);
              }
            }
          );
        }
      });
    });
  }

  create(newListing) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO listing set ?", newListing, (err, res) => {
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

  getByID(listingId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from listing where id = ? ",
        listingId,
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            reject(err);
          } else {
            console.log("Listings : ", res);
            let listings = res;
            mysqlConn.query(
              "Select * from listing_image_mapping WHERE listingID in (SELECT id FROM listing);",
              (err, res) => {
                if (err) {
                  console.log("error: ", err);
                  reject(err);
                } else {
                  /* listings.forEach(listing => {
                    listing.imgUrl = [];

                    res.forEach(imgUrl => {
                      if (imgUrl.listingID == listing.id) {
                        listing.imgUrl.push(imgUrl.imageURL);
                      }
                    });
                  }); */
                  console.log("Listings : ", res);
                  resolve(listings);
                }
              }
            );
          }
        }
      );
    });
  }

  getByProviderID(providerId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from listing where providerID = ? ",
        providerId,
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            reject(err);
          } else {
            console.log("Listings : ", res);
            let listings = res;
            mysqlConn.query(
              "Select * from listing_image_mapping WHERE listingID in (SELECT id FROM listing);",
              function(err, res) {
                if (err) {
                  console.log("error: ", err);
                  reject(err);
                } else {
               /*    listings.forEach(listing => {
                    listing.imgUrl = [];

                    res.forEach(imgUrl => {
                      if (imgUrl.listingID == listing.id) {
                        listing.imgUrl.push(imgUrl.imageURL);
                      }
                    });
                  }); */
                  console.log("Listings : ", res);
                  resolve(listings);
                }
              }
            );
          }
        }
      );
    });
  }

  updateByID(listingId, listing) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE listing SET providerID = ?, name = ?, location = ?, price = ?, description = ? WHERE id = ?",
        [
          listing.providerID,
          listing.name,
          listing.location,
          listing.price,
          listing.description,
          listingId
        ],
        function(err, res) {
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

  delete(listingID) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("DELETE FROM listing WHERE id = ?", listingID, function(
        err,
        res
      ) {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
