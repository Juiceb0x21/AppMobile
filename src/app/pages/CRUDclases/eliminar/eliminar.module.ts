import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarPageRoutingModule } from './eliminar-routing.module';

import { EliminarPage } from './eliminar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarPageRoutingModule
  ],
  declarations: [EliminarPage]
})
export class EliminarPageModule {}
