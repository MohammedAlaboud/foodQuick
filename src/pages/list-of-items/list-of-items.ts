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

  shop;        // shop object. passed through the navigation parameters of previous page.
  shopKey;    // key of the shop.
  allItems: Observable<any[]>;   // list of allItems which updates automatically.

  // to control the view
  showCreateNewItem;
  customer;

  // to temporary store the values of new item
  name;
  price

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
    this.showCreateNewItem = false;
    this.customer = false;
    this.shop = this.navParams.get('shopData');
    this.shopKey = this.navParams.get('shopKey');
    this.allItems =  this.firebaseProvider.getObservableList2('shops/'+this.shopKey+'/items');
  }

  private toggleShowCreateItem() {
    this.showCreateNewItem = !this.showCreateNewItem;
    this.name = "";
    this.price = "£";
  }
  
  private saveNewItem() {
    let tempItem = {
      'name': this.name,
      'price': this.price
    }
    this.firebaseProvider.pushObjectToGivenNode(tempItem, 'shops/'+this.shopKey+'/items/');
    this.name = "";
    this.price = "£";
    this.toggleShowCreateItem();
  }

  private deleteItem(itemKey) {
    this.firebaseProvider.deleteOjbect('shops/'+this.shopKey+'/items/'+itemKey);
  }
}
