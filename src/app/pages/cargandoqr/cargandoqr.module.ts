import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargandoqrPageRoutingModule } from './cargandoqr-routing.module';

import { CargandoqrPage } from './cargandoqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargandoqrPageRoutingModule
  ],
  declarations: [CargandoqrPage]
})
export class CargandoqrPageModule {}
