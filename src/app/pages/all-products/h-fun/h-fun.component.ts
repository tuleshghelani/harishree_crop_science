import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import Aos from 'aos';

const META_KEY = makeStateKey<boolean>('HFUN_META');
const STRUCTURED_DATA_KEY = makeStateKey<string>('HFUN_STRUCTURED_DATA');

@Component({
  selector: 'app-h-fun',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './h-fun.component.html',
  styleUrl: './h-fun.component.scss'
})
export class HFunComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;

  product = {
    name: 'H-Fun',
    image: 'assets/products/H FUN.png',
    description: 'Premium Agricultural Insecticide for Comprehensive Pest Control'
  };

  targetPests = [
    {
      name: 'Aphids',
      description: 'Highly effective against various aphid species that affect agricultural crops'
    },
    {
      name: 'Thrips',
      description: 'Controls thrips populations that damage leaves, flowers, and fruits'
    },
    {
      name: 'Whiteflies',
      description: 'Eliminates whitefly infestations that cause yellowing, stunting, and yield loss'
    }
  ];

  applicationDetails = {
    dosage: '125-150 ml per acre',
    method: 'Foliar spray application with proper coverage',
    timing: 'Apply at first sign of pest infestation or as preventive measure'
  };

  safetyPrecautions = [
    'Wear appropriate protective gear during mixing and application',
    'Avoid contact with skin, eyes, and clothing',
    'Store in cool, dry place away from direct sunlight',
    'Keep out of reach of children and unauthorized persons'
  ];
  
  // Technical Specifications Data
  technicalSpecs = {
    productInfo: [
      { label: 'Active Ingredient', value: 'Imidacloprid 17.8% SL' },
      { label: 'Formulation Type', value: 'Soluble Liquid (SL)' },
      { label: 'Mode of Action', value: 'Systemic with contact and stomach action' },
      { label: 'Contents', value: '100ml, 250ml, 500ml, 1L bottle' },
      { label: 'Shelf Life', value: '2 years from date of manufacture' }
    ],
    applicationDetails: [
      { label: 'Recommended Crops', value: 'Cotton, Rice, Vegetables, Fruits, Oilseeds' },
      { label: 'Application Rate', value: '125-150 ml per acre' },
      { label: 'Water Requirement', value: '200-250 liters per acre' },
      { label: 'Pre-Harvest Interval', value: '7-14 days (crop dependent)' },
      { label: 'Re-Entry Period', value: '24 hours after application' }
    ]
  };
  
  // Recommended Crops
  recommendedCrops = [
    {
      name: 'Cotton',
      description: 'Provides excellent control of sucking pests in cotton crops',
      dosage: '125-150 ml/acre',
      targetPests: 'Aphids, Jassids, Whiteflies, Thrips'
    },
    {
      name: 'Vegetables',
      description: 'Protects vegetable crops from a range of insect pests',
      dosage: '125 ml/acre',
      targetPests: 'Aphids, Whiteflies, Thrips, Leafminers'
    },
    {
      name: 'Rice',
      description: 'Effective against major rice pests for healthier crop growth',
      dosage: '150 ml/acre',
      targetPests: 'Brown Plant Hopper, White Backed Plant Hopper'
    }
  ];
  
  // FAQ Data
  faqs = [
    {
      question: 'How quickly does H-Fun show results?',
      answer: '<strong>H-Fun</strong> begins working immediately after application, with visible results seen within <strong>24-48 hours</strong>. Its systemic action ensures that the active ingredient is quickly absorbed and distributed throughout the plant, providing rapid control of target pests.'
    },
    {
      question: 'Is H-Fun safe for beneficial insects?',
      answer: 'When used as directed, <strong>H-Fun</strong> has minimal impact on beneficial insects such as pollinators when applied during non-flowering stages. We recommend following integrated pest management practices and applying the product during early morning or late evening when beneficial insect activity is lower.'
    },
    {
      question: 'How long does H-Fun remain effective after application?',
      answer: '<strong>H-Fun</strong> provides effective pest control for <strong>14-21 days</strong> after application under normal field conditions. The duration of protection may vary depending on pest pressure, environmental conditions, and crop growth rate.'
    },
    {
      question: 'Can H-Fun be mixed with other agricultural products?',
      answer: '<strong>H-Fun</strong> is compatible with most commonly used pesticides, fungicides, and foliar fertilizers. However, we recommend conducting a small compatibility test before mixing with other products. Always add H-Fun to the spray tank first, followed by other products.'
    }
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

    this.title.setTitle('H-Fun - Premium Agricultural Insecticide | Harishree Crop Science');
    
    const metaTags = [
      { name: 'description', content: 'H-Fun is a specialized agricultural insecticide formulated for comprehensive pest management. Our premium insecticide provides effective control against aphids, thrips, whiteflies and other crop pests.' },
      { name: 'keywords', content: 'H-Fun insecticide, H-Fun agricultural insecticide, H-Fun crop protection, pest control, farming insecticide, agricultural pest management, H-Fun agricular insecticide' },
      { property: 'og:title', content: 'H-Fun - Premium Agricultural Insecticide' },
      { property: 'og:description', content: 'Specialized insecticide formulation engineered for targeted pest control. Features rapid absorption, systemic protection, and complete crop coverage.' },
      { property: 'og:type', content: 'product' },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/H FUN.png` },
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
      "name": "H-Fun",
      "image": `${this.baseUrl}/assets/products/H FUN.png`,
      "description": "H-Fun is a specialized insecticide formulation engineered for targeted pest control. Its unique composition ensures rapid absorption and distribution throughout the plant system, providing comprehensive protection against a wide range of harmful insects while being gentle on beneficial organisms.",
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
        "ratingValue": "4.7",
        "reviewCount": "125"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }

  navigateToProductDetails() {
    // Method to handle navigation to product details
  }
}
