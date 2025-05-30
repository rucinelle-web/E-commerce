import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false, 
})
export class HomePage implements OnInit {
  allProducts: any[] = [];
  groupedProducts: any[][] = []; // This will hold products grouped into arrays of 3

  constructor() {}

  ngOnInit() {
    // Simulate fetching product data (replace with your actual data source)
    this.allProducts = [
      {
        id: 1,
        image: 'assets/pppe.jpg', // Ensure these paths are correct (e.g., in src/assets/)
        name: 'Mug intérieur coloré 315ml',
        rating: 4,
        reviews: 433,
        price: '7 150',
      },
      {
        id: 2,
        image: 'assets/pppe.jpg',
        name: 'Montre Cconnectee 5 eme generation. occassion chine',
        rating: 3,
        reviews: 421,
        price: '7 325',
      },
      {
        id: 3,
        image: 'assets/pppe.jpg',
        name: 'Pyramid International Bouteille d\'eau en plastique transparent',
        rating: 4,
        reviews: 302,
        price: '7 7425',
      },
      {
        id: 4,
        image: 'assets/pppe.jpg',
        name: 'Produits High-Tech Performants',
        rating: 5,
        reviews: 120,
        price: '8 000',
      },
      {
        id: 5,
        image: 'assets/pppe.jpg',
        name: 'Accessoires Gaming Indispensables',
        rating: 4,
        reviews: 250,
        price: '6 500',
      },
      {
        id: 6,
        image: 'assets/pppe.jpg',
        name: 'Gadgets Innovants pour la Maison',
        rating: 3,
        reviews: 180,
        price: '7 000',
      },
      {
        id: 7,
        image: 'assets/pppe.jpg',
        name: 'Électronique Domestique Intelligente',
        rating: 4,
        reviews: 90,
        price: '9 200',
      },
      {
        id: 8,
        image: 'assets/pppe.jpg',
        name: 'Audio Portable de Qualité Supérieure',
        rating: 5,
        reviews: 310,
        price: '7 800',
      },
      {
        id: 9,
        image: 'assets/montre.jpg',
        name: 'Sécurité Connectée pour Votre Foyer',
        rating: 4,
        reviews: 150,
        price: '8 500',
      },
      {
        id: 10,
        image: 'assets/montre2.jpg',
        name: 'Wearables et Technologie Embarquée',
        rating: 3,
        reviews: 70,
        price: '6 000',
      },
       {
        id: 11,
        image: 'assets/montre3.jpg',
        name: 'Électronique Domestique Intelligente',
        rating: 4,
        reviews: 90,
        price: '9 200',
      },
       {
        id: 12,
        image: 'assets/pppe.jpg',
        name: 'Électronique Domestique Intelligente',
        rating: 4,
        reviews: 90,
        price: '9 200',
      },
       {
        id: 13,
        image: 'assets/pppe.jpg',
        name: 'Électronique Domestique Intelligente',
        rating: 4,
        reviews: 90,
        price: '9 200',
      },
       {
        id: 14,
        image: 'assets/laptop-1.jpg',
        name: 'Électronique Domestique Intelligente',
        rating: 4,
        reviews: 90,
        price: '9 200',
      },
       {
        id: 15,
        image: 'assets/laptop-1.jpg',
        name: 'Électronique Domestique Intelligente',
        rating: 4,
        reviews: 90,
        price: '9 200',
      },
       {
        id: 16,
        image: 'assets/laptop-1.jpg',
        name: 'Électronique Domestique Intelligente',
        rating: 4,
        reviews: 90,
        price: '9 200',
      },
       {
        id: 17,
        image: 'assets/laptop-1.jpg',
        name: 'Électronique Domestique Intelligente',
        rating: 4,
        reviews: 90,
        price: '9 200',
      },
       {
        id: 18,
        image: 'assets/pppejpg',
        name: 'Électronique Domestique Intelligente',
        rating: 4,
        reviews: 90,
        price: '9 200',
      },
      // Add more products as needed to see multiple rows
    ];

    this.groupProductsIntoRows();
  }

  /**
   * Groups the allProducts array into sub-arrays of 3 products each.
   * This facilitates displaying a title for each row.
   */
  groupProductsIntoRows() {
    this.groupedProducts = [];
    const itemsPerRow = 3;
    for (let i = 0; i < this.allProducts.length; i += itemsPerRow) {
      this.groupedProducts.push(this.allProducts.slice(i, i + itemsPerRow));
    }
  }

  /**
   * Generates a dynamic section title based on the starting index of products in a row.
   * @param startIndex The starting index of the products in the current row.
   * @returns A string representing the section title.
   */
  getSectionTitle(startIndex: number): string {
    const sectionNumber = Math.floor(startIndex / 3) + 1; // Calculate row number (1-based)
    switch (sectionNumber) {
      case 1:
        return 'Les meilleurs Loptop';
      case 2:
        return 'Les meilleurs Block de note';
      case 3:
        return 'Les meilleurs montres ';
      case 4:
        return 'Les accesoires pour vous';
      case 5:
        return 'Decouvrer de nouvelles choses';
      default:
        return `Autres produits interessants`; // Fallback for more rows
    }
  }
}