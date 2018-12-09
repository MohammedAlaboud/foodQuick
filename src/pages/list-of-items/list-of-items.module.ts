import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfItemsPage } from './list-of-items';

@NgModule({
  declarations: [
    ListOfItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfItemsPage),
  ],
})
export class ListOfItemsPageModule {}
