import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuportsPageRoutingModule } from './suports-routing.module';

import { SuportsPage } from './suports.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuportsPageRoutingModule,
    SharedModule
  ],
  declarations: [SuportsPage]
})
export class SuportsPageModule {}
