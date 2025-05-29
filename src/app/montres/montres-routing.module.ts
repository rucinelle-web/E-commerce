import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontresPage } from './montres.page';

const routes: Routes = [
  {
    path: '',
    component: MontresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontresPageRoutingModule {}
