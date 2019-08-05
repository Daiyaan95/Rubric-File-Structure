import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//import { UserService } from '../services/user.service';
//import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage/*  implements OnInit */ {
  // private currentUser: User;
  public id: string;
  public users: any;
  

  constructor(
    private navCtrl: NavController,
    //private userService: UserService
  ) {
  
    this.id = window.localStorage.getItem('userid');
    // const currentUser = this.userService.getLoggedInUser();
  }

  getUserById(){
    
  }
  
  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }
  navToSaved() {
    this.navCtrl.navigateForward("saved");
  }

  navToExplore() {
    this.navCtrl.navigateForward("explore");
  }

  navToInbox() {
    this.navCtrl.navigateForward("inbox");
  }

  navToTrips() {
    this.navCtrl.navigateForward("trips");
  }
  /* ngOnInit() {
    this.userService.getById(this.id).then(res=>{
      this.users = res;
    }).catch(err => {console.log(err)})
 */

  }

