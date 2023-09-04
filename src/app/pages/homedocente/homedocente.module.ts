import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomedocentePageRoutingModule } from './homedocente-routing.module';

import { HomedocentePage } from './homedocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomedocentePageRoutingModule
  ],
  declarations: [HomedocentePage]
})
export class HomedocentePageModule {}
