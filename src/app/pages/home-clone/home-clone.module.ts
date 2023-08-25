import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeClonePageRoutingModule } from './home-clone-routing.module';

import { HomeClonePage } from './home-clone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeClonePageRoutingModule
  ],
  declarations: [HomeClonePage]
})
export class HomeClonePageModule {}
