import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeClonePage } from './home-clone.page';

const routes: Routes = [
  {
    path: '',
    component: HomeClonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeClonePageRoutingModule {}
