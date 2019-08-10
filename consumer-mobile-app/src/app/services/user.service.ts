import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) {}


  getAllUsers(){
    return new Promise((resolve, reject) => {
      this.httpClient
      .get("http://localhost:5000/api/user")
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

  getById(userId){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
      .get("http://localhost:5000/api/user/getByID/" + userId, {headers})
      .subscribe((response) => {
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
