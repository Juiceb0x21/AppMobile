import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleapiPage } from './detalleapi.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleapiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleapiPageRoutingModule {}
