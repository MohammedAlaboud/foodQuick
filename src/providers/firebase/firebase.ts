import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  public fireAuth: any; /*Author of the firebase*/


  constructor(
    private fireDb: AngularFireDatabase,
    private firebaseAuth: AngularFireAuth
   ) {
    console.log('Hello FirebaseProvider Provider');
  }

  public pushObjectToGivenNode(object, nodeRef) {
    this.fireDb.database.ref(nodeRef).push(object)
  }

  public signUpWithEmailAndPassword(email, password):Promise<any>{
      return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  public signInWithEmailAndPassword(email, password):Promise<any>{
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }

  public sendResetPasswordToUser(email){
    
  }

}
