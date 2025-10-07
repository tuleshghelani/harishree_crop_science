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
            image: 'assets/products/MISSION.jpg', 
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
            image: 'assets/products/CORA-5.jpg', 
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
        {
          name: 'Confer Plus',
          image: 'assets/products/fungicide/confer-plus.jpg',
          description: 'Hexaconazole 5% SC systemic fungicide',
          fullDescription: 'Confer Plus (Hexaconazole 5% SC) is a premium, broad-spectrum systemic fungicide engineered for modern farming. Its advanced triazole chemistry moves rapidly within plant tissues to stop fungal growth at multiple stages, delivering fast-acting, long-lasting protection. Ideal for crops such as cereals, fruits and vegetables, it effectively controls diseases like powdery mildew, sheath blight and leaf spots. The optimized suspension concentrate ensures superior leaf coverage, rainfastness and excellent tank-mix compatibility. Designed for professional use, Confer Plus supports higher yield quality with reliable performance across climates and application methods while maintaining a strong safety profile when used as directed.'
        },
        { name: 'Tej-65', image: 'assets/products/TEJ 65.png', description: 'Rapid fungicide action' },
        { name: 'Chemistry', image: 'assets/products/CHEMISTRY.jpg', description: 'Scientific fungal control' },
        { name: 'Sulf Green', image: 'assets/products/SULF GREEN.png', description: 'Eco-friendly fungicide' },
        { name: 'Saf-63', image: 'assets/products/SAF-63.png', description: 'Safe and effective' },
        {
          name: 'Milet Gold',
          image: 'assets/products/fungicide/milet-gold.jpg',
          description: 'Metalaxyl 8% + Mancozeb 64% WP dual-action',
          fullDescription: 'Milet Gold combines Metalaxyl 8% with Mancozeb 64% WP to deliver a powerful dual-action shield against both systemic and contact fungal pathogens. The Metalaxyl component targets oomycete diseases from within the plant, while Mancozeb forms a protective barrier on the leaf surface for extended coverage. This synergy provides dependable control of late blight, downy mildew and seedling diseases in potatoes, grapes, vegetables and oilseeds. With excellent dispersibility, uniform coverage and strong resistance-management value, Milet Gold is a professional choice for preventive and early curative programs that protect yield and quality.'
        },
        { name: 'HTM', image: 'assets/products/HTM.png', description: 'Advanced fungicide formula' },
        { name: 'King', image: 'assets/products/KING_2.png', description: 'Superior fungal control' },
        { name: 'Captop', image: 'assets/products/CAPTOP.jpg', description: 'Complete fungal protection' },
        { name: 'Tebuja', image: 'assets/products/TEBUJA.png', description: 'Specialized fungicide' },
        { name: 'Haristin', image: 'assets/products/HARISTIN.png', description: 'Professional fungicide' },
        {
          name: 'Hari 45',
          image: 'assets/products/fungicide/hari-45.jpg',
          description: 'Mancozeb 75% WP contact fungicide',
          fullDescription: 'Hari-45 (Mancozeb 75% WP) is a trusted, multi-site contact fungicide that delivers reliable protection against a broad spectrum of foliar diseases. Its multi-mode activity minimizes resistance risk while safeguarding tender growth, canopy health and photosynthetic efficiency. Suitable for potatoes, pulses, fruits and vegetables, Hari-45 prevents early and late blights, leaf spots and rusts when applied preventively. The premium wettable powder mixes easily, spreads uniformly and adheres well for consistent coverage, making it a practical, performance-driven choice for growers seeking dependable disease control and market-ready produce.'
        },
        {
          name: 'Hatayu',
          image: 'assets/products/fungicide/hatayu.jpg',
          description: 'Chlorothalonil 75% WP durable barrier',
          fullDescription: 'Hatayu (Chlorothalonil 75% WP) is a high-performance, contact fungicide known for its durable protective barrier and excellent residual action. It works on multiple sites of the pathogen, helping delay resistance while providing broad-spectrum control of early blight, fruit rots and leaf spots across vegetables, fruit crops and ornamentals. The fine, free-flowing WP formulation disperses quickly in water, ensuring even coverage and dependable performance under varied field conditions. Use Hatayu as a preventive spray or within a rotation program to keep foliage clean, healthy and productive throughout the season.'
        },
        {
          name: 'Magic',
          image: 'assets/products/fungicide/magic.jpg',
          description: 'Validamycin 3% L specialized systemic',
          fullDescription: 'Magic (Validamycin 3% L) is a specialized systemic antibiotic fungicide highly effective against sheath blight and other diseases caused by Rhizoctonia spp. The liquid formulation absorbs readily and translocates within plant tissues to stop disease development quickly while remaining gentle on crops. Magic fits seamlessly into integrated disease management programs with strong efficacy in paddy and horticultural crops. Its targeted mode of action, rainfastness and ease of use make it a professional solution that helps preserve crop quality and maximize yields with fewer application rounds.'
        },
        {
          name: 'H-Tilt',
          image: 'assets/products/fungicide/h-tilt.jpg',
          description: 'Propiconazole 25% EC systemic triazole',
          fullDescription: 'H-Tilt (Propiconazole 25% EC) is a premium systemic triazole fungicide formulated for rapid absorption and deep movement within the plant. It inhibits ergosterol biosynthesis, halting fungal growth and ensuring strong curative and protective action. Highly effective on rusts, leaf spots and sheath blight in cereals, oilseeds and horticultural crops, H-Tilt offers excellent rainfastness and crop safety when used as directed. The emulsifiable concentrate delivers consistent performance in both solo and tank-mix programs, supporting healthier canopies, longer green leaf area duration and superior harvest quality.'
        }
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