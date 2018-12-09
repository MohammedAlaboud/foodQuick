import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseProvider } from "../../providers/firebase/firebase";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  shopForm: FormGroup = {} as any;
  customerForm: FormGroup = {} as any;

  private mobileRegex = '07[0-9]{9}|44[0-9]{10}';
  private emailRegex = /(.)+@(\w)+\.(.)/;
  private userType;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    this.buildGeneralSignUpForm()
    this.buildParentSignUpForm()
  }

  private buildGeneralSignUpForm() {
    this.shopForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]+ [a-zA-Z ]+'), Validators.required])],
      email: ['', Validators.compose([Validators.pattern(this.emailRegex), Validators.required])],
      mobile: ['', Validators.compose([Validators.pattern(this.mobileRegex), Validators.required])],
      password: ['', Validators.compose([Validators.pattern("[0-9]{6,6}"), Validators.required])],
      postCode: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]+ [a-zA-Z ]+'), Validators.required])],
      addressLineOne: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]+ [a-zA-Z ]+'), Validators.required])],
      addressLineTwo: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]+ [a-zA-Z ]+'), Validators.required])],
      city: ['London', Validators.compose([Validators.maxLength(30), Validators.required])]
    });
  }

  private buildParentSignUpForm() {
    this.customerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  private signUpUser(){
    const nodeRef = (this.userType == "shop")? "shops":"customer"

    const object = (this.userType == "shop")? this.shopForm.value : this.customerForm.value

    this.firebaseProvider.pushObjectToGivenNode(object, nodeRef);

    console.log(object.email)

    this.firebaseProvider.signUpWithEmailAndPassword(object.email, object.password).then(()=>{
      this.navCtrl.pop();
    })
  }


}
