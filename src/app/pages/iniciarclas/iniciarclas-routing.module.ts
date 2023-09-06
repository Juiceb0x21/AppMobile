import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarclasPage } from './iniciarclas.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarclasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarclasPageRoutingModule {}
