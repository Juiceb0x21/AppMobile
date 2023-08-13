import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargandoPageRoutingModule } from './cargando-routing.module';

import { CargandoPage } from './cargando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargandoPageRoutingModule
  ],
  declarations: [CargandoPage]
})
export class CargandoPageModule {}
