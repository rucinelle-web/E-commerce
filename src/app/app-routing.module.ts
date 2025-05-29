import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'home',  
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./produit/produit.module').then(m => m.ProduitPageModule)
  },
  {
    path: 'montres',
    loadChildren: () => import('./montres/montres.module').then( m => m.MontresPageModule)
  },
  {
    path: 'machines',
    loadChildren: () => import('./machines/machines.module').then( m => m.MachinesPageModule)
  },
  {
    path: 'suports',
    loadChildren: () => import('./suports/suports.module').then( m => m.SuportsPageModule)
  },
  {
    path: 'autres',
    loadChildren: () => import('./autres/autres.module').then( m => m.AutresPageModule)
  },
  {
    path: 'example',
    loadChildren: () => import('./example/example.module').then( m => m.ExamplePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }