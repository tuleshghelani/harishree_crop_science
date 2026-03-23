import './polyfills.server.mjs';
import {
  require_aos
} from "./chunk-7Z6SOXOL.mjs";
import {
  RouterModule
} from "./chunk-SM3HQYI7.mjs";
import {
  environment
} from "./chunk-UYQZEPZK.mjs";
import {
  CommonModule,
  Meta,
  NgForOf,
  PLATFORM_ID,
  Title,
  TransferState2 as TransferState,
  isPlatformBrowser,
  makeStateKey2 as makeStateKey,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Q6ZNKT7I.mjs";
import {
  __toESM
} from "./chunk-24VIC3GD.mjs";

// src/app/pages/all-products/proceed/proceed.component.ts
var import_aos = __toESM(require_aos());
function ProceedComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96)(2, "div", 97);
    \u0275\u0275element(3, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pest_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275attribute("data-aos-delay", 100 * i_r2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(pest_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pest_r1.description);
  }
}
function ProceedComponent_ng_container_232_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 99)(2, "h3", 100)(3, "button", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 102)(6, "div", 103);
    \u0275\u0275element(7, "p", 104);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const faq_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "heading", i_r4, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("accordion-button ", i_r4 !== 0 ? "collapsed" : "", "");
    \u0275\u0275attribute("data-bs-target", "#collapse" + i_r4)("aria-expanded", i_r4 === 0 ? "true" : "false")("aria-controls", "collapse" + i_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r3.question, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("accordion-collapse collapse ", i_r4 === 0 ? "show" : "", "");
    \u0275\u0275property("id", "collapse" + i_r4);
    \u0275\u0275attribute("aria-labelledby", "heading" + i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", faq_r3.answer, \u0275\u0275sanitizeHtml);
  }
}
var META_KEY = makeStateKey("PROCEED_META");
var STRUCTURED_DATA_KEY = makeStateKey("PROCEED_STRUCTURED_DATA");
var ProceedComponent = class _ProceedComponent {
  constructor(meta, title, transferState, platformId) {
    this.meta = meta;
    this.title = title;
    this.transferState = transferState;
    this.platformId = platformId;
    this.baseUrl = environment.baseUrl;
    this.product = {
      name: "Proceed",
      image: "assets/products/PROCEED.png",
      description: "Advanced insect control solution for comprehensive pest management"
    };
    this.targetPests = [
      {
        name: "Lepidopteran Pests",
        description: "Effective against various caterpillars and moths affecting crops"
      },
      {
        name: "Sucking Pests",
        description: "Controls aphids, whiteflies, and other sap-sucking insects"
      },
      {
        name: "Soil Insects",
        description: "Manages various soil-dwelling pests affecting root systems"
      }
    ];
    this.applicationDetails = {
      dosage: "150-200 ml per acre",
      method: "Foliar spray using standard spray equipment",
      timing: "Apply at first sign of pest infestation"
    };
    this.safetyPrecautions = [
      "Always wear protective equipment during handling and application",
      "Avoid contact with eyes and skin",
      "Store in original container away from direct sunlight",
      "Keep out of reach of children and pets"
    ];
    this.technicalSpecs = {
      productInfo: [
        { label: "Active Ingredient", value: "Chlorpyrifos 50% + Cypermethrin 5% EC" },
        { label: "Formulation Type", value: "Emulsifiable Concentrate (EC)" },
        { label: "Mode of Action", value: "Contact, Stomach, and Respiratory" },
        { label: "Contents", value: "250ml, 500ml, 1L bottle" },
        { label: "Shelf Life", value: "2 years from date of manufacture" }
      ],
      applicationDetails: [
        { label: "Recommended Crops", value: "Cotton, Rice, Vegetables, Fruits, Pulses" },
        { label: "Application Rate", value: "150-200 ml per acre" },
        { label: "Water Requirement", value: "200-250 liters per acre" },
        { label: "Pre-Harvest Interval", value: "14-21 days (crop dependent)" },
        { label: "Re-Entry Period", value: "24 hours after application" }
      ]
    };
    this.faqs = [
      {
        question: "How soon after application can I see results?",
        answer: "<strong>Proceed</strong> provides a rapid knockdown effect, with results visible within <strong>6-24 hours</strong> after application, depending on the target pest species and environmental conditions. You'll notice decreased pest activity shortly after application, with maximum efficacy reached within 48 hours."
      },
      {
        question: "Is Proceed safe to use on all crops?",
        answer: "<strong>Proceed</strong> is suitable for use on a wide range of crops including cotton, rice, vegetables, fruits, and pulses. However, we recommend conducting a small-scale trial on new or sensitive crop varieties before full-scale application. Always adhere to recommended dosage rates for each specific crop type."
      },
      {
        question: "How long does Proceed remain effective after application?",
        answer: "Under normal field conditions, <strong>Proceed</strong> provides effective pest control for <strong>14-21 days</strong> after application. The residual activity period may vary depending on environmental factors such as rainfall, temperature, and crop growth rate. Our advanced formulation includes technology that enhances resistance to wash-off, maintaining effectiveness even after light rainfall or irrigation."
      },
      {
        question: "What is the best time of day to apply Proceed?",
        answer: "For optimal results, apply <strong>Proceed</strong> during early morning or late afternoon when pest activity is typically higher and environmental conditions are more favorable. Avoid application during the hottest part of the day or when rain is expected within 4-6 hours of application. This timing ensures maximum contact with target pests and allows sufficient time for the product to dry on plant surfaces."
      },
      {
        question: "Can Proceed be mixed with other agricultural products?",
        answer: "<strong>Proceed</strong> is compatible with most commonly used pesticides, fungicides, and foliar fertilizers. However, we recommend conducting a small compatibility test before mixing with other products. Always add Proceed to the spray tank first, followed by other products. Do not mix with strongly alkaline products, as this may reduce effectiveness."
      }
    ];
    this.testimonials = [
      {
        text: "After struggling with resistant pests in my cotton fields, Proceed provided excellent control where other products had failed. Saw visible results within a day and crop yield increased significantly.",
        name: "Ramesh Patel",
        location: "Cotton Farmer, Gujarat",
        rating: 5,
        image: "assets/testimonials/farmer1.jpg"
      },
      {
        text: "Proceed's residual effect is impressive. One application protected my vegetable crops for nearly three weeks, even during the rainy season. This has reduced my overall pesticide costs.",
        name: "Lakshmi Devi",
        location: "Vegetable Grower, Karnataka",
        rating: 4.5,
        image: "assets/testimonials/farmer2.jpg"
      },
      {
        text: "I've been using Proceed for two seasons now on my rice paddies. The broad-spectrum control is remarkable - handles multiple pest issues with a single application, saving time and money.",
        name: "Sukhwinder Singh",
        location: "Rice Farmer, Punjab",
        rating: 5,
        image: "assets/testimonials/farmer3.jpg"
      }
    ];
  }
  ngOnInit() {
    this.setMetaData();
    this.setStructuredData();
    if (isPlatformBrowser(this.platformId)) {
      import_aos.default.init({
        duration: 800,
        easing: "ease-in-out",
        once: true
      });
    }
  }
  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }
  setMetaData() {
    if (this.transferState.hasKey(META_KEY))
      return;
    this.title.setTitle("Proceed - Advanced Insecticide | Harishree Crop Science");
    const metaTags = [
      { name: "description", content: "Proceed is an advanced agricultural insecticide offering rapid knockdown and long-lasting control against crop pests. Premium pest management solution for professional farmers." },
      { name: "keywords", content: "Proceed insecticide, agricultural insecticide, crop pest control, pest management, farming insecticide, agricultural pest control, Proceed agricultural medicine" },
      { property: "og:title", content: "Proceed - Premium Agricultural Insecticide" },
      { property: "og:description", content: "Advanced insecticide formulation for comprehensive pest management in agriculture. Features rapid knockdown and long-lasting residual control." },
      { property: "og:type", content: "product" },
      { property: "og:image", content: `${this.baseUrl}/assets/products/PROCEED.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: environment.metaDefaults.author }
    ];
    metaTags.forEach((tag) => this.meta.updateTag(tag));
    this.transferState.set(META_KEY, true);
  }
  setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY) || !isPlatformBrowser(this.platformId))
      return;
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
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
  navigateToProductDetails() {
  }
  static {
    this.\u0275fac = function ProceedComponent_Factory(t) {
      return new (t || _ProceedComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(TransferState), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProceedComponent, selectors: [["app-proceed"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 265, vars: 3, consts: [["itemscope", "", "itemtype", "https://schema.org/Product", 1, "product-page"], [1, "hero-section"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-aos", "fade-right", "itemprop", "name", 1, "product-title"], ["data-aos", "fade-right", "data-aos-delay", "100", 1, "product-tagline"], ["data-aos", "fade-right", "data-aos-delay", "200", 1, "product-description"], ["itemprop", "description"], ["data-aos", "fade-right", "data-aos-delay", "250", 1, "usps"], [1, "usp-tag"], [1, "fas", "fa-check-circle"], [1, "col-lg-6", "text-center"], ["data-aos", "zoom-in", 1, "product-image-container"], [1, "product-image-inner"], ["src", "assets/products/PROCEED.png", "alt", "Proceed Insecticide Product Bottle", "itemprop", "image", 1, "product-image"], [1, "benefits-section"], ["data-aos", "fade-up", 1, "section-title"], [1, "row"], [1, "col-md-6"], [1, "benefits-list"], ["data-aos", "fade-up", "data-aos-delay", "100"], [1, "benefit-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "benefit-content"], ["data-aos", "fade-up", "data-aos-delay", "200"], [1, "fas", "fa-shield-alt"], ["data-aos", "fade-up", "data-aos-delay", "300"], [1, "fas", "fa-spray-can"], ["data-aos", "fade-up", "data-aos-delay", "400"], [1, "fas", "fa-tint-slash"], ["data-aos", "fade-up", "data-aos-delay", "500"], [1, "fas", "fa-bugs"], [1, "pests-section"], [1, "pest-cards"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], ["id", "specifications", 1, "tech-specs-section"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "row"], [1, "col-lg-12"], [1, "specs-card"], [1, "specs-header"], [1, "fas", "fa-flask", "specs-icon"], [1, "specs-content"], [1, "spec-item"], [1, "spec-label"], [1, "spec-value"], [1, "usage-safety-section"], ["data-aos", "fade-up", 1, "section-title", "text-center"], ["data-aos", "fade-up", "data-aos-delay", "50", 1, "section-subtitle", "text-center"], [1, "row", "g-4", "mt-3"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-6"], [1, "usage-card"], [1, "usage-card-header"], [1, "icon-container"], [1, "usage-card-body"], [1, "usage-item"], [1, "usage-icon"], [1, "fas", "fa-flask"], [1, "usage-content"], [1, "fas", "fa-hand-holding-water"], [1, "fas", "fa-shower"], [1, "fas", "fa-clock"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-6"], [1, "safety-card"], [1, "safety-card-header"], [1, "safety-card-body"], [1, "safety-item"], [1, "safety-icon"], [1, "fas", "fa-user-shield"], [1, "safety-content"], [1, "fas", "fa-exclamation-triangle"], [1, "fas", "fa-box"], [1, "fas", "fa-child"], [1, "row", "mt-4"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-12"], [1, "disclaimer-box"], [1, "disclaimer-icon"], [1, "fas", "fa-info-circle"], [1, "disclaimer-content"], [1, "faq-section"], [1, "col-lg-10", "offset-lg-1"], ["id", "faqAccordion", "data-aos", "fade-up", "data-aos-delay", "100", 1, "accordion", "faq-accordion"], [4, "ngFor", "ngForOf"], [1, "testimonials-section"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-md-4"], [1, "testimonial-card"], [1, "testimonial-quote"], [1, "fas", "fa-quote-left"], [1, "testimonial-text"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-md-4"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-md-4"], [1, "cta-section"], ["data-aos", "zoom-in", 1, "cta-container"], ["href", "/contact-us", 1, "cta-button"], [1, "col-md-4"], ["data-aos", "flip-up", 1, "pest-card"], [1, "pest-icon"], [1, "fas", "fa-bug"], [1, "accordion-item"], [1, "accordion-header", 3, "id"], ["type", "button", "data-bs-toggle", "collapse"], ["data-bs-parent", "#faqAccordion", 3, "id"], [1, "accordion-body"], [3, "innerHTML"]], template: function ProceedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, "Advanced Insect Control Solution");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "p", 8)(11, "strong");
        \u0275\u0275text(12, "Proceed");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " is our premium insecticide formulation engineered for comprehensive agricultural pest management. Trusted by farmers across India, it delivers ");
        \u0275\u0275elementStart(14, "strong");
        \u0275\u0275text(15, "rapid knockdown action");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " within 6-24 hours and provides ");
        \u0275\u0275elementStart(17, "strong");
        \u0275\u0275text(18, "long-lasting residual protection");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " for up to 21 days against a broad spectrum of harmful crop pests including lepidopteran larvae, aphids, whiteflies, and soil insects. With its advanced dual-action formula of Chlorpyrifos 50% + Cypermethrin 5% EC, Proceed ensures superior crop protection, enhanced yields, and optimal return on investment for modern agriculture.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 9)(21, "span", 10);
        \u0275\u0275element(22, "i", 11);
        \u0275\u0275text(23, " Dual-Action Formula");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 10);
        \u0275\u0275element(25, "i", 11);
        \u0275\u0275text(26, " Rainfast Technology");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 10);
        \u0275\u0275element(28, "i", 11);
        \u0275\u0275text(29, " Trusted by Farmers");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 12)(31, "div", 13)(32, "div", 14);
        \u0275\u0275element(33, "img", 15);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(34, "section", 16)(35, "div", 2)(36, "h2", 17);
        \u0275\u0275text(37, "Key Benefits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 18)(39, "div", 19)(40, "ul", 20)(41, "li", 21)(42, "span", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(43, "svg", 23);
        \u0275\u0275element(44, "path", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(45, "div", 25)(46, "h3");
        \u0275\u0275text(47, "Rapid Knockdown Effect");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p");
        \u0275\u0275text(49, "Quick action against target pests for immediate results");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "li", 26)(51, "span", 22);
        \u0275\u0275element(52, "i", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 25)(54, "h3");
        \u0275\u0275text(55, "Long-lasting Residual Control");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p");
        \u0275\u0275text(57, "Extended protection that reduces the need for frequent applications");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "li", 28)(59, "span", 22);
        \u0275\u0275element(60, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 25)(62, "h3");
        \u0275\u0275text(63, "Better Crop Coverage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "p");
        \u0275\u0275text(65, "Advanced formulation ensures thorough coverage of plant surfaces");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(66, "div", 19)(67, "ul", 20)(68, "li", 30)(69, "span", 22);
        \u0275\u0275element(70, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 25)(72, "h3");
        \u0275\u0275text(73, "Enhanced Resistance to Wash-off");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "p");
        \u0275\u0275text(75, "Remains effective even after irrigation or light rainfall");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "li", 32)(77, "span", 22);
        \u0275\u0275element(78, "i", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 25)(80, "h3");
        \u0275\u0275text(81, "Broad Spectrum Pest Control");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "p");
        \u0275\u0275text(83, "Effective against multiple pest species with a single application");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(84, "section", 34)(85, "div", 2)(86, "h2", 17);
        \u0275\u0275text(87, "Target Pests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 35)(89, "div", 18);
        \u0275\u0275template(90, ProceedComponent_div_90_Template, 8, 3, "div", 36);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(91, "section", 37)(92, "div", 2)(93, "h2", 17);
        \u0275\u0275text(94, "Technical Specifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 38)(96, "div", 39)(97, "div", 40)(98, "div", 41);
        \u0275\u0275element(99, "i", 42);
        \u0275\u0275elementStart(100, "h3");
        \u0275\u0275text(101, "Product Information");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 43)(103, "div", 44)(104, "span", 45);
        \u0275\u0275text(105, "Active Ingredient:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "span", 46);
        \u0275\u0275text(107, "Chlorpyrifos 50% + Cypermethrin 5% EC");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div", 44)(109, "span", 45);
        \u0275\u0275text(110, "Formulation Type:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "span", 46);
        \u0275\u0275text(112, "Emulsifiable Concentrate (EC)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 44)(114, "span", 45);
        \u0275\u0275text(115, "Mode of Action:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "span", 46);
        \u0275\u0275text(117, "Contact, Stomach, and Respiratory");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "div", 44)(119, "span", 45);
        \u0275\u0275text(120, "Contents:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "span", 46);
        \u0275\u0275text(122, "250ml, 500ml, 1L bottle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "div", 44)(124, "span", 45);
        \u0275\u0275text(125, "Shelf Life:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "span", 46);
        \u0275\u0275text(127, "2 years from date of manufacture");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(128, "section", 47)(129, "div", 2)(130, "h2", 48);
        \u0275\u0275text(131, "Usage & Safety Guidelines");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "p", 49);
        \u0275\u0275text(133, "Follow these professional recommendations for optimal results and safe handling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "div", 50)(135, "div", 51)(136, "div", 52)(137, "div", 53)(138, "div", 54);
        \u0275\u0275element(139, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "h3");
        \u0275\u0275text(141, "Application Guidelines");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "div", 55)(143, "div", 56)(144, "div", 57);
        \u0275\u0275element(145, "i", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 59)(147, "h4");
        \u0275\u0275text(148, "Recommended Dosage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "p");
        \u0275\u0275text(150, "150-200 ml per acre, depending on pest pressure and crop type");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(151, "div", 56)(152, "div", 57);
        \u0275\u0275element(153, "i", 60);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "div", 59)(155, "h4");
        \u0275\u0275text(156, "Dilution Rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "p");
        \u0275\u0275text(158, "Mix with 200-250 liters of water per acre for optimal coverage");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(159, "div", 56)(160, "div", 57);
        \u0275\u0275element(161, "i", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "div", 59)(163, "h4");
        \u0275\u0275text(164, "Application Method");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "p");
        \u0275\u0275text(166, "Foliar spray using standard spray equipment with medium-sized droplets");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(167, "div", 56)(168, "div", 57);
        \u0275\u0275element(169, "i", 62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "div", 59)(171, "h4");
        \u0275\u0275text(172, "Timing & Frequency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "p");
        \u0275\u0275text(174, "Apply at first sign of pest infestation. Repeat after 14-21 days if necessary, depending on pest pressure");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(175, "div", 63)(176, "div", 64)(177, "div", 65)(178, "div", 54);
        \u0275\u0275element(179, "i", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "h3");
        \u0275\u0275text(181, "Safety Precautions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(182, "div", 66)(183, "div", 67)(184, "div", 68);
        \u0275\u0275element(185, "i", 69);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "div", 70)(187, "h4");
        \u0275\u0275text(188, "Personal Protection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "p");
        \u0275\u0275text(190, "Always wear protective equipment including gloves, face mask, eye protection, and appropriate clothing during handling and application");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(191, "div", 67)(192, "div", 68);
        \u0275\u0275element(193, "i", 71);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "div", 70)(195, "h4");
        \u0275\u0275text(196, "Health Precautions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "p");
        \u0275\u0275text(198, "Avoid contact with eyes, skin, and inhalation. Wash hands thoroughly after handling. Do not eat, drink or smoke when using this product");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(199, "div", 67)(200, "div", 68);
        \u0275\u0275element(201, "i", 72);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "div", 70)(203, "h4");
        \u0275\u0275text(204, "Storage & Disposal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "p");
        \u0275\u0275text(206, "Store in original container away from direct sunlight, food, and feed. Keep at room temperature in a well-ventilated area. Triple rinse empty containers before disposal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(207, "div", 67)(208, "div", 68);
        \u0275\u0275element(209, "i", 73);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(210, "div", 70)(211, "h4");
        \u0275\u0275text(212, "General Safety");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "p");
        \u0275\u0275text(214, "Keep out of reach of children and pets. Observe re-entry period of 24 hours after application. Follow local regulations for pesticide use");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(215, "div", 74)(216, "div", 75)(217, "div", 76)(218, "div", 77);
        \u0275\u0275element(219, "i", 78);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "div", 79)(221, "h4");
        \u0275\u0275text(222, "Important Notice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "p");
        \u0275\u0275text(224, "Always read the product label and follow instructions carefully. The information provided here is general guidance. For specific crops and local conditions, consult with your agricultural advisor. Optimal application methods may vary by region and crop.");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(225, "section", 80)(226, "div", 2)(227, "h2", 17);
        \u0275\u0275text(228, "Frequently Asked Questions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(229, "div", 18)(230, "div", 81)(231, "div", 82);
        \u0275\u0275template(232, ProceedComponent_ng_container_232_Template, 8, 15, "ng-container", 83);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(233, "section", 84)(234, "div", 2)(235, "h2", 17);
        \u0275\u0275text(236, "Farmer Testimonials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "div", 18)(238, "div", 85)(239, "div", 86)(240, "div", 87);
        \u0275\u0275element(241, "i", 88);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "p", 89);
        \u0275\u0275text(243, " After struggling with resistant pests in my cotton fields, Proceed provided excellent control where other products had failed. Saw visible results within a day and crop yield increased significantly. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(244, "div", 90)(245, "div", 86)(246, "div", 87);
        \u0275\u0275element(247, "i", 88);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(248, "p", 89);
        \u0275\u0275text(249, " Proceed's residual effect is impressive. One application protected my vegetable crops for nearly three weeks, even during the rainy season. This has reduced my overall pesticide costs. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(250, "div", 91)(251, "div", 86)(252, "div", 87);
        \u0275\u0275element(253, "i", 88);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(254, "p", 89);
        \u0275\u0275text(255, " I've been using Proceed for two seasons now on my rice paddies. The broad-spectrum control is remarkable - handles multiple pest issues with a single application, saving time and money. ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(256, "section", 92)(257, "div", 2)(258, "div", 93)(259, "h2");
        \u0275\u0275text(260, "Ready to enhance your crop protection?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(261, "p");
        \u0275\u0275text(262, "Contact us today to learn more about Proceed and our other premium agricultural solutions.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "a", 94);
        \u0275\u0275text(264, "Contact Us");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.product.name);
        \u0275\u0275advance(84);
        \u0275\u0275property("ngForOf", ctx.targetPests);
        \u0275\u0275advance(142);
        \u0275\u0275property("ngForOf", ctx.faqs);
      }
    }, dependencies: [CommonModule, NgForOf, RouterModule], styles: [`

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
.product-page[_ngcontent-%COMP%] {
  padding-top: 2rem;
  padding-bottom: 5rem;
  overflow-x: hidden;
}
.hero-section[_ngcontent-%COMP%] {
  padding: 3rem 0;
}
.hero-section[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      var(--primary) 0%,
      var(--primary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-weight: 800;
}
.hero-section[_ngcontent-%COMP%]   .product-tagline[_ngcontent-%COMP%] {
  color: var(--accent);
  letter-spacing: 0.5px;
}
.hero-section[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: var(--primary);
  font-weight: var(--font-bold);
}
.hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
.hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  border: 2px solid var(--primary);
  border-radius: 12px;
  z-index: 0;
  box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}
.hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: -5px;
  right: -5px;
  width: 60px;
  height: 60px;
  background: var(--accent);
  border-radius: 0 12px 0 60px;
  z-index: -1;
  transition: all 0.3s ease;
}
.hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]:hover::before {
  box-shadow: 0 15px 40px rgba(var(--primary-rgb), 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.9);
  transform: translateY(-5px);
}
.hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]:hover::after {
  transform: scale(1.1) translateY(-5px);
}
.hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%] {
  transform: scale(1.8);
}
.hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {
  max-width: 90%;
  max-height: 90%;
  transform: scale(1.7);
  z-index: 1;
  position: relative;
  transition: transform 0.3s ease;
  filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1));
  object-fit: contain;
}
.product-image-inner[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 85%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
.benefits-section[_ngcontent-%COMP%] {
  padding: 5rem 0;
  background-color: var(--primary-lightest);
}
.benefits-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  text-align: center;
  color: var(--primary);
  font-size: var(--text-4xl);
  margin-bottom: 3rem;
  font-weight: var(--font-bold);
  position: relative;
}
.benefits-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--accent);
  border-radius: 2px;
}
.benefits-section[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
}
.benefits-section[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  margin-bottom: 2rem;
}
.benefits-section[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .benefit-icon[_ngcontent-%COMP%] {
  flex: 0 0 60px;
  height: 60px;
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 1.5rem;
}
.benefits-section[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .benefit-content[_ngcontent-%COMP%] {
  flex: 1;
}
.benefits-section[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .benefit-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--secondary);
  font-size: var(--text-xl);
  margin-bottom: 0.5rem;
  font-weight: var(--font-semibold);
}
.benefits-section[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .benefit-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text);
  font-size: var(--text-base);
  line-height: 1.5;
}
.pests-section[_ngcontent-%COMP%] {
  padding: 5rem 0;
}
.pests-section[_ngcontent-%COMP%]   .pest-cards[_ngcontent-%COMP%] {
  margin-top: 3rem;
}
.pests-section[_ngcontent-%COMP%]   .pest-cards[_ngcontent-%COMP%]   .pest-card[_ngcontent-%COMP%] {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
}
.pests-section[_ngcontent-%COMP%]   .pest-cards[_ngcontent-%COMP%]   .pest-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}
.pests-section[_ngcontent-%COMP%]   .pest-cards[_ngcontent-%COMP%]   .pest-card[_ngcontent-%COMP%]   .pest-icon[_ngcontent-%COMP%] {
  width: 80px;
  height: 80px;
  background-color: var(--primary-lightest);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.pests-section[_ngcontent-%COMP%]   .pest-cards[_ngcontent-%COMP%]   .pest-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--primary);
  font-size: var(--text-xl);
  margin-bottom: 1rem;
  font-weight: var(--font-semibold);
}
.pests-section[_ngcontent-%COMP%]   .pest-cards[_ngcontent-%COMP%]   .pest-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text);
  font-size: var(--text-base);
  line-height: 1.6;
}
.usage-safety-section[_ngcontent-%COMP%] {
  padding: 5rem 0;
  background-color: rgba(var(--primary-rgb), 0.03);
  position: relative;
}
.usage-safety-section[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/assets/images/pattern-light.png);
  background-repeat: repeat;
  opacity: 0.1;
  z-index: 0;
}
.usage-safety-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
}
.usage-safety-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {
  color: var(--gray-600);
  font-size: var(--text-lg);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-card[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-card[_ngcontent-%COMP%] {
  height: 100%;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-card[_ngcontent-%COMP%]:hover, .usage-safety-section[_ngcontent-%COMP%]   .safety-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-card-header[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-card-header[_ngcontent-%COMP%] {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-card-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-card-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-card-header[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--primary-light) 0%,
      var(--primary) 100%);
  color: white;
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-card-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}
.usage-safety-section[_ngcontent-%COMP%]   .safety-card-header[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--secondary-light) 0%,
      var(--secondary) 100%);
  color: white;
}
.usage-safety-section[_ngcontent-%COMP%]   .safety-card-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-card-body[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-card-body[_ngcontent-%COMP%] {
  padding: 1.5rem;
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%]:last-child, .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%]   .usage-icon[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%]   .safety-icon[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%]   .usage-icon[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%]   .safety-icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%]   .usage-content[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%]   .safety-content[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%]   .usage-content[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%]   .safety-content[_ngcontent-%COMP%] {
  flex: 1;
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%]   .usage-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%]   .safety-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%]   .usage-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%]   .safety-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%]   .usage-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%]   .safety-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%]   .usage-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%]   .safety-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--gray-600);
}
.usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%]   .usage-icon[_ngcontent-%COMP%] {
  background-color: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
}
.usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%]   .safety-icon[_ngcontent-%COMP%] {
  background-color: rgba(var(--secondary-rgb), 0.1);
  color: var(--secondary);
}
.usage-safety-section[_ngcontent-%COMP%]   .disclaimer-box[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: rgba(var(--accent-rgb), 0.1);
  border: 1px solid var(--accent);
  border-radius: 12px;
  padding: 1.25rem;
}
.usage-safety-section[_ngcontent-%COMP%]   .disclaimer-box[_ngcontent-%COMP%]   .disclaimer-icon[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 0.25rem;
}
.usage-safety-section[_ngcontent-%COMP%]   .disclaimer-box[_ngcontent-%COMP%]   .disclaimer-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--gray-800);
}
.usage-safety-section[_ngcontent-%COMP%]   .disclaimer-box[_ngcontent-%COMP%]   .disclaimer-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--gray-600);
}
@media (max-width: 991px) {
  .usage-safety-section[_ngcontent-%COMP%]   .usage-card[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-card[_ngcontent-%COMP%] {
    margin-bottom: 1.5rem;
  }
}
@media (max-width: 767px) {
  .usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 0.75rem;
  }
  .usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%]   .usage-icon[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .usage-item[_ngcontent-%COMP%]   .safety-icon[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%]   .usage-icon[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%]   .safety-item[_ngcontent-%COMP%]   .safety-icon[_ngcontent-%COMP%] {
    width: 35px;
    height: 35px;
  }
  .usage-safety-section[_ngcontent-%COMP%]   .disclaimer-box[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .usage-safety-section[_ngcontent-%COMP%]   .disclaimer-box[_ngcontent-%COMP%]   .disclaimer-icon[_ngcontent-%COMP%] {
    margin-bottom: 0.5rem;
  }
}
.cta-section[_ngcontent-%COMP%] {
  padding: 5rem 0;
}
.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%] {
  background-color: var(--primary);
  color: white;
  border-radius: 15px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 15px 30px rgba(var(--primary-rgb), 0.2);
}
.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  margin-bottom: 1rem;
}
.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: var(--text-lg);
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
}
.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {
  display: inline-block;
  background-color: white;
  color: var(--primary);
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  text-decoration: none;
  transition: all 0.3s ease;
}
.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]:hover {
  background-color: var(--accent);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.tech-specs-section[_ngcontent-%COMP%] {
  padding: 5rem 0;
  background-color: white;
}
.tech-specs-section[_ngcontent-%COMP%]   .specs-card[_ngcontent-%COMP%] {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid var(--primary-lightest);
}
.tech-specs-section[_ngcontent-%COMP%]   .specs-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  border-color: var(--primary-light);
}
.tech-specs-section[_ngcontent-%COMP%]   .specs-card[_ngcontent-%COMP%]   .specs-header[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--primary) 0%,
      var(--secondary) 100%);
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
}
.tech-specs-section[_ngcontent-%COMP%]   .specs-card[_ngcontent-%COMP%]   .specs-header[_ngcontent-%COMP%]   .specs-icon[_ngcontent-%COMP%] {
  font-size: 2rem;
  margin-right: 1rem;
}
.tech-specs-section[_ngcontent-%COMP%]   .specs-card[_ngcontent-%COMP%]   .specs-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: white;
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
}
.tech-specs-section[_ngcontent-%COMP%]   .specs-card[_ngcontent-%COMP%]   .specs-content[_ngcontent-%COMP%] {
  padding: 1.5rem;
}
.tech-specs-section[_ngcontent-%COMP%]   .specs-card[_ngcontent-%COMP%]   .specs-content[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%] {
  display: flex;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--primary-lightest);
}
.tech-specs-section[_ngcontent-%COMP%]   .specs-card[_ngcontent-%COMP%]   .specs-content[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}
.tech-specs-section[_ngcontent-%COMP%]   .specs-card[_ngcontent-%COMP%]   .specs-content[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%]   .spec-label[_ngcontent-%COMP%] {
  flex: 0 0 40%;
  font-weight: var(--font-semibold);
  color: var(--primary);
}
.tech-specs-section[_ngcontent-%COMP%]   .specs-card[_ngcontent-%COMP%]   .specs-content[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%]   .spec-value[_ngcontent-%COMP%] {
  flex: 0 0 60%;
  color: var(--gray-700);
}
.faq-section[_ngcontent-%COMP%] {
  padding: 5rem 0;
  background-color: var(--primary-lightest);
}
.faq-section[_ngcontent-%COMP%]   .faq-accordion[_ngcontent-%COMP%] {
  margin-top: 2rem;
}
.faq-section[_ngcontent-%COMP%]   .faq-accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%] {
  border: none;
  margin-bottom: 1rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}
.faq-section[_ngcontent-%COMP%]   .faq-accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
.faq-section[_ngcontent-%COMP%]   .faq-accordion[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%] {
  padding: 1.5rem;
  font-weight: var(--font-semibold);
  color: var(--primary);
  background-color: white;
  box-shadow: none;
}
.faq-section[_ngcontent-%COMP%]   .faq-accordion[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%]:not(.collapsed) {
  color: var(--secondary);
  background-color: white;
  box-shadow: none;
}
.faq-section[_ngcontent-%COMP%]   .faq-accordion[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%]::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23009846'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transition: transform 0.3s ease;
}
.faq-section[_ngcontent-%COMP%]   .faq-accordion[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%]:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23529433'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.faq-section[_ngcontent-%COMP%]   .faq-accordion[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%] {
  padding: 0.5rem 1.5rem 1.5rem;
  background-color: white;
}
.faq-section[_ngcontent-%COMP%]   .faq-accordion[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text);
  line-height: 1.7;
  margin-bottom: 0;
}
.faq-section[_ngcontent-%COMP%]   .faq-accordion[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: var(--secondary);
  font-weight: var(--font-semibold);
}
.testimonials-section[_ngcontent-%COMP%] {
  padding: 5rem 0;
  background-color: white;
}
.testimonials-section[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid var(--primary-lightest);
  position: relative;
  margin-top: 1rem;
}
.testimonials-section[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  border-color: var(--accent);
}
.testimonials-section[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .testimonial-quote[_ngcontent-%COMP%] {
  color: var(--accent);
  font-size: 2rem;
  margin-bottom: 1rem;
}
.testimonials-section[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .testimonial-text[_ngcontent-%COMP%] {
  color: var(--text);
  font-size: var(--text-base);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
  min-height: 120px;
}
.testimonials-section[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.testimonials-section[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%] {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  border: 2px solid var(--primary);
}
.testimonials-section[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.testimonials-section[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  color: var(--primary);
  font-size: var(--text-base);
  margin-bottom: 0.25rem;
  font-weight: var(--font-semibold);
}
.testimonials-section[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--gray-700);
  font-size: var(--text-sm);
  margin-bottom: 0.5rem;
}
.testimonials-section[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {
  color: var(--accent);
  font-size: var(--text-sm);
}
@media (max-width: 991px) {
  .hero-section[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {
    font-size: var(--text-4xl);
  }
  .hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%] {
    width: 280px;
    height: 280px;
  }
  .hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {
    transform: scale(1.4);
  }
  .hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]:hover {
    transform: scale(1.5);
  }
  .benefits-section[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .benefit-icon[_ngcontent-%COMP%] {
    flex: 0 0 50px;
    height: 50px;
    font-size: 1.3rem;
  }
  .tech-specs-section[_ngcontent-%COMP%]   .specs-card[_ngcontent-%COMP%] {
    margin-bottom: 2rem;
  }
  .tech-specs-section[_ngcontent-%COMP%]   .specs-card[_ngcontent-%COMP%]:last-child {
    margin-bottom: 0;
  }
  .testimonial-card[_ngcontent-%COMP%] {
    margin-bottom: 2rem;
  }
  .testimonial-card[_ngcontent-%COMP%]:last-child {
    margin-bottom: 0;
  }
  .testimonial-card[_ngcontent-%COMP%]   .testimonial-text[_ngcontent-%COMP%] {
    min-height: auto;
  }
}
.pests-section[_ngcontent-%COMP%]   .pest-card[_ngcontent-%COMP%] {
  border-left: 4px solid var(--primary);
}
.pests-section[_ngcontent-%COMP%]   .pest-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}
.pests-section[_ngcontent-%COMP%]   .pest-card[_ngcontent-%COMP%]:hover   .pest-icon[_ngcontent-%COMP%] {
  background-color: var(--primary);
  color: white;
  transform: rotate(15deg);
}
@media (max-width: 767px) {
  .hero-section[_ngcontent-%COMP%] {
    padding: 2rem 0;
  }
  .hero-section[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {
    font-size: var(--text-3xl);
    text-align: center;
  }
  .hero-section[_ngcontent-%COMP%]   .product-tagline[_ngcontent-%COMP%] {
    font-size: var(--text-xl);
    text-align: center;
  }
  .hero-section[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {
    text-align: center;
  }
  .hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%] {
    width: 240px;
    height: 240px;
  }
  .hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {
    transform: scale(1.3);
  }
  .hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]:hover {
    transform: scale(1.4);
  }
  .section-title[_ngcontent-%COMP%] {
    font-size: var(--text-3xl) !important;
  }
  .benefits-section[_ngcontent-%COMP%], .pests-section[_ngcontent-%COMP%], .usage-safety-section[_ngcontent-%COMP%] {
    padding: 3rem 0;
  }
  .cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%] {
    padding: 2rem;
  }
  .cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: var(--text-2xl);
  }
  .tech-specs-section[_ngcontent-%COMP%], .faq-section[_ngcontent-%COMP%], .testimonials-section[_ngcontent-%COMP%] {
    padding: 3rem 0;
  }
  .specs-card[_ngcontent-%COMP%]   .specs-header[_ngcontent-%COMP%] {
    padding: 1.2rem;
  }
  .specs-card[_ngcontent-%COMP%]   .specs-header[_ngcontent-%COMP%]   .specs-icon[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .specs-card[_ngcontent-%COMP%]   .specs-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
    font-size: var(--text-lg);
  }
  .specs-card[_ngcontent-%COMP%]   .specs-content[_ngcontent-%COMP%] {
    padding: 1.2rem;
  }
  .specs-card[_ngcontent-%COMP%]   .specs-content[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .specs-card[_ngcontent-%COMP%]   .specs-content[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%]   .spec-label[_ngcontent-%COMP%], .specs-card[_ngcontent-%COMP%]   .specs-content[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%]   .spec-value[_ngcontent-%COMP%] {
    flex: 0 0 100%;
  }
  .specs-card[_ngcontent-%COMP%]   .specs-content[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%]   .spec-label[_ngcontent-%COMP%] {
    margin-bottom: 0.3rem;
  }
  .testimonial-card[_ngcontent-%COMP%] {
    padding: 1.5rem;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {
    max-width: 240px;
  }
}
.product-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 1.5rem;
}
.product-description[_ngcontent-%COMP%]   .usps[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}
.product-description[_ngcontent-%COMP%]   .usps[_ngcontent-%COMP%]   .usp-tag[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
  border-radius: 50px;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  transition: all 0.3s ease;
}
.product-description[_ngcontent-%COMP%]   .usps[_ngcontent-%COMP%]   .usp-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: var(--primary);
}
.product-description[_ngcontent-%COMP%]   .usps[_ngcontent-%COMP%]   .usp-tag[_ngcontent-%COMP%]:hover {
  background-color: var(--primary);
  color: white;
}
.product-description[_ngcontent-%COMP%]   .usps[_ngcontent-%COMP%]   .usp-tag[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {
  color: white;
}
@media (max-width: 768px) {
  .product-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: var(--text-base);
  }
  .product-description[_ngcontent-%COMP%]   .usps[_ngcontent-%COMP%] {
    gap: 0.75rem;
  }
  .product-description[_ngcontent-%COMP%]   .usps[_ngcontent-%COMP%]   .usp-tag[_ngcontent-%COMP%] {
    padding: 0.4rem 0.8rem;
    font-size: var(--text-xs);
  }
}
.product-page--detail[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%] {
  padding-top: 2.25rem;
}
.product-page--detail[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {
  transform: scale(1) !important;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.product-page--detail[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%] {
  transform: scale(1.03) !important;
}
.product-page--detail[_ngcontent-%COMP%]   .pack-card__cta[_ngcontent-%COMP%], .product-page--detail[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {
  min-height: 44px;
  touch-action: manipulation;
}
.product-page--detail[_ngcontent-%COMP%]   .product-brand-line[_ngcontent-%COMP%] {
  font-size: var(--text-sm);
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.35rem;
}
.product-page--detail[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {
  -webkit-text-fill-color: var(--primary);
  background: none;
}
.product-page--detail[_ngcontent-%COMP%]   .product-detail-cta[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
}
.product-page--detail[_ngcontent-%COMP%]   .product-detail-cta[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   .cta-button--outline[_ngcontent-%COMP%] {
  background: transparent !important;
  color: #fff !important;
  border: 2px solid rgba(255, 255, 255, 0.95) !important;
  box-shadow: none;
}
.product-page--detail[_ngcontent-%COMP%]   .product-detail-cta[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   .cta-button--outline[_ngcontent-%COMP%]:hover, .product-page--detail[_ngcontent-%COMP%]   .product-detail-cta[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]   .cta-button--outline[_ngcontent-%COMP%]:focus-visible {
  background: rgba(255, 255, 255, 0.18) !important;
  color: #fff !important;
  border-color: #fff !important;
  transform: translateY(-2px);
}
.product-pack-section[_ngcontent-%COMP%] {
  padding: 2.5rem 0 1rem;
  background:
    linear-gradient(
      180deg,
      rgba(var(--primary-rgb), 0.06) 0%,
      transparent 100%);
}
.pack-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 900px;
  margin: 1.5rem auto 0;
}
.pack-card[_ngcontent-%COMP%] {
  position: relative;
  border: 2px solid rgba(var(--primary-rgb), 0.2);
  border-radius: 12px;
  padding: 1.25rem 1rem;
  text-align: center;
  background: #fff;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  touch-action: manipulation;
}
.pack-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 12px 28px rgba(var(--primary-rgb), 0.12);
}
.pack-card--featured[_ngcontent-%COMP%] {
  border-color: var(--primary);
  box-shadow: 0 8px 24px rgba(var(--primary-rgb), 0.18);
}
.pack-card--featured[_ngcontent-%COMP%]::after {
  content: "Popular";
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fff;
  background: var(--primary);
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
}
.pack-card__volume[_ngcontent-%COMP%] {
  font-size: var(--text-lg);
  font-weight: 700;
  margin: 0 0 0.35rem;
  color: var(--text);
}
.pack-card__hint[_ngcontent-%COMP%] {
  font-size: var(--text-xs);
  color: var(--text-muted, #5c6c5c);
  margin: 0 0 0.75rem;
  line-height: 1.35;
}
.pack-card__cta[_ngcontent-%COMP%] {
  margin-top: auto;
  padding: 0.45rem 1rem;
  font-size: var(--text-sm);
  font-weight: 600;
  border-radius: 8px;
  background: var(--primary);
  color: #fff !important;
  text-decoration: none;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.pack-card__cta[_ngcontent-%COMP%]:hover {
  filter: brightness(1.05);
}
.dose-callout[_ngcontent-%COMP%] {
  margin-top: 1.75rem;
  padding: 1rem 1.25rem;
  border-radius: 10px;
  background: rgba(var(--primary-rgb), 0.08);
  color: var(--text);
  font-size: var(--text-base);
}
.product-benefit-card[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid rgba(var(--primary-rgb), 0.15);
  height: 100%;
  background: #fff;
}
.product-benefit-card__icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--primary-rgb), 0.12);
  color: var(--primary);
  font-size: 1.25rem;
}
.product-applications[_ngcontent-%COMP%] {
  padding: 0;
  overflow: hidden;
}
.product-applications__band[_ngcontent-%COMP%] {
  padding: 3.5rem 0;
  background:
    linear-gradient(
      165deg,
      rgba(var(--primary-rgb), 0.07) 0%,
      rgba(255, 255, 255, 0.96) 45%,
      #f8faf8 100%);
  border-top: 1px solid rgba(var(--primary-rgb), 0.1);
  border-bottom: 1px solid rgba(var(--primary-rgb), 0.08);
}
.product-applications__title[_ngcontent-%COMP%] {
  margin-bottom: 0.75rem;
}
.product-applications__lead[_ngcontent-%COMP%] {
  text-align: left !important;
  max-width: 48rem;
  margin-left: 0 !important;
  margin-right: auto;
  line-height: 1.65;
}
.product-applications__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
  margin-top: 2rem;
}
@media (min-width: 576px) {
  .product-applications__grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 992px) {
  .product-applications__grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}
.product-app-tile[_ngcontent-%COMP%] {
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(var(--primary-rgb), 0.14);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.product-app-tile[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 36px rgba(var(--primary-rgb), 0.14);
}
.product-app-tile__head[_ngcontent-%COMP%] {
  height: 6px;
  background:
    linear-gradient(
      90deg,
      #c41e3a 0%,
      var(--primary) 55%,
      #1a7a4c 100%);
}
.product-app-tile__body[_ngcontent-%COMP%] {
  padding: 1.35rem 1.25rem 1.5rem;
}
.product-app-tile__icon[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(var(--primary-rgb), 0.12);
  color: var(--primary);
  font-size: 1.35rem;
  box-shadow: inset 0 0 0 1px rgba(var(--primary-rgb), 0.15);
}
.product-moa.mode-of-action-section[_ngcontent-%COMP%] {
  padding-top: 3.5rem;
  padding-bottom: 4rem;
  background: #fff;
}
.product-moa__steps[_ngcontent-%COMP%] {
  background: #fff;
  border: 1px solid rgba(var(--primary-rgb), 0.12);
  border-radius: 16px;
  padding: 0.5rem 1.1rem;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);
}
.product-moa__step[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  padding: 1.15rem 0;
  border-bottom: 1px solid rgba(var(--primary-rgb), 0.1);
}
.product-moa__step[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.product-moa__step-num[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: var(--text-lg);
  color: #fff;
  background:
    linear-gradient(
      135deg,
      var(--primary) 0%,
      #1a6b42 100%);
}
.usage-safety-shell[_ngcontent-%COMP%] {
  border-radius: 18px;
  background:
    linear-gradient(
      180deg,
      rgba(var(--primary-rgb), 0.05) 0%,
      rgba(255, 255, 255, 0.96) 60%);
  border: 1px solid rgba(var(--primary-rgb), 0.12);
  padding: 1.25rem;
}
.usage-safety-shell__intro[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}
.usage-pill[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 40px;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: #fff;
  color: var(--primary);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  font-size: var(--text-xs);
  font-weight: 700;
}
.usage-safety-panel[_ngcontent-%COMP%] {
  height: 100%;
  border-radius: 14px;
  border: 1px solid rgba(var(--primary-rgb), 0.14);
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}
.usage-safety-panel__head[_ngcontent-%COMP%] {
  padding: 1.1rem 1rem 0.95rem;
  border-bottom: 1px solid rgba(var(--primary-rgb), 0.12);
}
.usage-safety-list[_ngcontent-%COMP%] {
  padding: 0.65rem 1rem 1rem;
}
.usage-safety-list__item[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.8rem;
  padding: 0.85rem 0;
  border-bottom: 1px dashed rgba(var(--primary-rgb), 0.18);
}
.usage-safety-list__num[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(var(--primary-rgb), 0.13);
  color: var(--primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-sm);
  font-weight: 800;
}
.results-section.product-results[_ngcontent-%COMP%] {
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
  background:
    linear-gradient(
      180deg,
      #fbfcfb 0%,
      #fff 100%);
}
.product-highlight-card[_ngcontent-%COMP%] {
  padding: 1.35rem 1.25rem;
  border-radius: 12px;
  background: rgba(var(--primary-rgb), 0.07);
  height: 100%;
  border: 1px solid rgba(var(--primary-rgb), 0.12);
}
@media (max-width: 576px) {
  .pack-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr 1fr;
  }
}
/*# sourceMappingURL=proceed.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProceedComponent, { className: "ProceedComponent", filePath: "src\\app\\pages\\all-products\\proceed\\proceed.component.ts", lineNumber: 20 });
})();
export {
  ProceedComponent
};
//# sourceMappingURL=chunk-Q2PRMMDW.mjs.map
