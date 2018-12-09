import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule} from '@angular/fire';
import { FIREBASE_CONFIG } from "./firebase.credentials";
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";


import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase,
    AuthenticationProvider,
    FirebaseProvider,
    AuthenticationProvider,
    FirebaseProvider,
    AngularFireDatabase,
    AngularFireAuth
  ]
})
export class AppModule {}
