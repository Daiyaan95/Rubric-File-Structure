import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllListings(){
    return new Promise((resolve, reject) => {
      this.httpClient
      .get("http://localhost:5000/api/listing")
      .subscribe(
        (response) => {
          resolve(response);
        },
        (err) => {
          console.log(err.error.message);
          reject(err);
        }
      )


    });
  }

  getById(listingId){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
      .get("http://localhost:5000/api/listing/getByID/" + listingId, {headers})
      .subscribe((response: any) => {
          resolve(response);

        },
        (err) => {
          console.log(err.error.message);
          reject(err);
        }
      );

    });
  }



}
