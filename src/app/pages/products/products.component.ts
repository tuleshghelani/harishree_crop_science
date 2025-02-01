import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import AOS from 'aos';
import { ProductService } from '../../shared/services/product.service';
import { ProductCategory, Product } from '../../shared/interfaces/product.interface';
import { Location } from '@angular/common';
import { ProductDialogComponent } from '../../shared/components/product-dialog/product-dialog.component';
import { DialogService } from '../../shared/services/dialog.service';

const META_KEY = makeStateKey<boolean>('products-meta-data');
const STRUCTURED_DATA_KEY = makeStateKey<string>('products-structured-data');

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductDialogComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  categories: ProductCategory[] = [];
  activeCategory: string = 'Insecticide';

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    private productService: ProductService,
    private location: Location,
    private dialogService: DialogService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.setMetaData();
    this.setStructuredData();
    this.dialogService.setContainer(this.viewContainerRef);
    
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    this.checkUrlHash();
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }

  private loadCategories() {
    this.productService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
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

  private checkUrlHash(): void {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash) {
      this.openProductDialog(hash);
    }
  }

  openProductDialog(productName: string): void {
    const product = this.findProductByName(productName);
    if (!product) return;

    this.dialogService.open(ProductDialogComponent, { product });
    this.location.replaceState(`/products#${encodeURIComponent(productName)}`);

    this.dialogService.onClose$.subscribe(() => {
      this.location.replaceState('/products');
    });
  }

  private findProductByName(name: string): Product | undefined {
    return this.categories
      .flatMap(category => category.products)
      .find(product => product.name === name);
  }
}
