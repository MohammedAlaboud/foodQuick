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

  public pushObjectToGivenNodeWithGivenKey(object, nodeRef, id) {
    return this.fireDb.database.ref().child(nodeRef).child(id).set(object);
  }

  public signUpWithEmailAndPassword(email, password): Promise<any> {
    //console.log(this.fireDb.database.app.auth().currentUser.uid);
    return new Promise((res, rej) => {
      this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
        res(this.fireDb.database.app.auth().currentUser.uid)
      }).catch((err) => rej(err));

    })

  }

  public signInWithEmailAndPassword(email, password): Promise<any> {
    return new Promise((res, rej) => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
        const id = this.fireDb.database.app.auth().currentUser.uid
        this.fireDb.database.ref('/userType/' + id).once('value').then((snapshot) => {
          
          if (snapshot.val() && snapshot.val()) {
            console.log(snapshot.val().userType)
            res(snapshot.val().userType)
          } else {
            rej("None")
          }
        })
      })

    })
  }

  public sendResetPasswordToUser(email) {

  }

  public getObservableList(nodeRef) {
    return this.fireDb.list(nodeRef).valueChanges();
  }

  public getObservableList2(nodeRef){
    return this.fireDb.list(nodeRef).snapshotChanges();
  }

}
