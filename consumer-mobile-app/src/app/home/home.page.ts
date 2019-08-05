import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  email: string;
  password: string
  public users: any;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    //private userService: UserService,
    //private authService: AuthService
  ) {}

  goToRegister() {
    this.navCtrl.navigateForward('registration')
  }

  goToTab2() {
    this.navCtrl.navigateForward('../tab2')
  }

}
