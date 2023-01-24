import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfCalculationsPageRoutingModule } from './list-of-calculations-routing.module';

import { ListOfCalculationsPage } from './list-of-calculations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfCalculationsPageRoutingModule
  ],
  declarations: [ListOfCalculationsPage]
})
export class ListOfCalculationsPageModule {}
