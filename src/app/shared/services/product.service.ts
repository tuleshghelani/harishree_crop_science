import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductCategory } from '../../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: ProductCategory[] = [
    {
      name: 'Insecticide',
      products: [
        { name: 'Proceed', 
          image: 'assets/products/PROCEED.png', 
          description: 'Advanced insect control solution',
          fullDescription: 'Proceed is our advanced insecticide formulation designed for comprehensive pest management. It offers rapid knockdown and long-lasting residual control against a broad spectrum of agricultural pests. The unique formulation ensures better crop coverage and enhanced resistance to wash-off, making it ideal for professional farmers seeking reliable pest control solutions.',
          url: 'product/proceed'
         },
        { name: 'Thio-h', image: 'assets/products/THIO-H.png', description: 'Effective pest management',
            fullDescription: 'Thio-h represents the latest in systemic insecticide technology. This powerful formulation penetrates plant tissues to provide protection from within, effectively controlling both sucking and chewing pests. Its balanced composition ensures crop safety while delivering outstanding pest control performance across various agricultural applications.',
            url: 'product/thio-h'
         },
        { name: 'Super FS', image: 'assets/products/SUPER FS.png', description: 'Premium insect protection',
            fullDescription: 'Super FS is our premium grade insecticide offering superior protection against multiple pest species. Its advanced formula combines fast action with extended protection periods, making it an excellent choice for high-value crops. The product features enhanced stability under various weather conditions and minimal impact on beneficial insects.',
            url: 'product/super-fs'
         },
        { name: 'Mpire 404', image: 'assets/products/MPIRE-404.png', description: 'Complete pest control',
            fullDescription: 'Mpire 404 delivers comprehensive pest management through its innovative dual-action formula. This professional-grade solution provides both contact and systemic activity, ensuring thorough pest elimination at all life stages. Its unique composition offers excellent crop safety while maintaining high efficacy against resistant pest populations.',
            url: 'product/mpire-404'
         },
         { name: 'H Fun', 
            image: 'assets/products/H FUN.png', 
            description: 'Specialized insecticide',
            fullDescription: 'H Fun is a specialized insecticide formulation engineered for targeted pest control. Its unique composition ensures rapid absorption and distribution throughout the plant system, providing comprehensive protection against a wide range of harmful insects while being gentle on beneficial organisms.',
            url: 'product/h-fun'
          },
          { name: 'Neem Pro', 
            image: 'assets/products/NEEM PRO.png', 
            description: 'Natural pest control',
            fullDescription: 'Neem Pro harnesses the power of natural neem extracts enhanced with advanced formulation technology. This eco-friendly solution provides effective control against multiple pest species while being safe for the environment. Its botanical origin ensures minimal residue concerns and better acceptance in organic farming.'
          },
          { name: 'Mission', 
            image: 'assets/products/MISSION.png', 
            description: 'Target-specific insecticide',
            fullDescription: 'Mission is a precision-engineered insecticide designed for specific pest targets. Its selective action ensures maximum effectiveness against target pests while minimizing impact on non-target organisms. The advanced formulation provides excellent rainfastness and extended protection periods.'
          },
          { name: 'Kavach', 
            image: 'assets/products/kavach.png', 
            description: 'Protective insect shield',
            fullDescription: 'Kavach creates a powerful protective shield against destructive insect pests. This innovative formulation provides both contact and residual activity, ensuring comprehensive crop protection. Its unique shield technology ensures better adherence to plant surfaces and resistance to environmental factors.'
          },
          { name: 'Pride-H', 
            image: 'assets/products/PRIDE-H_2.png', 
            description: 'Professional pest control',
            fullDescription: 'Pride-H represents professional-grade pest management technology. This advanced formulation combines rapid knockdown with long-lasting protection, making it ideal for commercial farming operations. Its balanced composition ensures optimal performance across various crop stages and conditions.'
          },
          { name: 'Hmida', 
            image: 'assets/products/H MIDA.png', 
            description: 'Advanced insect management',
            fullDescription: 'Hmida delivers cutting-edge insect management through its innovative systemic action. The product provides comprehensive protection by controlling pests at multiple life stages. Its advanced formulation ensures quick absorption and uniform distribution throughout the plant system.'
          },
          { name: 'Dr. Supreme', 
            image: 'assets/products/DR.SUPREME.png', 
            description: 'Superior insect control',
            fullDescription: 'Dr. Supreme offers superior pest control through its advanced dual-mode action. This premium formulation provides both preventive and curative benefits, ensuring complete protection against various pest infestations. Its superior coverage and adherence properties enhance overall efficacy.'
          },
          { name: 'Buldozer', 
            image: 'assets/products/Buldozer.png', 
            description: 'Powerful pest elimination',
            fullDescription: 'Buldozer is a powerful broad-spectrum insecticide designed for situations requiring robust pest control. Its concentrated formulation delivers quick knockdown and lasting residual action. The product\'s unique chemistry ensures effective control even against resistant pest populations.'
          },
          { name: 'Combi 505', 
            image: 'assets/products/COMBI 505.png', 
            description: 'Combination insecticide',
            fullDescription: 'Combi 505 combines multiple active ingredients for enhanced pest control. This unique combination provides broader spectrum activity and better resistance management. The synergistic action of its components ensures superior control of various pest complexes.'
          },
          { name: 'Cora-5', 
            image: 'assets/products/CORA-5.png', 
            description: 'Comprehensive protection',
            fullDescription: 'Cora-5 provides comprehensive protection through its advanced formulation technology. This versatile product offers excellent control over multiple pest species while being safe for crops. Its unique composition ensures better coverage and longer-lasting protection.'
          },
          { name: 'FI 40', 
            image: 'assets/products/FI 40.png', 
            description: 'Fast-acting insecticide',
            fullDescription: 'FI 40 is engineered for rapid pest control action. Its quick-penetrating formula ensures immediate results while maintaining residual activity. The product\'s balanced composition provides excellent crop safety while delivering powerful pest control performance.'
          },
          { name: 'Hil Thene', 
            image: 'assets/products/HILTHENE.png', 
            description: 'Long-lasting protection',
            fullDescription: 'Hil Thene offers extended protection against various insect pests. Its innovative slow-release technology ensures consistent pest control over longer periods. The product\'s unique formulation provides excellent stability under various environmental conditions.'
          }
      ]
    },
    {
      name: 'Fungicide',
      products: [
        { name: 'X-Pro', image: 'assets/products/X-PRO.png', description: 'Professional fungus control' },
        { name: 'Confer Plus', image: 'assets/products/confer plus.png', description: 'Enhanced fungal protection' },
        { name: 'Tej-65', image: 'assets/products/TEJ 65.png', description: 'Rapid fungicide action' },
        { name: 'Chemistry', image: 'assets/products/CHEMISTRY.png', description: 'Scientific fungal control' },
        { name: 'Sulf Green', image: 'assets/products/SULF GREEN.png', description: 'Eco-friendly fungicide' },
        { name: 'Saf-63', image: 'assets/products/SAF-63.png', description: 'Safe and effective' },
        { name: 'Milet Gold', image: 'assets/products/MILET GOLD.png', description: 'Premium fungal protection' },
        { name: 'HTM', image: 'assets/products/HTM.png', description: 'Advanced fungicide formula' },
        { name: 'King', image: 'assets/products/KING_2.png', description: 'Superior fungal control' },
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
        { name: 'Paddy', image: 'assets/products/PADDY_3.png', description: 'Rice crop protection' },
        { name: 'Oxy Green', image: 'assets/products/OXY GREEN.png', description: 'Eco-friendly herbicide' },
        { name: 'H-Round', image: 'assets/products/H ROUND.png', description: 'Complete weed management' },
        { name: 'Green Out', image: 'assets/products/GREEN OUT.png', description: 'Effective weed control' },
        { name: 'Glufo13', image: 'assets/products/GLUFO13.png', description: 'Professional herbicide' },
        { name: 'Hera-71', image: 'assets/products/HERA-71.png', description: 'Advanced weed solution' },
        { name: 'T-Super', image: 'assets/products/T-SUPER.png', description: 'Superior weed control' },
        { name: 'Imaza 10', image: 'assets/products/IMAZA 10.png', description: 'Specialized herbicide' }
      ]
    },
    {
      name: 'PGR',
      products: [
        { name: 'Black Gold', image: 'assets/products/BLACK GOLD.png', description: 'Premium growth regulator' },
        { name: 'Husi', image: 'assets/products/HUSI.png', description: 'Advanced plant growth' },
        { name: 'H Pro', image: 'assets/products/H PRO.png', description: 'Professional PGR solution' },
        { name: 'HC-Gold', image: 'assets/products/HC-GOLD.png', description: 'Superior growth control' },
        { name: 'Dhani Wet', image: 'assets/products/DHANI WET.png', description: 'Enhanced absorption' },        
        { name: 'Black Diamond', image: 'assets/products/BLACK DIAMOND.png', description: 'Premium growth regulator' },
        { name: 'Black Gold', image: 'assets/products/BLACK GOLD.png', description: 'Premium growth regulator' },
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