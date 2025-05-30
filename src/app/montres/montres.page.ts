// src/app/montres/montres.page.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-montres',
  templateUrl: './montres.page.html',
  styleUrls: ['./montres.page.scss'],
  standalone: false,
})
export class MontresPage implements OnInit {
  watchProducts: any[] = []; // Ce tableau contiendra MAINTENANT TOUS les produits

  // C'est votre liste complète de produits.
  // Elle doit être la même dans home.page.ts et detail-produit.page.ts si vous n'avez pas de service partagé.
  private allAvailableProducts = [
    // Vos produits non-montres (ils seront tous affichés si vous ne filtrez pas)
    {
      id: 1,
      image: 'assets/pppe.jpg',
      name: 'Mug intérieur coloré 315ml',
      rating: 4,
      reviews: 433,
      price: '7 150',
      description: 'Ce mug en céramique de haute qualité est parfait pour votre café ou thé du matin. Son intérieur coloré ajoute une touche de gaieté à votre routine quotidienne. Disponible en plusieurs couleurs vives. Idéal pour un cadeau.',
      stock: 50,
      seller: 'Boutique XYZ'
    },
    {
      id: 3,
      image: 'assets/laptop-3.jpg',
      name: 'Pyramid International Bouteille d\'eau en plastique transparent',
      rating: 4,
      reviews: 302,
      price: '7 425',
      description: 'Cette bouteille d\'eau en plastique transparent de Pyramid International est légère et durable, parfaite pour le sport, le bureau ou les voyages. Capacité de 500ml, facile à nettoyer et sans BPA.',
      stock: 100,
      seller: 'Eco-Shop'
    },
    {
      id: 4,
      image: 'assets/laptop-1.jpg',
      name: 'Produits High-Tech Performants',
      rating: 5,
      reviews: 120,
      price: '8 000',
      description: 'Découvrez notre sélection de produits high-tech performants, conçus pour améliorer votre quotidien. Performances optimales et fiabilité garantie.',
      stock: 30,
      seller: 'GadgetZone'
    },

    // --- VOS MONTRES (ou tout autre produit que vous voulez afficher sur cette page) ---
    // Assurez-vous que les IDs sont uniques sur toute la liste !
    {
      id: 10,
      image: 'assets/apple-watch-main.png',
      name: 'Montre Connectée Apple Series 5 (Occasion Chine)',
      rating: 3, reviews: 421, price: '7 325',
      description: 'Découvrez la montre connectée de 5ème génération, une occasion unique de profiter de la technologie avancée à petit prix. Importée de Chine, elle offre des fonctionnalités de suivi d\'activité, notifications et plus encore.',
      stock: 12, deliveryInfo: 'Livraison standard en 5-7 jours ouvrables. Frais de livraison : 1500 fcfa.', seller: 'Tech Deals'
    },
    {
      id: 11,
      image: 'assets/pink-smartwatch.png',
      name: 'Montre Connectée Rose 5ème Génération (Occasion Chine)',
      rating: 4, reviews: 250, price: '13 750',
      description: 'Montre connectée rose, 5ème génération. Occasion de Chine. Bracelet confortable, écran tactile. Idéale pour le suivi sportif et les notifications.',
      stock: 8, seller: 'Zenith Watches'
    },
    {
      id: 12,
      image: 'assets/black-smartwatch.png',
      name: 'Montre Connectée Noire 7ème Génération (Occasion Chine)',
      rating: 3, reviews: 180, price: '13 750',
      description: 'Montre connectée noire, 7ème génération. Occasion de Chine. Plus rapide et plus précise. État impeccable, parfait pour un usage quotidien.',
      stock: 5, seller: 'Global Imports'
    },
  ];

  constructor() { }

  ngOnInit() {
    this.loadAllProducts(); // Appelez une nouvelle fonction pour charger tous les produits
  }

  // Nouvelle fonction pour charger TOUS les produits
  loadAllProducts() {
    this.watchProducts = [...this.allAvailableProducts]; // Assigne une copie de tous les produits
    console.log('Tous les produits chargés sur la page Montres :', this.watchProducts);
    console.log('Nombre total de produits chargés :', this.watchProducts.length);
  }

  getStarIcons(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? 'star' : 'star-outline');
    }
    return stars;
  }
}