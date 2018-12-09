import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-list-of-items',
  templateUrl: 'list-of-items.html',
})
export class ListOfItemsPage {

  shop;
  allItems: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebaseProvider: FirebaseProvider) {

      this.setup();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListOfItemsPage');
  }

  private setup() {
    this.shop = this.navParams.get('shopData');
    let shopKey = this.navParams.get('shopKey');
    this.allItems =  this.firebaseProvider.getObservableList('shops/'+shopKey+'/items');
  }
}
