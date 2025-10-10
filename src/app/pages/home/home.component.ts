import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import AOS from 'aos';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

const META_KEY = makeStateKey<boolean>('HOME_META');
const STRUCTURED_DATA_KEY = makeStateKey<string>('HOME_STRUCTURED_DATA');

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  products = [
    {
      name: 'Bulldozer',
      image: 'assets/products/Buldozer.png',
      description: 'Bulldozer provides long duration control by which frequent application is not required'
    },
    {
      name: 'Chemistry',
      image: 'assets/products/CHEMISTRY.jpg',
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

  // Slider state
  slides = [
    {
      src: 'assets/home/slider-image-01.jpg',
      alt: 'Sustainable Farming',
      h1: 'Sustainable Farming Solutions',
      h2: '',
      p: 'Empowering farmers with eco-friendly agricultural products'
    },
    {
      src: 'assets/home/slider-image-02.jpg',
      alt: 'Premium Quality Products',
      h1: '',
      h2: 'Premium Quality Products',
      p: 'Advanced formulations for better crop yield'
    },
    {
      src: 'assets/home/slider-image-03.jpg',
      alt: 'Research-Driven Innovation',
      h1: '',
      h2: 'Research-Driven Innovation',
      p: 'Cutting-edge solutions for modern agriculture'
    }
  ];

  currentSlideIndex = 0;
  private autoplayIntervalMs = 5000;
  private autoplayTimer: any = null;
  private prefersReducedMotion = false;
  private touchStartX: number | null = null;
  private touchDeltaX = 0;

  ngOnInit() {
    this.setMetaData();
    this.setStructuredData();
    this.setupReducedMotion();
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
    this.clearAutoplay();
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
      // { name: 'canonical', content: `${this.baseUrl}` },
      { property: 'og:url', content: `${this.baseUrl}` },
      { property: 'og:type', content: 'website' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
            "image": `${this.baseUrl}/assets/products/Buldozer.png`,
            "description": "Bulldozer provides long duration control by which frequent application is not required",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "300",
                "maxPrice": "1000",
                "priceCurrency": "INR"
              },
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Agricultural Product Review"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "1000"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Chemistry",
            "image": `${this.baseUrl}/assets/products/CHEMISTRY.jpg`,
            "description": "Chemistry in agriculture enhances crop yield through fertilizers and pesticides, while in medicine, it enables drug formulation for disease treatment.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "300",
                "maxPrice": "1000",
                "priceCurrency": "INR"
              },
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Agricultural Product Review"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "1000"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Green Out",
            "image": `${this.baseUrl}/assets/products/GREEN OUT.png`,
            "description": "Green Out offers advanced agricultural medicines designed to protect crops from pests and diseases, ensuring higher yields. Our eco-friendly solutions promote sustainable farming with effective pest control.",
            "offers": {
              "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "minPrice": "300",
                  "maxPrice": "1000",
                  "priceCurrency": "INR"
                },
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Agricultural Product Review"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "1000"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Kavach",
            "image": `${this.baseUrl}/assets/products/kavach.png`,
            "description": "Kavach is a highly effective fungicide used in agriculture to protect crops from fungal diseases. It ensures healthier yields by preventing infections and enhancing plant immunity.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "300",
                "maxPrice": "1000",
                "priceCurrency": "INR"
              },
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Agricultural Product Review"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "1000"
            }
          }
        }
      ]
    };

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));

    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }

  navigateToProductDetails() {
    this.router.navigate(['/products']);
  }

  trackByProduct = (_: number, item: { name: string }) => item.name;
  trackByTestimonial = (_: number, item: { name: string }) => item.name;
  trackBySlide = (index: number) => index;

  // Slider controls
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.cdr.markForCheck();
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.cdr.markForCheck();
  }

  goToSlide(index: number) {
    if (index < 0 || index >= this.slides.length) return;
    this.currentSlideIndex = index;
    this.cdr.markForCheck();
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.prevSlide();
    }
  }

  // Autoplay with reduced motion consideration
  private setupReducedMotion() {
    if (!isPlatformBrowser(this.platformId)) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.prefersReducedMotion = mediaQuery.matches;
    const listener = () => {
      this.prefersReducedMotion = mediaQuery.matches;
      if (this.prefersReducedMotion) {
        this.clearAutoplay();
      } else {
        this.startAutoplay();
      }
    };
    try {
      mediaQuery.addEventListener('change', listener);
    } catch {
      // Safari fallback
      // @ts-ignore
      mediaQuery.addListener(listener);
    }
  }

  private startAutoplay() {
    if (!isPlatformBrowser(this.platformId) || this.prefersReducedMotion) return;
    this.clearAutoplay();
    this.autoplayTimer = window.setInterval(() => {
      this.nextSlide();
    }, this.autoplayIntervalMs);
  }

  private clearAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  pauseAutoplay() {
    this.clearAutoplay();
  }

  resumeAutoplay() {
    this.startAutoplay();
  }

  // Touch swipe support
  onTouchStart(event: TouchEvent) {
    if (!event.touches || event.touches.length !== 1) return;
    this.touchStartX = event.touches[0].clientX;
    this.touchDeltaX = 0;
    this.pauseAutoplay();
  }

  onTouchMove(event: TouchEvent) {
    if (this.touchStartX == null) return;
    this.touchDeltaX = event.touches[0].clientX - this.touchStartX;
  }

  onTouchEnd() {
    if (this.touchStartX == null) return;
    const threshold = 50;
    if (this.touchDeltaX > threshold) {
      this.prevSlide();
    } else if (this.touchDeltaX < -threshold) {
      this.nextSlide();
    }
    this.touchStartX = null;
    this.touchDeltaX = 0;
    this.resumeAutoplay();
  }
} 