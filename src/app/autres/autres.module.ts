import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutresPageRoutingModule } from './autres-routing.module';

import { AutresPage } from './autres.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutresPageRoutingModule,
    SharedModule
  ],
  declarations: [AutresPage]
})
export class AutresPageModule {}
