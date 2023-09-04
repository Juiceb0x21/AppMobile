import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogindocentePage } from './logindocente.page';

const routes: Routes = [
  {
    path: '',
    component: LogindocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogindocentePageRoutingModule {}
