
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // This should be type of user to make life a whole lot easier(use listings model as a guide):

  constructor(
    private httpClient: HttpClient
  ) {
/*     this.users = [
      {
        id: 23, 
        firstName: 'John',
        lastName: 'Doe',
        cellPhone: 9,
        email: 'john@mail.com',
        password: '123', 
        role: "user"
      },
      {
        id: 25, 
        firstName: 'Samantha',
        lastName: 'Right',
        cellPhone: 10,
        email: 'sam@mail.com',
        password: '123', 
        role: "user"
      },
      {      
        id: 26, 
        firstName: 'Julia',
        lastName: 'Richards',
        cellPhone: 11,
        email: 'julia@mail.com',
        password: '123', 
        role: "user"
      },
    ]; */
  }

  /* public logIn(Authuser: any) { // This should be type user

    return new Promise((resolve, reject) => {

      // Please note that this will call the API noce we have created it - But for now:
      const user: any = this.users.filter(dbUser => {
        return dbUser.email === Authuser.email;
      });

      // This logic will be on the backend we will just return success or erroe HTTP response - But for now:
      if (user.length) {
        if (Authuser.password === user[0].password) {
          this.setLoggedInUser(user[0]);
          window.localStorage.setItem('firstName', user[0].firstName);
          resolve(user[0]);
        } else {
          reject(new Error('Incorrect password'));
        }
      } else {
        reject(new Error("User doesn't exist"));
      }

    });

  }

  setLoggedInUser(user: any) { // This should be type user
    this.loggedInUser = user;
  }

  getLoggedInUser(): any { // This should be type user
    return this.loggedInUser;
  } */

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

