import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgrearPage } from './agrear.page';

const routes: Routes = [
  {
    path: '',
    component: AgrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgrearPageRoutingModule {}
