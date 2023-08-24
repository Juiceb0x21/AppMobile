import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgrearPageRoutingModule } from './agrear-routing.module';

import { AgrearPage } from './agrear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgrearPageRoutingModule
  ],
  declarations: [AgrearPage]
})
export class AgrearPageModule {}
