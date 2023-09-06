import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarclasPageRoutingModule } from './iniciarclas-routing.module';

import { IniciarclasPage } from './iniciarclas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarclasPageRoutingModule
  ],
  declarations: [IniciarclasPage]
})
export class IniciarclasPageModule {}
