import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfCalculationsPage } from './list-of-calculations.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfCalculationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfCalculationsPageRoutingModule {}
