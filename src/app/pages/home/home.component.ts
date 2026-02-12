import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

const META_KEY = makeStateKey<boolean>('HOME_META');
const STRUCTURED_DATA_KEY = makeStateKey<string>('HOME_STRUCTURED_DATA');

/** SEO: Primary keywords – agriculture, farming, fertilizer, pesticides, organic farming, crop protection, sustainable agriculture. Secondary – bio fertilizers, organic pesticides, crop yield, soil health, plant protection, agricultural products India, sustainable farming, weed control, agricultural solutions, eco-friendly farming. */

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
      description: 'Long-lasting crop protection with fewer applications. Trusted by farmers for effective pest and weed control in sustainable agriculture.'
    },
    {
      name: 'Chemistry',
      image: 'assets/products/CHEMISTRY.jpg',
      description: 'Fertilizers and pesticides that boost crop yield and plant health. Formulations designed for modern farming and soil health.'
    },
    {
      name: 'Green Out',
      image: 'assets/products/GREEN OUT.png',
      description: 'Organic pesticides and plant protection for healthier crops. Eco-friendly solutions that support sustainable farming and higher yields.'
    },
    {
      name: 'Kavach',
      image: 'assets/products/kavach.png',
      description: 'Effective fungicide for crop protection against fungal diseases. Helps improve crop yield and plant protection across key crops.'
    }
  ];

  testimonials = [
    {
      name: 'Sudhir Dattartay Sawant',
      location: 'Solapur, Maharashtra',
      rating: 5,
      review: 'Harishree Crop Science fertilizers and bio-fertilizers have significantly improved our crop yield. Quality agricultural products and outstanding support.'
    },
    {
      name: 'Makwana Mansing',
      location: 'Kodinar, Gujarat',
      rating: 5,
      review: 'Very satisfied with their organic pesticides and crop protection range. Effective, eco-friendly farming solutions and timely delivery.'
    },
    {
      name: 'Akram',
      location: 'Kheri, Uttar Pradesh',
      rating: 5,
      review: 'Best agricultural solutions for farming in India. Their pesticides and fertilizers helped us get better results while maintaining soil health. Highly recommended.'
    }
  ];

  // Slider state – first slide carries the single H1 (primary keywords)
  slides = [
    {
      src: 'assets/home/slider-image-01.jpg',
      alt: 'Sustainable agriculture and crop protection – fertilizers and pesticides for farming',
      h1: 'Fertilizers, Pesticides & Crop Protection for Modern Agriculture',
      h2: '',
      p: 'Organic farming solutions, bio fertilizers and sustainable agriculture. Trusted by farmers across India.'
    },
    {
      src: 'assets/home/slider-image-02.jpg',
      alt: 'Premium fertilizers and pesticides for higher crop yield',
      h1: '',
      h2: 'Premium Fertilizers & Pesticides for Better Crop Yield',
      p: 'Plant protection and soil health solutions for sustainable farming.'
    },
    {
      src: 'assets/home/slider-image-03.jpg',
      alt: 'Agricultural research and crop protection innovation',
      h1: '',
      h2: 'Research-Driven Crop Protection & Agricultural Solutions',
      p: 'Eco-friendly farming products for crop yield and weed control.'
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

    const pageTitle = 'Harishree Crop Science | Agriculture – Fertilizers, Pesticides & Crop Protection India';
    const pageDescription = 'Leading supplier of fertilizers, pesticides and crop protection for agriculture. Organic farming solutions, bio fertilizers and sustainable agriculture. Trusted across India.';
    const pageKeywords = 'agriculture, farming, fertilizer, pesticides, organic farming, crop protection, sustainable agriculture, bio fertilizers, organic pesticides, crop yield, soil health, plant protection, agricultural products India, sustainable farming, weed control, agricultural solutions, eco-friendly farming';

    this.title.setTitle(pageTitle);

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: pageDescription },
      { name: 'keywords', content: pageKeywords },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      { property: 'og:url', content: `${this.baseUrl}` },
      { property: 'og:site_name', content: 'Harishree Crop Science' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: environment.metaDefaults.author }
    ];

    metaTags.forEach(tag => this.meta.updateTag(tag));
    this.transferState.set(META_KEY, true);
  }

  private setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY)) return;

    const organizationId = `${this.baseUrl}/#organization`;
    const organization = {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'Harishree Crop Science',
      description: 'Leading supplier of fertilizers, pesticides and crop protection for agriculture in India. Organic farming solutions, bio fertilizers and sustainable agriculture.',
      url: this.baseUrl,
      logo: `${this.baseUrl}/assets/logo/HARISHREE.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+919898197196',
        contactType: 'customer service',
        areaServed: 'IN'
      },
      makesOffer: this.products.map((prod, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: prod.name,
          image: prod.image.startsWith('http') ? prod.image : `${this.baseUrl}/${prod.image}`,
          description: prod.description
        }
      }))
    };

    const webSite = {
      '@type': 'WebSite',
      '@id': `${this.baseUrl}/#website`,
      url: this.baseUrl,
      name: 'Harishree Crop Science',
      description: 'Agriculture – Fertilizers, Pesticides & Crop Protection India. Organic farming, crop protection and sustainable agriculture solutions.',
      publisher: { '@id': organizationId }
    };

    const graph = [organization, webSite];
    const structuredData = { '@context': 'https://schema.org', '@graph': graph };

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));

    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined') {
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