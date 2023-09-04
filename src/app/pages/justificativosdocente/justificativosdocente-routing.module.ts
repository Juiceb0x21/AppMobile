import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JustificativosdocentePage } from './justificativosdocente.page';

const routes: Routes = [
  {
    path: '',
    component: JustificativosdocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JustificativosdocentePageRoutingModule {}
