import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthenticationProvider } from "../../providers/authentication/authentication";
import { SignupPage } from "../signup/signup";
import { FirebaseProvider } from "../../providers/firebase/firebase";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private authenticationProvider: AuthenticationProvider, private firebaseProvider: FirebaseProvider) {
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
    this.firebaseProvider.signInWithEmailAndPassword(this.email, this.password).then(()=>{
      alert ("Success")
    }).catch(err=>{
      alert (err)
    })
  }


//WE DID ATTEMPT THIS BUT TO NO AVAIL... (USER WILL BE ABLE TO RESET PIN IN FUTURE)
  private async resetPIN() {
  //   if (this.email && this.email != "") {
  //     let alert = this.alertCtrl.create({ buttons: ['OK'] })
  //     this.firebaseProvider.sendResetPasswordToUser(this.email).then(() => {
  //       alert.setTitle("Success");
  //       alert.setMessage("A PIN reset link has been sent to your email.");
  //     }).catch((err) => {
  //       alert.setTitle("Failed!");
  //       alert.setMessage(err);
  //     });
  //     alert.present();
  //   } else {
  //     this.alertCtrl.create({
  //       title: "Reset PIN",
  //       message: "Please enter your email address in order to reset your PIN.",
  //       cssClass: 'alert-option-buttons',
  //       inputs: [
  //         {
  //           name: 'email',
  //           placeholder: 'Email'
  //         }
  //       ],
  //       buttons: [
  //         {
  //           text: 'Cancel',
  //           role: 'cancel'
  //         },
  //         {
  //           text: 'Continue',
  //           handler: data => {
  //             this.email = data.email;
  //             this.resetPIN();
  //           }
  //         }
  //       ]
  //     }).present();
  //   }
  // }

  }
}