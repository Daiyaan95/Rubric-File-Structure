import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getAllBookings(){
    return new Promise((resolve, reject) => {
      this.httpClient
      .get("http://localhost:5000/api/booking")
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

  register(newBooking){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
      .post("http://localhost:5000/api/booking", newBooking, {headers})
      .subscribe((response: any) => {
          console.log(response.id);
          resolve(response);
        },

        (err) => {
          console.log(err.error.message);
          console.log(err.error);
          reject(err.error);
        }
      );

    });
  }

  getByUserId(userId){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
      .get("http://localhost:5000/api/booking/getByUserID/" + userId, {headers})
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
