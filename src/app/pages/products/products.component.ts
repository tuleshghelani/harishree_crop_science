import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import AOS from 'aos';

const META_KEY = makeStateKey<boolean>('products-meta-data');
const STRUCTURED_DATA_KEY = makeStateKey<string>('products-structured-data');

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;

  categories = [
    {
      name: 'Insecticide',
      products: [
        { name: 'Proceed', image: 'assets/products/PROCEED.png', description: 'Advanced insect control solution' },
        { name: 'Thio-h', image: 'assets/products/THIO-H.png', description: 'Effective pest management' },
        { name: 'Star Super', image: 'assets/products/STAR SUPER.png', description: 'Premium insect protection' },
        { name: 'Mpire 404', image: 'assets/products/MPIRE-404.png', description: 'Complete pest control' },
        { name: 'H Fun', image: 'assets/products/H FUN.png', description: 'Specialized insecticide' },
        { name: 'Neem Pro', image: 'assets/products/NEEM PRO.png', description: 'Natural pest control' },
        { name: 'Mission', image: 'assets/products/MISSION.png', description: 'Target-specific insecticide' },
        { name: 'Kavach', image: 'assets/products/kavach.png', description: 'Protective insect shield' },
        { name: 'Pride-H', image: 'assets/products/PRIDE-H.png', description: 'Professional pest control' },
        { name: 'Hmida', image: 'assets/products/H MIDA.png', description: 'Advanced insect management' },
        { name: 'Dr. Supreme', image: 'assets/products/DR.SUPREME.png', description: 'Superior insect control' },
        { name: 'Buldozer', image: 'assets/products/Buldozer.png', description: 'Powerful pest elimination' },
        { name: 'Combi 505', image: 'assets/products/COMBI 505.png', description: 'Combination insecticide' },
        { name: 'Cora-5', image: 'assets/products/CORA-5.png', description: 'Comprehensive protection' },
        { name: 'FI 40', image: 'assets/products/FI 40.png', description: 'Fast-acting insecticide' },
        { name: 'Hil Thene', image: 'assets/products/HILTHENE.png', description: 'Long-lasting protection' }
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

  activeCategory: string = 'Insecticide';

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState
  ) {}

  ngOnInit() {
    this.setMetaData();
    this.setStructuredData();
    
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) return;

    this.title.setTitle('Agricultural Products | Harishree Crop Science');
    
    const metaTags = [
      { name: 'description', content: 'Explore our comprehensive range of agricultural products including insecticides, fungicides, herbicides, and PGRs. Premium quality solutions for modern farming.' },
      { name: 'keywords', content: 'agricultural products, insecticides, fungicides, herbicides, PGR, crop protection, farming solutions' },
      { property: 'og:title', content: 'Agricultural Products | Harishree Crop Science' },
      { property: 'og:description', content: 'Discover our complete range of agricultural solutions for modern farming needs.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'index, follow' }
    ];

    metaTags.forEach(tag => this.meta.updateTag(tag as MetaDefinition));
    this.transferState.set(META_KEY, true);
  }

  private setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY)) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": this.categories.map((category, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": category.name,
        "description": `${category.name} products from Harishree Crop Science`,
        "numberOfItems": category.products.length,
        "itemListElement": category.products.map(product => ({
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": `${this.baseUrl}/${product.image}`
        }))
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
}
