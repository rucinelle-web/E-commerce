import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinesPageRoutingModule } from './machines-routing.module';

import { MachinesPage } from './machines.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachinesPageRoutingModule,
    SharedModule
  ],
  declarations: [MachinesPage]
})
export class MachinesPageModule {}
