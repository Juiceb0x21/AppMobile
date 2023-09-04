import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasdocentePageRoutingModule } from './notasdocente-routing.module';

import { NotasdocentePage } from './notasdocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasdocentePageRoutingModule
  ],
  declarations: [NotasdocentePage]
})
export class NotasdocentePageModule {}
