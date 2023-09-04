import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargandoqrPage } from './cargandoqr.page';

const routes: Routes = [
  {
    path: '',
    component: CargandoqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargandoqrPageRoutingModule {}
