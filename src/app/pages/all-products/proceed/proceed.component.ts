import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import Aos from 'aos';

const META_KEY = makeStateKey<boolean>('PROCEED_META');
const STRUCTURED_DATA_KEY = makeStateKey<string>('PROCEED_STRUCTURED_DATA');

@Component({
  selector: 'app-proceed',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './proceed.component.html',
  styleUrl: './proceed.component.scss'
})
export class ProceedComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;

  product = {
    name: 'Proceed',
    image: 'assets/products/PROCEED.png',
    description: 'Advanced insect control solution for comprehensive pest management'
  };

  targetPests = [
    {
      name: 'Lepidopteran Pests',
      description: 'Effective against various caterpillars and moths affecting crops'
    },
    {
      name: 'Sucking Pests',
      description: 'Controls aphids, whiteflies, and other sap-sucking insects'
    },
    {
      name: 'Soil Insects',
      description: 'Manages various soil-dwelling pests affecting root systems'
    }
  ];

  applicationDetails = {
    dosage: '150-200 ml per acre',
    method: 'Foliar spray using standard spray equipment',
    timing: 'Apply at first sign of pest infestation'
  };

  safetyPrecautions = [
    'Always wear protective equipment during handling and application',
    'Avoid contact with eyes and skin',
    'Store in original container away from direct sunlight',
    'Keep out of reach of children and pets'
  ];

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}  

  ngOnInit() {
    this.setMetaData();
    this.setStructuredData();
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }

  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) return;

    this.title.setTitle('Proceed - Advanced Insecticide | Harishree Crop Science');
    
    const metaTags = [
      { name: 'description', content: 'Proceed is an advanced agricultural insecticide offering rapid knockdown and long-lasting control against crop pests. Premium pest management solution for professional farmers.' },
      { name: 'keywords', content: 'Proceed insecticide, agricultural insecticide, crop pest control, pest management, farming insecticide, agricultural pest control, Proceed agricultural medicine' },
      { property: 'og:title', content: 'Proceed - Premium Agricultural Insecticide' },
      { property: 'og:description', content: 'Advanced insecticide formulation for comprehensive pest management in agriculture. Features rapid knockdown and long-lasting residual control.' },
      { property: 'og:type', content: 'product' },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/PROCEED.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'author', content: environment.metaDefaults.author }
    ];

    metaTags.forEach(tag => this.meta.updateTag(tag as MetaDefinition));
    this.transferState.set(META_KEY, true);
  }

  private setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY) || !isPlatformBrowser(this.platformId)) return;

    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Proceed",
      "image": `${this.baseUrl}/assets/products/PROCEED.png`,
      "description": "Advanced insecticide formulation designed for comprehensive pest management, offering rapid knockdown and long-lasting residual control against agricultural pests.",
      "brand": {
        "@type": "Brand",
        "name": "Harishree Crop Science"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Harishree Crop Science",
        "url": this.baseUrl
      },
      "category": "Agricultural Insecticide",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
}
