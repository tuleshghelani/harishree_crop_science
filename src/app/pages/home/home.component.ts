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
    if (this.transferState.hasKey(META_KEY)) return;

    this.title.setTitle('Harishree Crop Science | Premium Agricultural Solutions Provider');
    
    const metaTags = [
      { name: 'description', content: 'Leading manufacturer and supplier of premium agricultural solutions including organic pesticides, bio-fertilizers, and eco-friendly crop protection products. Trusted by farmers across India for sustainable farming solutions.' },
      { name: 'keywords', content: 'agricultural solutions, organic pesticides, bio fertilizers, crop protection products, agricultural chemicals, sustainable farming, organic farming products' },
      { property: 'og:title', content: 'Premium Agricultural Solutions | Harishree Crop Science' },
      { property: 'og:description', content: 'Discover our comprehensive range of organic pesticides, bio-fertilizers, and eco-friendly crop protection solutions for sustainable agriculture.' },
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
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY)) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Harishree Crop Science",
      "description": "Leading manufacturer and supplier of premium agricultural solutions including organic pesticides, bio-fertilizers, and eco-friendly crop protection products.",
      "url": this.baseUrl,
      "logo": `${this.baseUrl}/assets/logo/HARISHREE.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": environment.contactPhone,
        "contactType": "customer service"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Organic Pesticides",
            "description": "Premium organic pesticides for sustainable crop protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Bio Fertilizers",
            "description": "Natural bio-fertilizers for enhanced crop yield"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Crop Protection Solutions",
            "description": "Comprehensive crop protection products for modern agriculture"
          }
        }
      ]
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