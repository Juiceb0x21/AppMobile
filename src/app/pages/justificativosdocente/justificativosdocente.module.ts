import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JustificativosdocentePageRoutingModule } from './justificativosdocente-routing.module';

import { JustificativosdocentePage } from './justificativosdocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JustificativosdocentePageRoutingModule
  ],
  declarations: [JustificativosdocentePage]
})
export class JustificativosdocentePageModule {}
