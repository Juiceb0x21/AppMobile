import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrdocentePage } from './qrdocente.page';

const routes: Routes = [
  {
    path: '',
    component: QrdocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrdocentePageRoutingModule {}
