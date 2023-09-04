import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccionesdocentePageRoutingModule } from './seccionesdocente-routing.module';

import { SeccionesdocentePage } from './seccionesdocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccionesdocentePageRoutingModule
  ],
  declarations: [SeccionesdocentePage]
})
export class SeccionesdocentePageModule {}
