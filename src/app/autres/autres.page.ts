import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autres',
  templateUrl: './autres.page.html',
  styleUrls: ['./autres.page.scss'],
  standalone:false,
})
export class AutresPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
 produits = [
    {
      nom: 'Cahier',
      image: 'assets/images/cahier.jpg',
      prix: '500 FCFA'
    },
    {
      nom: 'Sac à dos scolaire',
      image: 'assets/images/sac.jpg',
      prix: '10 000 FCFA'
    },
    {
      nom: 'Chaussures de tennis Adidas',
      image: 'assets/images/tennis.jpg',
      prix: '35 000 FCFA'
    }
  ];

  autresProduits = [
    {
      nom: 'Parapluie pliable',
      image: 'assets/images/parapluie.jpg',
      prix: '3 000 FCFA'
    },
    {
      nom: 'Épouvantail décoratif',
      image: 'assets/images/epouventaille1.jpg',
      prix: '7 000 FCFA'
    },
    {
      nom: 'Chaussures de tennis Pouma',
      image: 'assets/images/tennis2.jpg',
      prix: '32 000 FCFA'
    }
  ];

 
}
