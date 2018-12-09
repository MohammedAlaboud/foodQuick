import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { FirebaseProvider } from '../../providers/firebase/firebase';


@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  allShops: Observable<any[]>

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private firebaseProvider: FirebaseProvider) {


      this.setup();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  private setup() {
    this.allShops = this.firebaseProvider.getObservableList('shops');
  }

  // openShopItems(shop) {
  //   this.navCtrl
  // }

}
