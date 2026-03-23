import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-4MSA62PL.js";
import {
  environment
} from "./chunk-TP5SVJPG.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Meta,
  NgForOf,
  NgIf,
  PLATFORM_ID,
  Title,
  TransferState,
  isPlatformBrowser,
  makeStateKey2 as makeStateKey,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FE7VCITN.js";

// src/app/pages/home/home.component.ts
var _c0 = () => ["/products"];
var _c1 = (a0) => ({ category: a0 });
var _c2 = () => [1, 2, 3, 4, 5];
function HomeComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function HomeComponent_button_3_Template_button_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToSlide(i_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r2 === ctx_r2.currentSlideIndex);
    \u0275\u0275attribute("aria-current", i_r2 === ctx_r2.currentSlideIndex ? "true" : null)("aria-label", "Go to slide " + (i_r2 + 1));
  }
}
function HomeComponent_div_5_h1_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 46)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slide_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r4.h1);
  }
}
function HomeComponent_div_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slide_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(slide_r4.h2);
  }
}
function HomeComponent_div_5_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slide_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(slide_r4.p);
  }
}
function HomeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "img", 42);
    \u0275\u0275elementStart(2, "div", 43);
    \u0275\u0275template(3, HomeComponent_div_5_h1_3_Template, 3, 1, "h1", 44)(4, HomeComponent_div_5_ng_template_4_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, HomeComponent_div_5_p_6_Template, 2, 1, "p", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const heroSubTpl_r6 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r5 === ctx_r2.currentSlideIndex);
    \u0275\u0275advance();
    \u0275\u0275property("src", slide_r4.src, \u0275\u0275sanitizeUrl)("alt", slide_r4.alt);
    \u0275\u0275attribute("loading", i_r5 === 0 ? "eager" : "lazy")("fetchpriority", i_r5 === 0 ? "high" : null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", slide_r4.h1)("ngIfElse", heroSubTpl_r6);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", slide_r4.p);
  }
}
function HomeComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "a", 50)(2, "span", 51);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 52);
    \u0275\u0275text(9, "View products ");
    \u0275\u0275element(10, "i", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0))("queryParams", \u0275\u0275pureFunction1(8, _c1, cat_r7.slug));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("fas fa-", cat_r7.icon, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r7.shortDesc);
  }
}
function HomeComponent_ng_container_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 54)(2, "article", 55)(3, "div", 56);
    \u0275\u0275element(4, "img", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 58)(6, "h3", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 48);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 59)(11, "button", 60);
    \u0275\u0275listener("click", function HomeComponent_ng_container_141_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateToProductDetails());
    });
    \u0275\u0275text(12, "View all products");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r9 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", product_r9.image, \u0275\u0275sanitizeUrl)("alt", product_r9.name + " \u2013 " + product_r9.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r9.description);
  }
}
function HomeComponent_div_147_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const star_r10 = ctx.$implicit;
    const testimonial_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("filled", star_r10 <= testimonial_r11.rating);
  }
}
function HomeComponent_div_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "div", 63);
    \u0275\u0275template(3, HomeComponent_div_147_ng_container_3_Template, 2, 2, "ng-container", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66)(7, "div", 67);
    \u0275\u0275element(8, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 69)(10, "h4", 70)(11, "span", 46);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 71);
    \u0275\u0275element(14, "i", 72);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small", 73);
    \u0275\u0275text(17, "Verified on IndiaMart");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const testimonial_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r11.review);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(testimonial_r11.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", testimonial_r11.location, " ");
  }
}
var META_KEY = makeStateKey("HOME_META");
var STRUCTURED_DATA_KEY = makeStateKey("HOME_STRUCTURED_DATA");
var HomeComponent = class _HomeComponent {
  constructor(meta, title, transferState, router, platformId, cdr) {
    this.meta = meta;
    this.title = title;
    this.transferState = transferState;
    this.router = router;
    this.platformId = platformId;
    this.cdr = cdr;
    this.baseUrl = environment.baseUrl;
    this.cropCategories = [
      { name: "Insecticide", slug: "Insecticide", shortDesc: "Control aphids, whitefly, bollworms and sucking pests. Our insecticides are used on cotton, vegetables and pulses across India.", icon: "bug" },
      { name: "Fungicide", slug: "Fungicide", shortDesc: "Fight blight, mildew and leaf spots. Reliable disease control for paddy, horticulture and field crops.", icon: "leaf" },
      { name: "Herbicide", slug: "Herbicide", shortDesc: "Weed control that works. Pre- and post-emergence options for rice, wheat, soybeans and more.", icon: "seedling" },
      { name: "PGR", slug: "PGR", shortDesc: "Plant growth regulators and nutrition. Better root development, stress tolerance and harvest quality.", icon: "chart-line" }
    ];
    this.products = [
      { name: "Bulldozer", image: "assets/products/Buldozer.png", description: "Long-lasting pest control with fewer sprays. Farmers use it for tough infestations in cotton and vegetables." },
      { name: "Chemistry", image: "assets/products/CHEMISTRY.jpg", description: "Our blend for crop nutrition and protection. Supports healthy growth and yield in field and horticultural crops." },
      { name: "Green Out", image: "assets/products/GREEN OUT.png", description: "Fast-acting weed control. Used for burndown and inter-row spraying; inactivated on soil contact." },
      { name: "Kavach", image: "assets/products/kavach.png", description: "Fungicide that stops fungal diseases in their tracks. Fits into routine sprays for paddy, vegetables and fruits." }
    ];
    this.testimonials = [
      { name: "Sudhir Dattartay Sawant", location: "Solapur, Maharashtra", rating: 5, review: "We have been using Harishree products for three seasons. Crop stand and yield have improved. The team explains dosage and timing clearly." },
      { name: "Makwana Mansing", location: "Kodinar, Gujarat", rating: 5, review: "Good results on chilli and cotton. Delivery is on time and the insecticide we use has cut down repeat sprays." },
      { name: "Akram", location: "Kheri, Uttar Pradesh", rating: 5, review: "We tried their fungicide and herbicide last year. Both did the job. I recommend them to other farmers in our area." }
    ];
    this.slides = [
      { src: "assets/home/slider-image-01.jpg", alt: "Farm and crop protection - insecticides, fungicides and herbicides", h1: "Fertilizers, Pesticides & Crop Protection for Modern Agriculture", h2: "", p: "Insecticide, fungicide, herbicide and PGR solutions. Trusted by farmers across India." },
      { src: "assets/home/slider-image-02.jpg", alt: "Quality pesticides for better crop yield", h1: "", h2: "Quality You Can Rely On", p: "From cotton and paddy to vegetables and pulses \u2013 we back every product with field experience and support." },
      { src: "assets/home/slider-image-03.jpg", alt: "Research and crop protection", h1: "", h2: "Backed by Research", p: "Our R&D focuses on formulations that work in real field conditions and fit into your spray schedule." }
    ];
    this.currentSlideIndex = 0;
    this.autoplayIntervalMs = 5e3;
    this.autoplayTimer = null;
    this.prefersReducedMotion = false;
    this.touchStartX = null;
    this.touchDeltaX = 0;
    this.trackByCategory = (_, item) => item.slug;
    this.trackByProduct = (_, item) => item.name;
    this.trackByTestimonial = (_, item) => item.name;
    this.trackBySlide = (index) => index;
  }
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
  setMetaData() {
    if (this.transferState.hasKey(META_KEY))
      return;
    const pageTitle = "Harishree Crop Science | Agriculture \u2013 Fertilizers, Pesticides & Crop Protection India";
    const pageDescription = "Leading supplier of fertilizers, pesticides and crop protection for agriculture. Organic farming solutions, bio fertilizers and sustainable agriculture. Trusted across India.";
    const pageKeywords = "agriculture, farming, fertilizer, pesticides, organic farming, crop protection, sustainable agriculture, bio fertilizers, organic pesticides, crop yield, soil health, plant protection, agricultural products India, sustainable farming, weed control, agricultural solutions, eco-friendly farming";
    this.title.setTitle(pageTitle);
    const metaTags = [
      { name: "description", content: pageDescription },
      { name: "keywords", content: pageKeywords },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      { property: "og:url", content: `${this.baseUrl}` },
      { property: "og:site_name", content: "Harishree Crop Science" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: environment.metaDefaults.author }
    ];
    metaTags.forEach((tag) => this.meta.updateTag(tag));
    this.transferState.set(META_KEY, true);
  }
  setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY))
      return;
    const organizationId = `${this.baseUrl}/#organization`;
    const organization = {
      "@type": "Organization",
      "@id": organizationId,
      name: "Harishree Crop Science",
      description: "Leading supplier of fertilizers, pesticides and crop protection for agriculture in India. Organic farming solutions, bio fertilizers and sustainable agriculture.",
      url: this.baseUrl,
      logo: `${this.baseUrl}/assets/logo/HARISHREE.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+919898197196",
        contactType: "customer service",
        areaServed: "IN"
      },
      makesOffer: this.products.map((prod, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: prod.name,
          image: prod.image.startsWith("http") ? prod.image : `${this.baseUrl}/${prod.image}`,
          description: prod.description
        }
      }))
    };
    const webSite = {
      "@type": "WebSite",
      "@id": `${this.baseUrl}/#website`,
      url: this.baseUrl,
      name: "Harishree Crop Science",
      description: "Agriculture \u2013 Fertilizers, Pesticides & Crop Protection India. Organic farming, crop protection and sustainable agriculture solutions.",
      publisher: { "@id": organizationId }
    };
    const graph = [organization, webSite];
    const structuredData = { "@context": "https://schema.org", "@graph": graph };
    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
    if (isPlatformBrowser(this.platformId) && typeof document !== "undefined") {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }
  navigateToProductDetails() {
    this.router.navigate(["/products"]);
  }
  // Slider controls
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.cdr.markForCheck();
  }
  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.cdr.markForCheck();
  }
  goToSlide(index) {
    if (index < 0 || index >= this.slides.length)
      return;
    this.currentSlideIndex = index;
    this.cdr.markForCheck();
  }
  onKeydown(event) {
    if (event.key === "ArrowRight") {
      this.nextSlide();
    } else if (event.key === "ArrowLeft") {
      this.prevSlide();
    }
  }
  // Autoplay with reduced motion consideration
  setupReducedMotion() {
    if (!isPlatformBrowser(this.platformId))
      return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
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
      mediaQuery.addEventListener("change", listener);
    } catch {
      mediaQuery.addListener(listener);
    }
  }
  startAutoplay() {
    if (!isPlatformBrowser(this.platformId) || this.prefersReducedMotion)
      return;
    this.clearAutoplay();
    this.autoplayTimer = window.setInterval(() => {
      this.nextSlide();
    }, this.autoplayIntervalMs);
  }
  clearAutoplay() {
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
  onTouchStart(event) {
    if (!event.touches || event.touches.length !== 1)
      return;
    this.touchStartX = event.touches[0].clientX;
    this.touchDeltaX = 0;
    this.pauseAutoplay();
  }
  onTouchMove(event) {
    if (this.touchStartX == null)
      return;
    this.touchDeltaX = event.touches[0].clientX - this.touchStartX;
  }
  onTouchEnd() {
    if (this.touchStartX == null)
      return;
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
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(TransferState), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 148, vars: 10, consts: [["heroSubTpl", ""], ["itemscope", "", "itemtype", "https://schema.org/Organization"], ["id", "heroSlider", "role", "region", "aria-roledescription", "carousel", "aria-label", "Featured highlights", "tabindex", "0", 1, "carousel", "slide", "premium-slider", 3, "keydown", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchend"], ["role", "tablist", 1, "carousel-indicators"], ["type", "button", 3, "active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["aria-live", "polite", 1, "carousel-inner"], ["class", "carousel-item", 3, "active", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["aria-labelledby", "categories-heading", 1, "crop-categories"], [1, "container"], ["id", "categories-heading", 1, "section-title"], [1, "section-subtitle"], [1, "row", "g-4"], ["class", "col-md-6 col-lg-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["aria-labelledby", "what-we-do-heading", 1, "what-we-do"], ["id", "what-we-do-heading", 1, "section-title"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "content"], ["routerLink", "/about-us", 1, "btn", "btn-primary"], ["src", "assets/home/about.jpeg", "alt", "Harishree Crop Science \u2013 crop protection and pesticides", "loading", "lazy", "decoding", "async", 1, "img-fluid", "rounded", "shadow"], ["aria-labelledby", "key-features-heading", 1, "key-features", "bg-primary-lightest"], ["id", "key-features-heading", 1, "section-title"], [1, "row"], [1, "col-lg-3", "col-md-6"], [1, "feature-card"], ["aria-hidden", "true", 1, "icon"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9 3V7M15 3V7M3 10H21M7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "12", "cy", "14", "r", "3", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 6.5C10 4.5 7 4.5 5 6.5C3 8.5 3 12 5 14L12 21L19 14C21 12 21 8.5 19 6.5C17 4.5 14 4.5 12 6.5Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 6.5C14 4.5 17 4.5 19 6.5C21 8.5 21 12 19 14L12 21", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 22V15", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-labelledby", "products-heading", 1, "premium-products"], ["id", "products-heading", 1, "section-title"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["aria-labelledby", "testimonials-heading", 1, "testimonials"], ["id", "testimonials-heading", 1, "section-title"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 3, "click"], [1, "carousel-item"], ["decoding", "async", 1, "d-block", "w-100", 3, "src", "alt"], [1, "carousel-caption"], ["itemprop", "name", 4, "ngIf", "ngIfElse"], ["itemprop", "description", 4, "ngIf"], ["itemprop", "name"], [1, "hero-subtitle"], ["itemprop", "description"], [1, "col-md-6", "col-lg-3"], [1, "category-card", 3, "routerLink", "queryParams"], ["aria-hidden", "true", 1, "category-icon"], [1, "category-link"], [1, "fas", "fa-arrow-right"], [1, "col-lg-3", "col-md-6", "col-sm-12"], ["itemscope", "", "itemtype", "https://schema.org/Product", 1, "product-card"], [1, "product-image"], ["loading", "lazy", "decoding", "async", "itemprop", "image", 3, "src", "alt"], [1, "product-content"], [1, "product-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "col-lg-4", "col-md-6"], ["itemscope", "", "itemtype", "https://schema.org/Review", 1, "testimonial-card"], ["aria-hidden", "true", 1, "rating"], [4, "ngFor", "ngForOf"], ["itemprop", "reviewBody", 1, "review"], [1, "reviewer-info"], [1, "avatar"], ["aria-hidden", "true", 1, "fas", "fa-user-circle"], [1, "details"], ["itemprop", "author", "itemscope", "", "itemtype", "https://schema.org/Person"], [1, "location"], ["aria-hidden", "true", 1, "fas", "fa-map-marker-alt"], [1, "source"], [1, "fas", "fa-star"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 1)(1, "div", 2);
        \u0275\u0275listener("keydown", function HomeComponent_Template_div_keydown_1_listener($event) {
          return ctx.onKeydown($event);
        })("mouseenter", function HomeComponent_Template_div_mouseenter_1_listener() {
          return ctx.pauseAutoplay();
        })("mouseleave", function HomeComponent_Template_div_mouseleave_1_listener() {
          return ctx.resumeAutoplay();
        })("touchstart", function HomeComponent_Template_div_touchstart_1_listener($event) {
          return ctx.onTouchStart($event);
        })("touchmove", function HomeComponent_Template_div_touchmove_1_listener($event) {
          return ctx.onTouchMove($event);
        })("touchend", function HomeComponent_Template_div_touchend_1_listener() {
          return ctx.onTouchEnd();
        });
        \u0275\u0275elementStart(2, "div", 3);
        \u0275\u0275template(3, HomeComponent_button_3_Template, 1, 4, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 5);
        \u0275\u0275template(5, HomeComponent_div_5_Template, 7, 9, "div", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "section", 7)(7, "div", 8)(8, "h2", 9);
        \u0275\u0275text(9, "Our Crop Protection Range");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 10);
        \u0275\u0275text(11, "We offer ");
        \u0275\u0275elementStart(12, "strong");
        \u0275\u0275text(13, "insecticides");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, ", ");
        \u0275\u0275elementStart(15, "strong");
        \u0275\u0275text(16, "fungicides");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, ", ");
        \u0275\u0275elementStart(18, "strong");
        \u0275\u0275text(19, "herbicides");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " and ");
        \u0275\u0275elementStart(21, "strong");
        \u0275\u0275text(22, "plant growth regulators (PGR)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " for field and horticultural crops.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 11);
        \u0275\u0275template(25, HomeComponent_div_25_Template, 11, 10, "div", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "section", 13)(27, "div", 8)(28, "h2", 14);
        \u0275\u0275text(29, "What We Do");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 15)(31, "div", 16)(32, "div", 17)(33, "h3");
        \u0275\u0275text(34, "Pesticides and crop protection, from the ground up");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p")(36, "strong");
        \u0275\u0275text(37, "Harishree Crop Science");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " makes ");
        \u0275\u0275elementStart(39, "strong");
        \u0275\u0275text(40, "insecticides");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, ", ");
        \u0275\u0275elementStart(42, "strong");
        \u0275\u0275text(43, "fungicides");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, ", ");
        \u0275\u0275elementStart(45, "strong");
        \u0275\u0275text(46, "herbicides");
        \u0275\u0275elementEnd();
        \u0275\u0275text(47, " and ");
        \u0275\u0275elementStart(48, "strong");
        \u0275\u0275text(49, "PGR");
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, " products for Indian farmers. We focus on formulations that work in real field conditions\u2014whether you grow cotton, paddy, vegetables or pulses.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p");
        \u0275\u0275text(52, "Our team supports you with clear usage and timing so you get the best from each spray. We also invest in ");
        \u0275\u0275elementStart(53, "strong");
        \u0275\u0275text(54, "research");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, " and ");
        \u0275\u0275elementStart(56, "strong");
        \u0275\u0275text(57, "quality control");
        \u0275\u0275elementEnd();
        \u0275\u0275text(58, " so every batch meets the same standard.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "a", 18);
        \u0275\u0275text(60, "About us");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div", 16);
        \u0275\u0275element(62, "img", 19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(63, "section", 20)(64, "div", 8)(65, "h2", 21);
        \u0275\u0275text(66, "Why Farmers Choose Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 22)(68, "div", 23)(69, "div", 24)(70, "div", 25);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(71, "svg", 26);
        \u0275\u0275element(72, "path", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(73, "h3");
        \u0275\u0275text(74, "Tested formulations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "p");
        \u0275\u0275text(76, "Our ");
        \u0275\u0275elementStart(77, "strong");
        \u0275\u0275text(78, "insecticides");
        \u0275\u0275elementEnd();
        \u0275\u0275text(79, ", ");
        \u0275\u0275elementStart(80, "strong");
        \u0275\u0275text(81, "fungicides");
        \u0275\u0275elementEnd();
        \u0275\u0275text(82, " and ");
        \u0275\u0275elementStart(83, "strong");
        \u0275\u0275text(84, "herbicides");
        \u0275\u0275elementEnd();
        \u0275\u0275text(85, " are developed and tested for efficacy and crop safety.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "div", 23)(87, "div", 24)(88, "div", 25);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(89, "svg", 26);
        \u0275\u0275element(90, "path", 28)(91, "circle", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(92, "h3");
        \u0275\u0275text(93, "R&D and quality");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "p");
        \u0275\u0275text(95, "In-house research and strict ");
        \u0275\u0275elementStart(96, "strong");
        \u0275\u0275text(97, "quality assurance");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " so you get consistent results season after season.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(99, "div", 23)(100, "div", 24)(101, "div", 25);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(102, "svg", 26);
        \u0275\u0275element(103, "path", 30)(104, "path", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(105, "h3");
        \u0275\u0275text(106, "Responsible use");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "p");
        \u0275\u0275text(108, "We emphasise correct dose and timing so ");
        \u0275\u0275elementStart(109, "strong");
        \u0275\u0275text(110, "crop protection");
        \u0275\u0275elementEnd();
        \u0275\u0275text(111, " stays effective and sustainable.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(112, "div", 23)(113, "div", 24)(114, "div", 25);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(115, "svg", 26);
        \u0275\u0275element(116, "path", 32)(117, "path", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(118, "h3");
        \u0275\u0275text(119, "Support when you need it");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "p");
        \u0275\u0275text(121, "Technical guidance on ");
        \u0275\u0275elementStart(122, "strong");
        \u0275\u0275text(123, "plant protection");
        \u0275\u0275elementEnd();
        \u0275\u0275text(124, ", mixing and application so you spray with confidence.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(125, "section", 34)(126, "div", 8)(127, "h2", 35);
        \u0275\u0275text(128, "Some of Our Well-Known Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "p", 10);
        \u0275\u0275text(130, "Widely used across India for ");
        \u0275\u0275elementStart(131, "strong");
        \u0275\u0275text(132, "pest control");
        \u0275\u0275elementEnd();
        \u0275\u0275text(133, ", ");
        \u0275\u0275elementStart(134, "strong");
        \u0275\u0275text(135, "disease control");
        \u0275\u0275elementEnd();
        \u0275\u0275text(136, " and ");
        \u0275\u0275elementStart(137, "strong");
        \u0275\u0275text(138, "weed management");
        \u0275\u0275elementEnd();
        \u0275\u0275text(139, ".");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "div", 22);
        \u0275\u0275template(141, HomeComponent_ng_container_141_Template, 13, 4, "ng-container", 36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(142, "section", 37)(143, "div", 8)(144, "h2", 38);
        \u0275\u0275text(145, "What Farmers Say");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 22);
        \u0275\u0275template(147, HomeComponent_div_147_Template, 18, 5, "div", 39);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.slides)("ngForTrackBy", ctx.trackBySlide);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.slides)("ngForTrackBy", ctx.trackBySlide);
        \u0275\u0275advance(20);
        \u0275\u0275property("ngForOf", ctx.cropCategories)("ngForTrackBy", ctx.trackByCategory);
        \u0275\u0275advance(116);
        \u0275\u0275property("ngForOf", ctx.products)("ngForTrackBy", ctx.trackByProduct);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.testimonials)("ngForTrackBy", ctx.trackByTestimonial);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: [`

[_ngcontent-%COMP%]:root {
  --primary: #009846;
  --primary-light: #33b46e;
  --primary-lighter: #66cf96;
  --primary-lightest: #e6f5ed;
  --secondary: #529433;
  --secondary-light: #75ac5c;
  --secondary-lighter: #98c485;
  --secondary-lightest: #edf4ea;
  --accent: #fecd08;
  --accent-light: #fed73d;
  --accent-lighter: #fee172;
  --accent-lightest: #fff9e6;
  --font-primary: "DM Sans", sans-serif;
  --font-secondary: "Libre Baskerville", serif;
  --font-accent: "Manrope", sans-serif;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --primary-rgb:
    0,
    152,
    70;
  --secondary-rgb:
    82,
    148,
    51;
}
.bg-primary[_ngcontent-%COMP%] {
  background-color: var(--primary) !important;
}
.bg-primary-light[_ngcontent-%COMP%] {
  background-color: var(--primary-light) !important;
}
.bg-primary-lighter[_ngcontent-%COMP%] {
  background-color: var(--primary-lighter) !important;
}
.bg-primary-lightest[_ngcontent-%COMP%] {
  background-color: var(--primary-lightest) !important;
}
.bg-secondary[_ngcontent-%COMP%] {
  background-color: var(--secondary) !important;
}
.bg-secondary-light[_ngcontent-%COMP%] {
  background-color: var(--secondary-light) !important;
}
.bg-secondary-lighter[_ngcontent-%COMP%] {
  background-color: var(--secondary-lighter) !important;
}
.bg-secondary-lightest[_ngcontent-%COMP%] {
  background-color: var(--secondary-lightest) !important;
}
.bg-accent[_ngcontent-%COMP%] {
  background-color: var(--accent) !important;
}
.bg-accent-light[_ngcontent-%COMP%] {
  background-color: var(--accent-light) !important;
}
.bg-accent-lighter[_ngcontent-%COMP%] {
  background-color: var(--accent-lighter) !important;
}
.bg-accent-lightest[_ngcontent-%COMP%] {
  background-color: var(--accent-lightest) !important;
}
.text-primary[_ngcontent-%COMP%] {
  color: var(--primary) !important;
}
.text-secondary[_ngcontent-%COMP%] {
  color: var(--secondary) !important;
}
.text-accent[_ngcontent-%COMP%] {
  color: var(--accent) !important;
}
.font-primary[_ngcontent-%COMP%] {
  font-family: var(--font-primary);
}
.font-secondary[_ngcontent-%COMP%] {
  font-family: var(--font-secondary);
}
.font-accent[_ngcontent-%COMP%] {
  font-family: var(--font-accent);
}
.font-regular[_ngcontent-%COMP%] {
  font-weight: var(--font-regular);
}
.font-medium[_ngcontent-%COMP%] {
  font-weight: var(--font-medium);
}
.font-semibold[_ngcontent-%COMP%] {
  font-weight: var(--font-semibold);
}
.font-bold[_ngcontent-%COMP%] {
  font-weight: var(--font-bold);
}
body[_ngcontent-%COMP%] {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: 1.5;
  color: var(--gray-700);
  touch-action: manipulation;
}
.catalogue-page[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%], .premium-products[_ngcontent-%COMP%], .what-we-do[_ngcontent-%COMP%], .key-features[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%], .crop-categories[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%] {
  content-visibility: auto;
  contain-intrinsic-size: 1px 800px;
}
img[_ngcontent-%COMP%] {
  max-width: 100%;
  height: auto;
  image-rendering: -webkit-optimize-contrast;
}
h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
  font-family: var(--font-secondary);
  font-weight: var(--font-semibold);
  line-height: 1.2;
  margin-bottom: 1rem;
}
h1[_ngcontent-%COMP%] {
  font-size: var(--text-5xl);
}
h2[_ngcontent-%COMP%] {
  font-size: var(--text-4xl);
}
h3[_ngcontent-%COMP%] {
  font-size: var(--text-3xl);
}
h4[_ngcontent-%COMP%] {
  font-size: var(--text-2xl);
}
h5[_ngcontent-%COMP%] {
  font-size: var(--text-xl);
}
h6[_ngcontent-%COMP%] {
  font-size: var(--text-lg);
}
@media (max-width: 768px) {
  h1[_ngcontent-%COMP%] {
    font-size: var(--text-4xl);
  }
  h2[_ngcontent-%COMP%] {
    font-size: var(--text-3xl);
  }
  h3[_ngcontent-%COMP%] {
    font-size: var(--text-2xl);
  }
  h4[_ngcontent-%COMP%] {
    font-size: var(--text-xl);
  }
  h5[_ngcontent-%COMP%] {
    font-size: var(--text-lg);
  }
  h6[_ngcontent-%COMP%] {
    font-size: var(--text-base);
  }
}
.btn-primary[_ngcontent-%COMP%] {
  background-color: var(--primary);
  border-color: var(--primary);
  touch-action: manipulation;
}
.btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:focus {
  background-color: var(--secondary);
  border-color: var(--secondary);
}
.btn-primary.btn-sm[_ngcontent-%COMP%] {
  background-color: var(--primary);
  border-color: var(--primary);
}
.btn-primary.btn-sm[_ngcontent-%COMP%]:hover, .btn-primary.btn-sm[_ngcontent-%COMP%]:focus {
  background-color: var(--secondary);
  border-color: var(--secondary);
}
.premium-slider[_ngcontent-%COMP%] {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}
.premium-slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {
  height: clamp(420px, 72vh, 820px);
  background: var(--primary-lightest);
}
.premium-slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  object-fit: cover;
  height: 100%;
  filter: saturate(1.05) contrast(1.02);
  transform: translateZ(0);
  will-change: transform;
}
.premium-slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background:
    linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.35));
  padding: clamp(1rem, 1.5vw, 2rem) clamp(1.25rem, 2vw, 2.25rem);
  border-radius: 12px;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  color: #fff;
  text-align: center;
  max-width: min(92%, 900px);
}
.premium-slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .premium-slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h2.hero-subtitle[_ngcontent-%COMP%] {
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: clamp(1.35rem, 3.2vw, 2.5rem);
  line-height: 1.15;
}
.premium-slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  font-size: clamp(0.9rem, 1.5vw, 1.25rem);
  opacity: 0.95;
}
.premium-slider[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
}
.premium-slider[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  width: 12px;
  height: 12px;
  padding: 16px;
  margin: 0;
  border-radius: 999px;
  background: rgba(var(--primary-rgb), 0.35);
  border: 2px solid rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  cursor: pointer;
  box-sizing: content-box;
}
.premium-slider[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {
  width: 32px;
  background: var(--secondary);
  border-color: transparent;
}
.premium-slider[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {
  background: var(--primary);
}
.premium-slider[_ngcontent-%COMP%]   .carousel-control[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  color: var(--primary);
  display: grid;
  place-items: center;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  z-index: 2;
  transition: transform 0.2s ease, background 0.2s ease;
}
.premium-slider[_ngcontent-%COMP%]   .carousel-control[_ngcontent-%COMP%]:hover {
  transform: translateY(-50%) scale(1.05);
  background: #fff;
}
.premium-slider[_ngcontent-%COMP%]   .carousel-control[_ngcontent-%COMP%]:active {
  transform: translateY(-50%) scale(0.98);
}
.premium-slider[_ngcontent-%COMP%]   .carousel-control.prev[_ngcontent-%COMP%] {
  left: clamp(10px, 2vw, 16px);
}
.premium-slider[_ngcontent-%COMP%]   .carousel-control.next[_ngcontent-%COMP%] {
  right: clamp(10px, 2vw, 16px);
}
.premium-slider[_ngcontent-%COMP%]   .carousel-control[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  font-size: clamp(18px, 2.4vw, 26px);
  line-height: 1;
  font-weight: 600;
}
.section-title[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 1rem;
  color: var(--primary);
  font-family: var(--font-secondary);
  font-weight: var(--font-semibold);
}
.section-subtitle[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 2.5rem;
  color: var(--gray-700);
  font-size: var(--text-lg);
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}
.crop-categories[_ngcontent-%COMP%] {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #fff;
}
.crop-categories[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%] {
  display: block;
  padding: 1.75rem 1.5rem;
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(var(--primary-rgb), 0.12);
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.06);
  text-decoration: none;
  color: inherit;
  height: 100%;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
  touch-action: manipulation;
}
.crop-categories[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:hover, .crop-categories[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:focus {
  border-color: var(--primary);
  box-shadow: 0 8px 20px rgba(var(--primary-rgb), 0.12);
  transform: translateY(-4px);
}
.crop-categories[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--primary-lightest);
  color: var(--primary);
  margin-bottom: 1rem;
}
.crop-categories[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.35rem;
}
.crop-categories[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--primary);
  font-size: var(--text-xl);
  margin-bottom: 0.5rem;
}
.crop-categories[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: var(--text-sm);
  line-height: 1.55;
  color: var(--gray-700);
  margin-bottom: 1rem;
}
.crop-categories[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-link[_ngcontent-%COMP%] {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--secondary);
}
.crop-categories[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  margin-left: 0.35rem;
  font-size: 0.75rem;
}
@media (max-width: 768px) {
  .crop-categories[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%] {
    padding: 1.25rem 1rem;
  }
}
.what-we-do[_ngcontent-%COMP%] {
  padding: clamp(3rem, 6vw, 5rem) 0;
}
.what-we-do[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 400px;
  height: auto;
  aspect-ratio: 1;
  object-fit: contain;
}
.what-we-do[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-size: var(--text-2xl);
}
.what-we-do[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
  color: var(--gray-700);
  font-size: var(--text-base);
  line-height: 1.6;
}
.what-we-do[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {
  min-height: 44px;
  padding: 0.6rem 1.5rem;
}
.key-features[_ngcontent-%COMP%] {
  padding: clamp(3rem, 6vw, 5rem) 0;
}
@media (max-width: 768px) {
  .key-features[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {
    margin: -1.5rem;
  }
  .key-features[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%] {
    padding: 1.5rem;
  }
}
.key-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {
  text-align: center;
  padding: clamp(1.5rem, 2.5vw, 2rem);
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.06), 0 2px 6px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  border: 1px solid rgba(var(--primary-rgb), 0.08);
}
.key-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(var(--primary-rgb), 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.key-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
}
.key-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  fill: var(--primary);
}
.key-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--primary);
  font-size: var(--text-xl);
  margin-bottom: 0.75rem;
}
.key-features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: var(--text-sm);
  line-height: 1.55;
  color: var(--gray-700);
}
.premium-products[_ngcontent-%COMP%] {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background:
    linear-gradient(
      to bottom,
      var(--primary-lightest) 0%,
      white 100%);
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.06), 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-bottom: 2rem;
  height: 500px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: var(--secondary);
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]::after {
  background:
    linear-gradient(
      to bottom,
      rgba(var(--primary-rgb), 0.2),
      rgba(var(--secondary-rgb), 0.4));
  opacity: 1;
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  transform: scale(1.05);
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .product-type[_ngcontent-%COMP%] {
  background: var(--secondary);
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .product-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--secondary);
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .btn-primary[_ngcontent-%COMP%] {
  background-color: var(--secondary);
  border-color: var(--secondary);
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .btn-primary[_ngcontent-%COMP%]:hover {
  background-color: var(--primary);
  border-color: var(--primary);
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-type[_ngcontent-%COMP%] {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  z-index: 2;
  transition: background 0.3s ease;
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {
  height: 320px;
  overflow: hidden;
  position: relative;
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(
      to bottom,
      rgba(var(--primary-rgb), 0.1),
      rgba(var(--secondary-rgb), 0.2));
  opacity: 0;
  transition: all 0.3s ease;
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%] {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  position: relative;
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--primary);
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  transition: color 0.3s ease;
}
.premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--gray-700);
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 1rem;
}
@media (max-width: 1200px) {
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%] {
    height: 480px;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {
    height: 280px;
  }
}
@media (max-width: 991px) {
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%] {
    height: 460px;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {
    height: 260px;
  }
}
@media (max-width: 768px) {
  .premium-products[_ngcontent-%COMP%] {
    padding: 2rem 0;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%] {
    height: auto;
    min-height: 420px;
    margin-bottom: 1.5rem;
    border-radius: 8px;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover {
    transform: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-type[_ngcontent-%COMP%] {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
    top: 0.75rem;
    right: 0.75rem;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {
    height: 350px;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
    object-fit: cover;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]::after {
    background:
      linear-gradient(
        to bottom,
        rgba(var(--primary-rgb), 0.05),
        rgba(var(--secondary-rgb), 0.1));
    opacity: 1;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-footer[_ngcontent-%COMP%] {
    margin-top: 0.5rem;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    width: 100%;
    min-height: 44px;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:active {
    transform: scale(0.98);
    background-color: var(--secondary);
    border-color: var(--secondary);
  }
  .premium-products[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {
    margin: 0 -0.75rem;
  }
  .premium-products[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%] {
    padding: 0 0.75rem;
  }
}
@media (min-width: 769px) and (max-width: 991px) {
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%] {
    min-height: 440px;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {
    height: 240px;
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
    font-size: 1.15rem;
  }
}
@media (hover: none) {
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:active {
    transform: translateY(-2px);
  }
  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:active {
    transform: scale(0.98);
  }
}
@media (max-width: 1200px) {
  .premium-slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {
    height: clamp(420px, 68vh, 720px);
  }
}
@media (max-width: 991px) {
  .premium-slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {
    height: clamp(380px, 64vh, 640px);
  }
}
@media (max-width: 768px) {
  .premium-slider[_ngcontent-%COMP%] {
    border-radius: 10px;
  }
  .premium-slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {
    height: clamp(360px, 60vh, 560px);
  }
  .premium-slider[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {
    top: auto;
    bottom: 12%;
    transform: translate(-50%, 0);
    max-width: 90%;
  }
  .premium-slider[_ngcontent-%COMP%]   .carousel-control[_ngcontent-%COMP%] {
    background: rgba(255, 255, 255, 0.92);
  }
  .premium-slider[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {
    bottom: 12px;
    gap: 8px;
  }
  .what-we-do[_ngcontent-%COMP%] {
    text-align: center;
  }
  .what-we-do[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {
    margin-bottom: 2rem;
  }
}
@media (max-width: 576px) {
  .premium-slider[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {
    bottom: 10%;
    padding: 0.9rem 1rem;
  }
  .premium-slider[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .premium-slider[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: clamp(1.15rem, 5.5vw, 1.5rem);
  }
  .premium-slider[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 0.95rem;
  }
  .premium-slider[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
    width: 10px;
    height: 10px;
  }
}
.testimonials[_ngcontent-%COMP%] {
  padding: clamp(3rem, 6vw, 5rem) 0;
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  padding: clamp(1.5rem, 2.5vw, 2rem);
  margin-bottom: 2rem;
  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.06), 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(var(--primary-rgb), 0.06);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .fa-star[_ngcontent-%COMP%] {
  color: #ddd;
  font-size: 1.2rem;
  margin-right: 0.3rem;
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .fa-star.filled[_ngcontent-%COMP%] {
  color: #FFD700;
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .review[_ngcontent-%COMP%] {
  flex: 1;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--gray-700);
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .review[_ngcontent-%COMP%]::before {
  content: '"';
  font-size: 3rem;
  color: var(--primary-lightest);
  position: absolute;
  left: -0.5rem;
  top: -1rem;
  opacity: 0.5;
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .reviewer-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .reviewer-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-lightest);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .reviewer-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  color: var(--primary);
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .reviewer-info[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 0.2rem;
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .reviewer-info[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: var(--gray-600);
  margin-bottom: 0.2rem;
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .reviewer-info[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  margin-right: 0.5rem;
  color: var(--primary);
}
.testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .reviewer-info[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: var(--gray-500);
}
@media (max-width: 768px) {
  .testimonials[_ngcontent-%COMP%] {
    padding: 3rem 0;
  }
  .testimonials[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%] {
    padding: 1.5rem;
  }
}
/*# sourceMappingURL=home.component.css.map */`], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 22 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-4UXPXS2Y.js.map
