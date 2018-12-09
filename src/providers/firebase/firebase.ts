import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";

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

  public getObservableList(nodeRef) {
    return this.fireDb.list(nodeRef).valueChanges();
  }

  public getObservableList2(nodeRef) {
    return this.fireDb.list(nodeRef).snapshotChanges();
  }

}
