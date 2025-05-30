import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProduitPageRoutingModule } from './detail-produit-routing.module';

import { DetailProduitPage } from './detail-produit.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProduitPageRoutingModule,
    SharedModule
  ],
  declarations: [DetailProduitPage]
})
export class DetailProduitPageModule {}
