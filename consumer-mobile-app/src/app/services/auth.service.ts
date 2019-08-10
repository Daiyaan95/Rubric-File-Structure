import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) {
/*     this.users = [
      {
        id: 23, 
        firstName: 'John',
        lastName: 'Doe',
        cellPhone: 6,
        email: 'john@mail.com',
        password: '123', 
        role: "user"
      },
      {
        id: 25, 
        firstName: 'Sam',
        lastName: 'Right',
        cellPhone: 7,
        email: 'sam@mail.com',
        password: '123', 
        role: "user"
      },
      {      
        id: 26, 
        firstName: 'Rick',
        lastName: 'Richards',
        cellPhone: 8,
        email: 'julia@mail.com',
        password: '123', 
        role: "user"
      },
    ]; */
  }


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

