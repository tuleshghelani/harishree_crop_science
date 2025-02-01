import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductCategory } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: ProductCategory[] = [
    {
      name: 'Insecticide',
      products: [
        { name: 'Proceed', image: 'assets/products/PROCEED.png', description: 'Advanced insect control solution',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'Thio-h', image: 'assets/products/THIO-H.png', description: 'Effective pest management',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'Star Super', image: 'assets/products/STAR SUPER.png', description: 'Premium insect protection',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'Mpire 404', image: 'assets/products/MPIRE-404.png', description: 'Complete pest control',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'H Fun', image: 'assets/products/H FUN.png', description: 'Specialized insecticide',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'Neem Pro', image: 'assets/products/NEEM PRO.png', description: 'Natural pest control',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'Mission', image: 'assets/products/MISSION.png', description: 'Target-specific insecticide',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'Kavach', image: 'assets/products/kavach.png', description: 'Protective insect shield',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'Pride-H', image: 'assets/products/PRIDE-H.png', description: 'Professional pest control',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'Hmida', image: 'assets/products/H MIDA.png', description: 'Advanced insect management',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'Dr. Supreme', image: 'assets/products/DR.SUPREME.png', description: 'Superior insect control',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        { name: 'Buldozer', image: 'assets/products/Buldozer.png', description: 'Powerful pest elimination',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'Combi 505', image: 'assets/products/COMBI 505.png', description: 'Combination insecticide',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'Cora-5', image: 'assets/products/CORA-5.png', description: 'Comprehensive protection',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'FI 40', image: 'assets/products/FI 40.png', description: 'Fast-acting insecticide',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         },
        { name: 'Hil Thene', image: 'assets/products/HILTHENE.png', description: 'Long-lasting protection',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    },
    {
      name: 'Fungicide',
      products: [
        { name: 'C-Pro', image: 'assets/products/C-Pro.png', description: 'Professional fungus control' },
        { name: 'Confer Plus', image: 'assets/products/confer plus.png', description: 'Enhanced fungal protection' },
        { name: 'Tej-65', image: 'assets/products/TEJ 65.png', description: 'Rapid fungicide action' },
        { name: 'Chemistry', image: 'assets/products/CHEMISTRY.png', description: 'Scientific fungal control' },
        { name: 'Sulf Green', image: 'assets/products/SULF GREEN.png', description: 'Eco-friendly fungicide' },
        { name: 'Saf-63', image: 'assets/products/SAF-63.png', description: 'Safe and effective' },
        { name: 'Milet Gold', image: 'assets/products/MILET GOLD.png', description: 'Premium fungal protection' },
        { name: 'HTM', image: 'assets/products/HTM.png', description: 'Advanced fungicide formula' },
        { name: 'King', image: 'assets/products/KING.png', description: 'Superior fungal control' },
        { name: 'Captop', image: 'assets/products/CAPTOP.png', description: 'Complete fungal protection' },
        { name: 'Tebuja', image: 'assets/products/TEBUJA.png', description: 'Specialized fungicide' },
        { name: 'Haristin', image: 'assets/products/HARISTIN.png', description: 'Professional fungicide' },
        { name: 'Hari 45', image: 'assets/products/HARI-45.png', description: 'Effective fungal control' },
        { name: 'Hatayu', image: 'assets/products/HATAYU.png', description: 'Long-lasting protection' }
      ]
    },
    {
      name: 'Herbicide',
      products: [
        { name: 'Laser', image: 'assets/products/LASER.png', description: 'Precise weed control' },
        { name: 'Paddy', image: 'assets/products/paddy.png', description: 'Rice crop protection' },
        { name: 'Oxy Green', image: 'assets/products/OXY GREEN.png', description: 'Eco-friendly herbicide' },
        { name: 'H-Round', image: 'assets/products/H ROUND.png', description: 'Complete weed management' },
        { name: 'Green Out', image: 'assets/products/GREEN OUT.png', description: 'Effective weed control' },
        { name: 'Glufo13', image: 'assets/products/GLUFO 13.png', description: 'Professional herbicide' },
        { name: 'Hera-71', image: 'assets/products/HERA-71.png', description: 'Advanced weed solution' },
        { name: 'T-Super', image: 'assets/products/T-SUPER.png', description: 'Superior weed control' },
        { name: 'Imaza 10', image: 'assets/products/IMAZA 10.png', description: 'Specialized herbicide' }
      ]
    },
    {
      name: 'PGR',
      products: [
        { name: 'Black gold', image: 'assets/products/BLACK GOLD.png', description: 'Premium growth regulator' },
        { name: 'Husi', image: 'assets/products/HUSI.png', description: 'Advanced plant growth' },
        { name: 'H Pro', image: 'assets/products/H PRO.png', description: 'Professional PGR solution' },
        { name: 'HC-Gold', image: 'assets/products/HC-GOLD.png', description: 'Superior growth control' },
        { name: 'Spreader Activator', image: 'assets/products/Spreader Activator.png', description: 'Enhanced absorption' }
      ]
    }
  ];

  constructor() {}

  getAllCategories(): Observable<ProductCategory[]> {
    return of(this.categories);
  }

  getCategoryByName(name: string): Observable<ProductCategory | undefined> {
    return of(this.categories.find(category => category.name === name));
  }

  getAllProducts(): Observable<Product[]> {
    const allProducts = this.categories.reduce((acc, category) => {
      return [...acc, ...category.products];
    }, [] as Product[]);
    return of(allProducts);
  }

  getProductsByCategory(categoryName: string): Observable<Product[]> {
    const category = this.categories.find(cat => cat.name === categoryName);
    return of(category ? category.products : []);
  }

  searchProducts(query: string): Observable<Product[]> {
    const searchTerm = query.toLowerCase();
    const matchingProducts = this.categories.reduce((acc, category) => {
      const matches = category.products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
      );
      return [...acc, ...matches];
    }, [] as Product[]);
    return of(matchingProducts);
  }
} 