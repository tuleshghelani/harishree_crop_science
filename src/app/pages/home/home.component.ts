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
      name: 'Bulldozer',
      image: 'assets/products/Buldozer.png',
      description: 'Bulldozer provides long duration control by which frequent application is not required'
    },
    {
      name: 'Chemistry',
      image: 'assets/products/CHEMISTRY.png',
      description: 'Chemistry in agriculture enhances crop yield through fertilizers and pesticides.'
    },
    {
      name: 'Green Out',
      image: 'assets/products/GREEN OUT.png',
      description: 'Green Out offers advanced agricultural medicines designed to protect crops from pests and diseases, ensuring higher yields.'
    },
    {
      name: 'Kavach',
      image: 'assets/products/kavach.png',
      description: 'Kavach is a highly effective fungicide used in agriculture to protect crops from fungal diseases.'
    }
  ];

  testimonials = [
    {
      name: 'Sudhir Dattartay Sawant',
      location: 'Solapur, Maharashtra',
      rating: 5,
      review: 'Excellent quality products that have significantly improved our crop yield. The bio-fertilizers are highly effective and the customer support is outstanding.'
    },
    {
      name: 'Makwana Mansing',
      location: 'Kodinar, Gujarat',
      rating: 5,
      review: 'Very satisfied with their organic pesticides. The products are effective and eco-friendly. Great service and timely delivery.'
    },
    {
      name: 'Akram',
      location: 'Kheri, Uttar Pradesh',
      rating: 5,
      review: 'Best agricultural solutions provider. Their products have helped us achieve better results while maintaining soil health. Highly recommended!'
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
        "telephone": "+919898197196",
        "contactType": "customer service"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Bulldozer",
            "description": "Bulldozer provides long duration control by which frequent application is not required"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Chemistry",
            "description": "Chemistry in agriculture enhances crop yield through fertilizers and pesticides, while in medicine, it enables drug formulation for disease treatment."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Green Out",
            "description": "Green Out offers advanced agricultural medicines designed to protect crops from pests and diseases, ensuring higher yields. Our eco-friendly solutions promote sustainable farming with effective pest control."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Kavach",
            "description": "Kavach is a highly effective fungicide used in agriculture to protect crops from fungal diseases. It ensures healthier yields by preventing infections and enhancing plant immunity."
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