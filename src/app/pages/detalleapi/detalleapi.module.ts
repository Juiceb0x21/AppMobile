import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleapiPageRoutingModule } from './detalleapi-routing.module';

import { DetalleapiPage } from './detalleapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleapiPageRoutingModule
  ],
  declarations: [DetalleapiPage]
})
export class DetalleapiPageModule {}
