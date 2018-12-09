import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthenticationProvider } from "../../providers/authentication/authentication";
import { SignupPage } from "../signup/signup";
import { FirebaseProvider } from "../../providers/firebase/firebase";
import { ShopPage } from '../shop/shop';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private rememberAccount;
  private isNewAccount;
  private email;
  private password;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authenticationProvider: AuthenticationProvider, 
    private firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
  }

 

  /**
  * @description To proceed to sign up page.
  */
  private goToSignUp() {
    this.navCtrl.push(SignupPage, {}, { animation: 'md-transition', duration: 1000 });
  }

  private authenticate(){
    this.firebaseProvider.signInWithEmailAndPassword(this.email, this.password).then((userType)=>{
      const nextPage = (userType == "shop")? ShopPage:HomePage
      this.navCtrl.push(nextPage);
    }).catch(err=>{
       this.navCtrl.push(ShopPage);
      alert (err)
    })
   
  }


  // WE DID ATTEMPT THIS BUT TO NO AVAIL... (USER WILL BE ABLE TO RESET PIN IN FUTURE)
  private async resetPIN() {
  }

}