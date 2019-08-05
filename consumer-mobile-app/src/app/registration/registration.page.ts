import { Component,  } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string
  cellphone: string;
  public users: any;

  navToLogin() {
    this.navCtrl.navigateForward("home");
  }

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    //private userService: UserService,
    //private authService: AuthService
  ) { }

  register() {
    const authUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      cellPhone: this.cellphone,
      email: this.email,
      password: this.password,
      role: this.role

    }

    
  }  
}   