import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperacionPage } from './recuperacion.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperacionPageRoutingModule {}
