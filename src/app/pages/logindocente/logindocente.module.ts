import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogindocentePageRoutingModule } from './logindocente-routing.module';

import { LogindocentePage } from './logindocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogindocentePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LogindocentePage]
})
export class LogindocentePageModule {}
