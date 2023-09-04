import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeccionesdocentePage } from './seccionesdocente.page';

const routes: Routes = [
  {
    path: '',
    component: SeccionesdocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccionesdocentePageRoutingModule {}
