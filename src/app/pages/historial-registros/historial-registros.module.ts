import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialRegistrosPageRoutingModule } from './historial-registros-routing.module';

import { HistorialRegistrosPage } from './historial-registros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialRegistrosPageRoutingModule
  ],
  declarations: [HistorialRegistrosPage]
})
export class HistorialRegistrosPageModule {}
