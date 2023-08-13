import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargandoPage } from './cargando.page';

const routes: Routes = [
  {
    path: '',
    component: CargandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargandoPageRoutingModule {}
