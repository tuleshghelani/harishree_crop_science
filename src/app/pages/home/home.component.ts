import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import AOS from 'aos';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

const META_KEY = makeStateKey<boolean>('meta-data');
const STRUCTURED_DATA_KEY = makeStateKey<string>('structured-data');

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    private router: Router
  ) {}

  products = [
    {
      name: 'Bio Fertilizer',
      image: 'assets/products/Buldozer.png',
      description: 'Organic bio-fertilizer for enhanced crop growth'
    },
    {
      name: 'Growth Promoter',
      image: 'assets/products/CHEMISTRY.png',
      description: 'Natural growth promoter for healthy plants'
    },
    {
      name: 'Organic Pesticide',
      image: 'assets/products/GREEN OUT.png',
      description: 'Safe and effective organic pest control'
    },
    {
      name: 'Soil Conditioner',
      image: 'assets/products/kavach.png',
      description: 'Premium soil conditioning solution'
    }
  ];

  ngOnInit() {
    this.setMetaData();
    this.setStructuredData();
    
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 50
    });
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }

  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) {
      return;
    }

    this.title.setTitle(environment.metaDefaults.title);
    
    const metaTags = [
      { name: 'description', content: environment.metaDefaults.description },
      { name: 'keywords', content: environment.metaDefaults.keywords },
      { property: 'og:title', content: environment.metaDefaults.title },
      { property: 'og:description', content: environment.metaDefaults.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: environment.metaDefaults.author }
    ];

    metaTags.forEach(tag => this.meta.updateTag(tag as MetaDefinition));
    this.transferState.set(META_KEY, true);
  }

  private setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY)) {
      return;
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Harishree Crop Science",
      "description": environment.metaDefaults.description,
      "url": this.baseUrl,
      "logo": `${this.baseUrl}/assets/logo/HARISHREE.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": environment.contactPhone,
        "contactType": "customer service"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }

  navigateToProductDetails() {
    this.router.navigate(['/products']);
  }
} 