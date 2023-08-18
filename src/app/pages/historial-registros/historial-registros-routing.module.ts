import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialRegistrosPage } from './historial-registros.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialRegistrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialRegistrosPageRoutingModule {}
