import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomedocentePage } from './homedocente.page';

const routes: Routes = [
  {
    path: '',
    component: HomedocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomedocentePageRoutingModule {}
