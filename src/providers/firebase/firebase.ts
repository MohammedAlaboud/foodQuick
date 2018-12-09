import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  public fireAuth: any; /*Author of the firebase*/


  constructor(
    private fireDb: AngularFireDatabase
   ) {
    console.log('Hello FirebaseProvider Provider');
  }

  public pushObjectToGivenNode(object, nodeRef) {
    this.fireDb.database.ref(nodeRef).push(object)
  }

}
