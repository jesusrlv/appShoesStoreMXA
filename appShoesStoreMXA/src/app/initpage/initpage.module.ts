import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitpagePageRoutingModule } from './initpage-routing.module';

import { InitpagePage } from './initpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitpagePageRoutingModule
  ],
  declarations: [InitpagePage]
})
export class InitpagePageModule {}
