import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasdocentePage } from './notasdocente.page';

const routes: Routes = [
  {
    path: '',
    component: NotasdocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasdocentePageRoutingModule {}
