import {
  require_aos
} from "./chunk-RUMA6SQV.js";
import {
  RouterModule
} from "./chunk-4MSA62PL.js";
import {
  environment
} from "./chunk-TP5SVJPG.js";
import {
  CommonModule,
  Meta,
  NgForOf,
  PLATFORM_ID,
  Title,
  TransferState,
  __toESM,
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
} from "./chunk-FE7VCITN.js";

// src/app/pages/all-products/super-fs/super-fs.component.ts
var import_aos = __toESM(require_aos());
function SuperFsComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 120)(2, "div", 121);
    \u0275\u0275element(3, "i", 122);
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
function SuperFsComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123)(1, "div", 124)(2, "div", 125)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 126)(8, "div", 127)(9, "span", 128);
    \u0275\u0275text(10, "Dosage:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 129);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 127)(14, "span", 128);
    \u0275\u0275text(15, "Target Pests:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 129);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const crop_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275attribute("data-aos-delay", 100 * i_r4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(crop_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(crop_r3.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(crop_r3.dosage);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(crop_r3.targetPests);
  }
}
function SuperFsComponent_div_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 131);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 132)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.description);
  }
}
function SuperFsComponent_ng_container_294_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 133)(2, "h3", 134)(3, "button", 135);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 136)(6, "div", 137);
    \u0275\u0275element(7, "p", 138);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const faq_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "heading", i_r8, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("accordion-button ", i_r8 !== 0 ? "collapsed" : "", "");
    \u0275\u0275attribute("data-bs-target", "#collapse" + i_r8)("aria-expanded", i_r8 === 0 ? "true" : "false")("aria-controls", "collapse" + i_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r7.question, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("accordion-collapse collapse ", i_r8 === 0 ? "show" : "", "");
    \u0275\u0275property("id", "collapse" + i_r8);
    \u0275\u0275attribute("aria-labelledby", "heading" + i_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", faq_r7.answer, \u0275\u0275sanitizeHtml);
  }
}
function SuperFsComponent_div_300_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 140)(2, "div", 141);
    \u0275\u0275element(3, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 143);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const testimonial_r9 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", testimonial_r9.text, " ");
  }
}
function SuperFsComponent_tr_319_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 144);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.feature);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.superFs);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.standard);
  }
}
var META_KEY = makeStateKey("SUPER_FS_META");
var STRUCTURED_DATA_KEY = makeStateKey("SUPER_FS_STRUCTURED_DATA");
var SuperFsComponent = class _SuperFsComponent {
  constructor(meta, title, transferState, platformId) {
    this.meta = meta;
    this.title = title;
    this.transferState = transferState;
    this.platformId = platformId;
    this.baseUrl = environment.baseUrl;
    this.product = {
      name: "Super FS",
      image: "assets/products/SUPER-FS.png",
      description: "Professional-grade agricultural insecticide for comprehensive pest management"
    };
    this.targetPests = [
      {
        name: "Stem Borers",
        description: "Highly effective against rice stem borers, sugarcane borers, and maize stem borers"
      },
      {
        name: "Bollworms",
        description: "Controls American bollworm, pink bollworm, and spotted bollworm in cotton"
      },
      {
        name: "Sucking Pests",
        description: "Eliminates aphids, thrips, whiteflies, and leafhoppers across multiple crops"
      },
      {
        name: "Soil Insects",
        description: "Manages termites, white grubs, and other soil-dwelling pests affecting crops"
      },
      {
        name: "Storage Pests",
        description: "Protects against weevils, beetles, and moths in stored grains and seeds"
      },
      {
        name: "Vector Pests",
        description: "Controls disease-carrying insects that transmit viral infections to crops"
      }
    ];
    this.recommendedCrops = [
      {
        name: "Rice",
        image: "assets/crops/rice.jpg",
        description: "Protects against stem borers, leaf folders, and plant hoppers",
        dosage: "100ml per acre",
        targetPests: "Stem borers, Leaf folder, Brown plant hopper"
      },
      {
        name: "Cotton",
        image: "assets/crops/cotton.jpg",
        description: "Controls bollworms, whiteflies, and thrips affecting cotton yield",
        dosage: "125ml per acre",
        targetPests: "American bollworm, Pink bollworm, Whitefly, Thrips"
      },
      {
        name: "Sugarcane",
        image: "assets/crops/sugarcane.jpg",
        description: "Manages early shoot borers and top shoot borers in sugarcane",
        dosage: "125ml per acre",
        targetPests: "Early shoot borer, Top shoot borer, Termites"
      },
      {
        name: "Vegetables",
        image: "assets/crops/vegetables.jpg",
        description: "Protects vegetable crops from various damaging pests",
        dosage: "100ml per acre",
        targetPests: "Diamond back moth, Fruit borer, Aphids, Whitefly"
      },
      {
        name: "Maize/Corn",
        image: "assets/crops/maize.jpg",
        description: "Effective against stem borers and armyworms in maize crops",
        dosage: "100ml per acre",
        targetPests: "Stem borer, Fall armyworm, Cutworm"
      },
      {
        name: "Pulses",
        image: "assets/crops/pulses.jpg",
        description: "Controls pod borers and aphids affecting pulse crops",
        dosage: "100ml per acre",
        targetPests: "Pod borer, Spotted pod borer, Aphids"
      }
    ];
    this.modeOfAction = [
      {
        title: "Contact Action",
        description: "Super FS acts immediately on contact with target pests, disrupting their nervous system and stopping feeding damage within hours."
      },
      {
        title: "Stomach Action",
        description: "When ingested by pests, the active ingredient causes rapid paralysis and death, preventing further crop damage."
      },
      {
        title: "Systemic Translocation",
        description: "Super FS is absorbed by plant tissues and translocated throughout the plant, protecting new growth and controlling hidden pests."
      },
      {
        title: "Persistent Protection",
        description: "The advanced formulation creates a protective barrier that maintains efficacy for up to 25 days, even in challenging weather conditions."
      }
    ];
    this.comparisonData = [
      {
        feature: "Active Ingredient",
        superFs: "Fipronil 5% SC (Premium Grade)",
        standard: "Various combinations, often lower concentrations"
      },
      {
        feature: "Knockdown Speed",
        superFs: "4-8 hours",
        standard: "24-48 hours"
      },
      {
        feature: "Protection Duration",
        superFs: "Up to 25 days",
        standard: "7-14 days"
      },
      {
        feature: "Weather Resistance",
        superFs: "Rainfast within 2 hours, maintains efficacy after rainfall",
        standard: "Often requires reapplication after rainfall"
      },
      {
        feature: "Spectrum of Control",
        superFs: "40+ pest species including resistant varieties",
        standard: "Limited spectrum, often requiring multiple products"
      },
      {
        feature: "Mode of Action",
        superFs: "Triple-action: Contact, Stomach, and Systemic",
        standard: "Typically single or dual-action"
      },
      {
        feature: "Systemic Protection",
        superFs: "Yes - protects new growth",
        standard: "Usually limited or none"
      }
    ];
    this.applicationDetails = {
      dosage: "100-125 ml per acre",
      method: "Foliar spray using standard equipment with fine to medium droplet size",
      timing: "Apply at first sign of pest infestation"
    };
    this.safetyPrecautions = [
      "Always wear appropriate protective equipment during handling and application",
      "Avoid contact with skin, eyes, and clothing. Wash thoroughly after handling",
      "Store in original container in a cool, dry place away from direct sunlight",
      "Keep out of reach of children, pets, and livestock"
    ];
    this.technicalSpecs = {
      productInfo: [
        { label: "Active Ingredient", value: "Fipronil 5% SC" },
        { label: "Formulation Type", value: "Suspension Concentrate (SC)" },
        { label: "Mode of Action", value: "Contact, Stomach, and Systemic" },
        { label: "Contents", value: "100ml, 250ml, 500ml bottle" },
        { label: "Shelf Life", value: "3 years from date of manufacture" }
      ],
      applicationDetails: [
        { label: "Recommended Crops", value: "Cotton, Rice, Sugarcane, Maize, Vegetables, Fruits" },
        { label: "Application Rate", value: "100-125 ml per acre" },
        { label: "Water Requirement", value: "200-300 liters per acre" },
        { label: "Pre-Harvest Interval", value: "21-28 days (crop dependent)" },
        { label: "Re-Entry Period", value: "48 hours after application" }
      ]
    };
    this.faqs = [
      {
        question: "What makes Super FS different from other insecticides?",
        answer: "<strong>Super FS</strong> stands out from other insecticides due to its <strong>triple-action formula</strong> combining contact, stomach, and systemic modes of action. Unlike conventional products that offer only 10-14 days of protection, Super FS provides industry-leading <strong>25-day residual activity</strong>, even in adverse weather conditions. Its unique Fipronil 5% SC formulation penetrates plant tissues to protect new growth and control even hidden pests, making it significantly more effective than standard insecticides."
      },
      {
        question: "How quickly does Super FS work against pests?",
        answer: "<strong>Super FS</strong> begins working immediately upon contact with target pests. Users typically observe visible results within <strong>4-8 hours</strong> after application, with complete control achieved within 24-48 hours. The rapid knockdown effect prevents further crop damage while the residual action provides continuous protection against reinfestation. For soil-dwelling pests, noticeable results may take 2-3 days as the product moves through the soil profile."
      },
      {
        question: "Is Super FS safe for beneficial insects like honeybees?",
        answer: "When used according to label directions, <strong>Super FS</strong> minimizes impact on beneficial insects. We recommend applying in the <strong>evening or early morning</strong> when pollinators are less active. The product becomes rainfast within 2 hours of application and is then primarily absorbed into plant tissues, reducing exposure to beneficial insects. Always follow integrated pest management practices and avoid application during peak flowering periods when possible."
      },
      {
        question: "Can Super FS be used in organic farming?",
        answer: "<strong>Super FS</strong> is not certified for organic farming as it contains synthetic active ingredients. However, its highly targeted action and low application rates make it an excellent choice for <strong>integrated pest management (IPM) programs</strong> where minimal chemical intervention is desired. For organic operations, we offer alternative biopesticide solutions that can be recommended by our agricultural experts."
      },
      {
        question: "Can Super FS be mixed with other agricultural products?",
        answer: "<strong>Super FS</strong> is compatible with most commonly used pesticides, fungicides, and foliar fertilizers. However, we recommend conducting a small compatibility test before tank mixing. Do not mix with strongly alkaline products as this may reduce effectiveness. For best results, add Super FS to the spray tank first, followed by other products. Our technical support team can provide specific recommendations for your crop and pest management program."
      }
    ];
    this.testimonials = [
      {
        text: "I switched to Super FS after struggling with resistant stem borers in my rice fields. The results were remarkable - complete control within 24 hours and no reinfestation for nearly a month. My yield increased by 22% compared to last season."
      },
      {
        text: "Super FS saved my cotton crop when bollworms threatened to devastate my fields. One application protected my entire crop through the critical flowering and boll formation stages. The systemic protection is unmatched."
      },
      {
        text: "As a professional sugarcane farmer, I've tried many insecticides, but Super FS stands apart. Its weather resistance is exceptional - even after heavy monsoon rains, it continued protecting my crop from borers. Worth every rupee invested."
      }
    ];
    this.yieldData = {
      labels: ["Cotton", "Rice", "Sugarcane", "Vegetables", "Pulses"],
      datasets: [
        {
          label: "Super FS",
          data: [22, 18, 25, 20, 15],
          backgroundColor: "rgba(46, 124, 88, 0.7)"
        },
        {
          label: "Competitor Products",
          data: [15, 11, 16, 13, 10],
          backgroundColor: "rgba(153, 153, 153, 0.7)"
        }
      ]
    };
    this.efficacyData = {
      labels: ["Bollworms", "Stem Borers", "Sucking Pests", "Soil Insects", "Storage Pests"],
      datasets: [
        {
          label: "Super FS",
          data: [95, 98, 92, 94, 90],
          backgroundColor: "rgba(46, 124, 88, 0.7)"
        },
        {
          label: "Leading Competitor",
          data: [82, 85, 80, 78, 75],
          backgroundColor: "rgba(153, 153, 153, 0.7)"
        }
      ]
    };
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
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }
  setMetaData() {
    if (this.transferState.hasKey(META_KEY))
      return;
    this.title.setTitle("Super FS - Professional Agricultural Insecticide | Harishree Crop Science");
    const metaTags = [
      { name: "description", content: "Super FS is a professional-grade agricultural insecticide with triple-action formula offering ultra-fast knockdown and 25-day residual protection against crop pests. The ultimate solution for modern farmers." },
      { name: "keywords", content: "Super FS, Super FS insecticide, agricultural insecticide, Fipronil insecticide, crop pest control, agricultural pest management, super fs agricular insecticide, super-fs, fipronil 5% SC" },
      { property: "og:title", content: "Super FS - Professional-Grade Agricultural Insecticide" },
      { property: "og:description", content: "Advanced triple-action insecticide formulation for comprehensive pest management in agriculture. Features ultra-fast knockdown and extended 25-day residual protection." },
      { property: "og:type", content: "product" },
      { property: "og:image", content: `${this.baseUrl}/assets/products/SUPER FS.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
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
      "name": "Super FS",
      "image": `${this.baseUrl}/assets/products/SUPER FS.png`,
      "description": "Professional-grade agricultural insecticide with triple-action formula offering ultra-fast knockdown and 25-day residual protection against a comprehensive range of crop pests.",
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
        "ratingValue": "4.9",
        "reviewCount": "175"
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
    this.\u0275fac = function SuperFsComponent_Factory(t) {
      return new (t || _SuperFsComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(TransferState), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperFsComponent, selectors: [["app-super-fs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 332, vars: 7, consts: [["itemscope", "", "itemtype", "https://schema.org/Product", 1, "product-page"], [1, "hero-section"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-aos", "fade-right", "itemprop", "name", 1, "product-title"], ["data-aos", "fade-right", "data-aos-delay", "100", 1, "product-tagline"], ["data-aos", "fade-right", "data-aos-delay", "200", 1, "product-description"], ["itemprop", "description"], ["data-aos", "fade-right", "data-aos-delay", "250", 1, "usps"], [1, "usp-tag"], [1, "fas", "fa-check-circle"], [1, "col-lg-6", "text-center"], ["data-aos", "zoom-in", 1, "product-image-container"], [1, "product-image-inner"], ["src", "assets/products/SUPER FS.png", "alt", "Super FS Agricultural Insecticide Product Bottle", "itemprop", "image", 1, "product-image"], [1, "benefits-section"], ["data-aos", "fade-up", 1, "section-title"], [1, "row"], [1, "col-md-6"], [1, "benefits-list"], ["data-aos", "fade-up", "data-aos-delay", "100"], [1, "benefit-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "benefit-content"], ["data-aos", "fade-up", "data-aos-delay", "200"], [1, "fas", "fa-shield-alt"], ["data-aos", "fade-up", "data-aos-delay", "300"], [1, "fas", "fa-spray-can"], ["data-aos", "fade-up", "data-aos-delay", "400"], [1, "fas", "fa-tint-slash"], ["data-aos", "fade-up", "data-aos-delay", "500"], [1, "fas", "fa-bugs"], [1, "pests-section"], [1, "pest-cards"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], ["id", "applications", 1, "crops-section"], ["data-aos", "fade-up", "data-aos-delay", "50", 1, "section-subtitle", "text-center"], [1, "row", "g-4", "mt-4"], ["class", "col-md-4", "data-aos", "fade-up", 4, "ngFor", "ngForOf"], ["id", "specifications", 1, "tech-specs-section"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "row"], [1, "col-lg-12"], [1, "specs-card"], [1, "specs-header"], [1, "fas", "fa-flask", "specs-icon"], [1, "specs-content"], [1, "spec-item"], [1, "spec-label"], [1, "spec-value"], [1, "mode-of-action-section"], [1, "row", "align-items-center", "mt-5"], ["data-aos", "fade-right", 1, "col-lg-6"], [1, "action-illustration"], [1, "action-image-inner"], ["src", "assets/products/SUPER FS.png", "alt", "Super FS Mode of Action Illustration", 1, "product-image"], ["data-aos", "fade-left", 1, "col-lg-6"], [1, "action-steps"], ["class", "action-step", 4, "ngFor", "ngForOf"], [1, "usage-safety-section"], ["data-aos", "fade-up", 1, "section-title", "text-center"], [1, "row", "g-4", "mt-3"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-6"], [1, "usage-card"], [1, "usage-card-header"], [1, "icon-container"], [1, "usage-card-body"], [1, "usage-item"], [1, "usage-icon"], [1, "fas", "fa-flask"], [1, "usage-content"], [1, "fas", "fa-hand-holding-water"], [1, "fas", "fa-shower"], [1, "fas", "fa-clock"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-6"], [1, "safety-card"], [1, "safety-card-header"], [1, "safety-card-body"], [1, "safety-item"], [1, "safety-icon"], [1, "fas", "fa-user-shield"], [1, "safety-content"], [1, "fas", "fa-hand-sparkles"], [1, "fas", "fa-warehouse"], [1, "fas", "fa-recycle"], [1, "results-section"], [1, "row", "mt-5"], ["data-aos", "fade-up", 1, "col-lg-6"], [1, "results-card"], [1, "results-title"], [1, "chart-container"], ["src", "assets/charts/yield-improvement.svg", "alt", "Yield Improvement Chart comparing Super FS to competitor products", 1, "chart-svg"], [1, "results-description"], ["src", "assets/charts/pest-control-efficacy.svg", "alt", "Pest Control Efficacy Chart showing Super FS performance vs leading competitors", 1, "chart-svg"], [1, "row", "mt-4"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-12"], [1, "results-highlight-card"], [1, "col-md-3"], [1, "highlight-icon"], [1, "fas", "fa-award"], [1, "col-md-9"], [1, "highlight-list"], [1, "highlight-value"], [1, "faq-section"], [1, "col-lg-10", "offset-lg-1"], ["id", "faqAccordion", "data-aos", "fade-up", "data-aos-delay", "100", 1, "accordion", "faq-accordion"], [4, "ngFor", "ngForOf"], [1, "testimonials-section"], ["class", "col-md-4", "data-aos", "fade-up", "data-aos-delay", "100", 4, "ngFor", "ngForOf"], [1, "comparison-section"], ["data-aos", "fade-up", "data-aos-delay", "150", 1, "comparison-table-container"], [1, "table-responsive"], [1, "comparison-table"], [1, "cta-section"], ["data-aos", "zoom-in", 1, "cta-container"], [1, "cta-title"], [1, "cta-text"], ["href", "/contact-us", 1, "cta-button"], [1, "col-md-4"], ["data-aos", "flip-up", 1, "pest-card"], [1, "pest-icon"], [1, "fas", "fa-bug"], ["data-aos", "fade-up", 1, "col-md-4"], [1, "crop-card"], [1, "crop-content"], [1, "crop-details"], [1, "crop-detail"], [1, "detail-label"], [1, "detail-value"], [1, "action-step"], [1, "step-number"], [1, "step-content"], [1, "accordion-item"], [1, "accordion-header", 3, "id"], ["type", "button", "data-bs-toggle", "collapse"], ["data-bs-parent", "#faqAccordion", 3, "id"], [1, "accordion-body"], [3, "innerHTML"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-md-4"], [1, "testimonial-card"], [1, "testimonial-quote"], [1, "fas", "fa-quote-left"], [1, "testimonial-text"], [1, "super-fs-value"]], template: function SuperFsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, "Professional-Grade Agricultural Insecticide");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "p", 8)(11, "strong");
        \u0275\u0275text(12, "Super FS");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " is our premium high-performance insecticide specifically formulated for modern agricultural pest management. Trusted by professional farmers nationwide, it delivers ");
        \u0275\u0275elementStart(14, "strong");
        \u0275\u0275text(15, "superior knockdown action");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " within 4-8 hours and provides ");
        \u0275\u0275elementStart(17, "strong");
        \u0275\u0275text(18, "extended residual protection");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " for up to 25 days against a comprehensive range of harmful pests including bollworms, stem borers, aphids, thrips, and soil insects. With its advanced triple-action formula, Super FS ensures exceptional crop protection in all environmental conditions, maximizing yields and safeguarding your investment.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 9)(21, "span", 10);
        \u0275\u0275element(22, "i", 11);
        \u0275\u0275text(23, " Triple-Action Formula");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 10);
        \u0275\u0275element(25, "i", 11);
        \u0275\u0275text(26, " Weather-Resistant Technology");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 10);
        \u0275\u0275element(28, "i", 11);
        \u0275\u0275text(29, " Expert Recommended");
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
        \u0275\u0275text(47, "Ultra-Fast Knockdown Effect");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p");
        \u0275\u0275text(49, "Eliminates target pests within 4-8 hours for immediate crop protection");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "li", 26)(51, "span", 22);
        \u0275\u0275element(52, "i", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 25)(54, "h3");
        \u0275\u0275text(55, "Extended Residual Protection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p");
        \u0275\u0275text(57, "Industry-leading 25-day protection period reduces application frequency");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "li", 28)(59, "span", 22);
        \u0275\u0275element(60, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 25)(62, "h3");
        \u0275\u0275text(63, "Superior Plant Penetration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "p");
        \u0275\u0275text(65, "Systemic action ensures protection of new growth and hard-to-reach plant parts");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(66, "div", 19)(67, "ul", 20)(68, "li", 30)(69, "span", 22);
        \u0275\u0275element(70, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 25)(72, "h3");
        \u0275\u0275text(73, "Advanced Weather Protection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "p");
        \u0275\u0275text(75, "Remains effective even after heavy rainfall or irrigation");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "li", 32)(77, "span", 22);
        \u0275\u0275element(78, "i", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 25)(80, "h3");
        \u0275\u0275text(81, "Complete Spectrum Pest Control");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "p");
        \u0275\u0275text(83, "Controls over 40 different pest species with a single application");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(84, "section", 34)(85, "div", 2)(86, "h2", 17);
        \u0275\u0275text(87, "Target Pests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 35)(89, "div", 18);
        \u0275\u0275template(90, SuperFsComponent_div_90_Template, 8, 3, "div", 36);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(91, "section", 37)(92, "div", 2)(93, "h2", 17);
        \u0275\u0275text(94, "Recommended Crops & Applications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "p", 38);
        \u0275\u0275text(96, "Super FS is specifically formulated for these high-value crops");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 39);
        \u0275\u0275template(98, SuperFsComponent_div_98_Template, 18, 5, "div", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(99, "section", 41)(100, "div", 2)(101, "h2", 17);
        \u0275\u0275text(102, "Technical Specifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "div", 42)(104, "div", 43)(105, "div", 44)(106, "div", 45);
        \u0275\u0275element(107, "i", 46);
        \u0275\u0275elementStart(108, "h3");
        \u0275\u0275text(109, "Product Information");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 47)(111, "div", 48)(112, "span", 49);
        \u0275\u0275text(113, "Active Ingredient:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "span", 50);
        \u0275\u0275text(115, "Fipronil 5% SC");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div", 48)(117, "span", 49);
        \u0275\u0275text(118, "Formulation Type:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "span", 50);
        \u0275\u0275text(120, "Suspension Concentrate (SC)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "div", 48)(122, "span", 49);
        \u0275\u0275text(123, "Mode of Action:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "span", 50);
        \u0275\u0275text(125, "Contact, Stomach, and Systemic");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "div", 48)(127, "span", 49);
        \u0275\u0275text(128, "Contents:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "span", 50);
        \u0275\u0275text(130, "100ml, 250ml, 500ml bottle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "div", 48)(132, "span", 49);
        \u0275\u0275text(133, "Shelf Life:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "span", 50);
        \u0275\u0275text(135, "3 years from date of manufacture");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(136, "section", 51)(137, "div", 2)(138, "h2", 17);
        \u0275\u0275text(139, "How Super FS Works");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "p", 38);
        \u0275\u0275text(141, "Understanding the triple-action mechanism that makes Super FS so effective");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "div", 52)(143, "div", 53)(144, "div", 54)(145, "div", 55);
        \u0275\u0275element(146, "img", 56);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(147, "div", 57)(148, "div", 58);
        \u0275\u0275template(149, SuperFsComponent_div_149_Template, 8, 3, "div", 59);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(150, "section", 60)(151, "div", 2)(152, "h2", 61);
        \u0275\u0275text(153, "Usage & Safety Guidelines");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "p", 38);
        \u0275\u0275text(155, "Follow these professional recommendations for optimal results and safe handling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "div", 62)(157, "div", 63)(158, "div", 64)(159, "div", 65)(160, "div", 66);
        \u0275\u0275element(161, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "h3");
        \u0275\u0275text(163, "Application Guidelines");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(164, "div", 67)(165, "div", 68)(166, "div", 69);
        \u0275\u0275element(167, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "div", 71)(169, "h4");
        \u0275\u0275text(170, "Recommended Dosage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "p");
        \u0275\u0275text(172, "100-125 ml per acre, depending on pest pressure and crop type");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(173, "div", 68)(174, "div", 69);
        \u0275\u0275element(175, "i", 72);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "div", 71)(177, "h4");
        \u0275\u0275text(178, "Dilution Rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "p");
        \u0275\u0275text(180, "Mix with 200-300 liters of water per acre for optimal coverage");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(181, "div", 68)(182, "div", 69);
        \u0275\u0275element(183, "i", 73);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "div", 71)(185, "h4");
        \u0275\u0275text(186, "Application Method");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "p");
        \u0275\u0275text(188, "Foliar spray using standard equipment with fine to medium droplet size");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(189, "div", 68)(190, "div", 69);
        \u0275\u0275element(191, "i", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "div", 71)(193, "h4");
        \u0275\u0275text(194, "Timing & Frequency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "p");
        \u0275\u0275text(196, "Apply at first sign of pest infestation. Single application typically sufficient for 25 days");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(197, "div", 75)(198, "div", 76)(199, "div", 77)(200, "div", 66);
        \u0275\u0275element(201, "i", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "h3");
        \u0275\u0275text(203, "Safety Precautions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(204, "div", 78)(205, "div", 79)(206, "div", 80);
        \u0275\u0275element(207, "i", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "div", 82)(209, "h4");
        \u0275\u0275text(210, "Personal Protection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "p");
        \u0275\u0275text(212, "Wear appropriate protective equipment including gloves, face mask, and eye protection");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(213, "div", 79)(214, "div", 80);
        \u0275\u0275element(215, "i", 83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "div", 82)(217, "h4");
        \u0275\u0275text(218, "Handling Precautions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(219, "p");
        \u0275\u0275text(220, "Avoid contact with skin, eyes, and clothing. Wash hands thoroughly after handling");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(221, "div", 79)(222, "div", 80);
        \u0275\u0275element(223, "i", 84);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "div", 82)(225, "h4");
        \u0275\u0275text(226, "Storage Instructions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(227, "p");
        \u0275\u0275text(228, "Store in original container in a cool, dry place away from direct sunlight and foodstuffs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(229, "div", 79)(230, "div", 80);
        \u0275\u0275element(231, "i", 85);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "div", 82)(233, "h4");
        \u0275\u0275text(234, "Disposal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(235, "p");
        \u0275\u0275text(236, "Triple rinse empty containers and dispose of according to local regulations");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(237, "section", 86)(238, "div", 2)(239, "h2", 17);
        \u0275\u0275text(240, "Proven Results");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(241, "p", 38);
        \u0275\u0275text(242, "Field trial data demonstrating Super FS effectiveness");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(243, "div", 87)(244, "div", 88)(245, "div", 89)(246, "h3", 90);
        \u0275\u0275text(247, "Yield Improvement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(248, "div", 91);
        \u0275\u0275element(249, "img", 92);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "p", 93);
        \u0275\u0275text(251, "Average yield increase across multiple crops when using Super FS compared to untreated controls and standard treatments.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(252, "div", 63)(253, "div", 89)(254, "h3", 90);
        \u0275\u0275text(255, "Pest Control Efficacy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(256, "div", 91);
        \u0275\u0275element(257, "img", 94);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(258, "p", 93);
        \u0275\u0275text(259, "Percentage pest control effectiveness against major crop pests compared to leading competitor products.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(260, "div", 95)(261, "div", 96)(262, "div", 97)(263, "div", 3)(264, "div", 98)(265, "div", 99);
        \u0275\u0275element(266, "i", 100);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(267, "div", 101)(268, "h3");
        \u0275\u0275text(269, "Super FS Performance Highlights");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(270, "ul", 102)(271, "li")(272, "span", 103);
        \u0275\u0275text(273, "22%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(274, " average crop yield increase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(275, "li")(276, "span", 103);
        \u0275\u0275text(277, "95%+");
        \u0275\u0275elementEnd();
        \u0275\u0275text(278, " pest control efficacy within 24 hours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(279, "li")(280, "span", 103);
        \u0275\u0275text(281, "25");
        \u0275\u0275elementEnd();
        \u0275\u0275text(282, " days of residual protection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(283, "li")(284, "span", 103);
        \u0275\u0275text(285, "40+");
        \u0275\u0275elementEnd();
        \u0275\u0275text(286, " pest species controlled");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(287, "section", 104)(288, "div", 2)(289, "h2", 17);
        \u0275\u0275text(290, "Frequently Asked Questions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(291, "div", 18)(292, "div", 105)(293, "div", 106);
        \u0275\u0275template(294, SuperFsComponent_ng_container_294_Template, 8, 15, "ng-container", 107);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(295, "section", 108)(296, "div", 2)(297, "h2", 17);
        \u0275\u0275text(298, "Farmer Testimonials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(299, "div", 18);
        \u0275\u0275template(300, SuperFsComponent_div_300_Template, 6, 1, "div", 109);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(301, "section", 110)(302, "div", 2)(303, "h2", 17);
        \u0275\u0275text(304, "Why Choose Super FS?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(305, "p", 38);
        \u0275\u0275text(306, "See how Super FS compares to standard insecticides");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(307, "div", 111)(308, "div", 112)(309, "table", 113)(310, "thead")(311, "tr")(312, "th");
        \u0275\u0275text(313, "Feature");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(314, "th");
        \u0275\u0275text(315, "Super FS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(316, "th");
        \u0275\u0275text(317, "Standard Insecticides");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(318, "tbody");
        \u0275\u0275template(319, SuperFsComponent_tr_319_Template, 7, 3, "tr", 107);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(320, "section", 114)(321, "div", 2)(322, "div", 115)(323, "h2", 116);
        \u0275\u0275text(324, "Ready to Transform Your Pest Management Strategy?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(325, "p", 117);
        \u0275\u0275text(326, "Discover how Super FS can help protect your crops and maximize your yields");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(327, "a", 118);
        \u0275\u0275text(328, "Find a Distributor");
        \u0275\u0275elementEnd();
        \u0275\u0275text(329, " \xA0 ");
        \u0275\u0275elementStart(330, "a", 118);
        \u0275\u0275text(331, "Contact Our Experts");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.product.name);
        \u0275\u0275advance(84);
        \u0275\u0275property("ngForOf", ctx.targetPests);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.recommendedCrops);
        \u0275\u0275advance(51);
        \u0275\u0275property("ngForOf", ctx.modeOfAction);
        \u0275\u0275advance(145);
        \u0275\u0275property("ngForOf", ctx.faqs);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.testimonials);
        \u0275\u0275advance(19);
        \u0275\u0275property("ngForOf", ctx.comparisonData);
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
.crops-section[_ngcontent-%COMP%] {
  padding: 5rem 0;
  background-color: rgba(var(--primary-rgb), 0.03);
}
.crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%] {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}
.crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%]   .crop-image[_ngcontent-%COMP%] {
  height: 200px;
  overflow: hidden;
}
.crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%]   .crop-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%]   .crop-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {
  transform: scale(1.05);
}
.crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%]   .crop-content[_ngcontent-%COMP%] {
  padding: 1.5rem;
}
.crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%]   .crop-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--primary);
  font-size: var(--text-xl);
  margin-bottom: 0.75rem;
  font-weight: var(--font-semibold);
}
.crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%]   .crop-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text);
  margin-bottom: 1rem;
  font-size: var(--text-base);
  line-height: 1.6;
}
.crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%]   .crop-content[_ngcontent-%COMP%]   .crop-details[_ngcontent-%COMP%] {
  margin-top: 1rem;
}
.crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%]   .crop-content[_ngcontent-%COMP%]   .crop-details[_ngcontent-%COMP%]   .crop-detail[_ngcontent-%COMP%] {
  display: flex;
  margin-bottom: 0.5rem;
}
.crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%]   .crop-content[_ngcontent-%COMP%]   .crop-details[_ngcontent-%COMP%]   .crop-detail[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {
  font-weight: var(--font-medium);
  color: var(--secondary);
  min-width: 100px;
}
.crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%]   .crop-content[_ngcontent-%COMP%]   .crop-details[_ngcontent-%COMP%]   .crop-detail[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {
  color: var(--text);
}
.mode-of-action-section[_ngcontent-%COMP%] {
  padding: 5rem 0;
}
.mode-of-action-section[_ngcontent-%COMP%]   .action-illustration[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
.mode-of-action-section[_ngcontent-%COMP%]   .action-illustration[_ngcontent-%COMP%]::before {
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
.mode-of-action-section[_ngcontent-%COMP%]   .action-illustration[_ngcontent-%COMP%]::after {
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
.mode-of-action-section[_ngcontent-%COMP%]   .action-illustration[_ngcontent-%COMP%]:hover::before {
  box-shadow: 0 15px 40px rgba(var(--primary-rgb), 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.9);
  transform: translateY(-5px);
}
.mode-of-action-section[_ngcontent-%COMP%]   .action-illustration[_ngcontent-%COMP%]:hover::after {
  transform: scale(1.1) translateY(-5px);
}
.mode-of-action-section[_ngcontent-%COMP%]   .action-illustration[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%] {
  transform: scale(1.8);
}
.mode-of-action-section[_ngcontent-%COMP%]   .action-illustration[_ngcontent-%COMP%]   .action-image-inner[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 85%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  z-index: 1;
}
.mode-of-action-section[_ngcontent-%COMP%]   .action-illustration[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {
  max-width: 90%;
  max-height: 90%;
  transform: scale(1.7);
  position: relative;
  transition: transform 0.3s ease;
  filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1));
  object-fit: contain;
  z-index: 1;
}
.mode-of-action-section[_ngcontent-%COMP%]   .action-steps[_ngcontent-%COMP%]   .action-step[_ngcontent-%COMP%] {
  display: flex;
  margin-bottom: 2rem;
}
.mode-of-action-section[_ngcontent-%COMP%]   .action-steps[_ngcontent-%COMP%]   .action-step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  font-weight: var(--font-bold);
  font-size: 1.25rem;
  margin-right: 1rem;
  flex-shrink: 0;
}
.mode-of-action-section[_ngcontent-%COMP%]   .action-steps[_ngcontent-%COMP%]   .action-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--primary);
  font-size: var(--text-xl);
  margin-bottom: 0.5rem;
  font-weight: var(--font-semibold);
}
.mode-of-action-section[_ngcontent-%COMP%]   .action-steps[_ngcontent-%COMP%]   .action-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text);
  line-height: 1.6;
}
.results-section[_ngcontent-%COMP%] {
  padding: 5rem 0;
  background-color: rgba(var(--primary-rgb), 0.03);
}
.results-section[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%] {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  padding: 2rem;
  height: 100%;
}
.results-section[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .results-title[_ngcontent-%COMP%] {
  color: var(--primary);
  font-size: var(--text-xl);
  margin-bottom: 1.5rem;
  font-weight: var(--font-semibold);
  text-align: center;
}
.results-section[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {
  height: 300px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.results-section[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-svg[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 100%;
  transition: transform 0.3s ease;
}
.results-section[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-svg[_ngcontent-%COMP%]:hover {
  transform: scale(1.02);
}
.results-section[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .results-description[_ngcontent-%COMP%] {
  color: var(--text);
  text-align: center;
  font-size: var(--text-sm);
}
.results-section[_ngcontent-%COMP%]   .results-highlight-card[_ngcontent-%COMP%] {
  background-color: var(--primary);
  color: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.3);
  padding: 2rem;
  margin-top: 1rem;
}
.results-section[_ngcontent-%COMP%]   .results-highlight-card[_ngcontent-%COMP%]   .highlight-icon[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}
.results-section[_ngcontent-%COMP%]   .results-highlight-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: var(--text-2xl);
  margin-bottom: 1rem;
  font-weight: var(--font-semibold);
}
.results-section[_ngcontent-%COMP%]   .results-highlight-card[_ngcontent-%COMP%]   .highlight-list[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
}
.results-section[_ngcontent-%COMP%]   .results-highlight-card[_ngcontent-%COMP%]   .highlight-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  margin-bottom: 0.75rem;
  font-size: var(--text-lg);
}
.results-section[_ngcontent-%COMP%]   .results-highlight-card[_ngcontent-%COMP%]   .highlight-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .highlight-value[_ngcontent-%COMP%] {
  font-weight: var(--font-bold);
  margin-right: 0.5rem;
}
.comparison-section[_ngcontent-%COMP%] {
  padding: 5rem 0;
}
.comparison-section[_ngcontent-%COMP%]   .comparison-table-container[_ngcontent-%COMP%] {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  padding: 2rem;
  margin-top: 2rem;
}
.comparison-section[_ngcontent-%COMP%]   .comparison-table-container[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
.comparison-section[_ngcontent-%COMP%]   .comparison-table-container[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .comparison-section[_ngcontent-%COMP%]   .comparison-table-container[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}
.comparison-section[_ngcontent-%COMP%]   .comparison-table-container[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  background-color: rgba(var(--primary-rgb), 0.05);
  color: var(--primary);
  font-weight: var(--font-semibold);
}
.comparison-section[_ngcontent-%COMP%]   .comparison-table-container[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {
  border-bottom: none;
}
.comparison-section[_ngcontent-%COMP%]   .comparison-table-container[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%]   .super-fs-value[_ngcontent-%COMP%] {
  color: var(--primary);
  font-weight: var(--font-medium);
}
@media (max-width: 991.98px) {
  .mode-of-action-section[_ngcontent-%COMP%]   .action-illustration[_ngcontent-%COMP%] {
    margin-bottom: 3rem;
  }
  .results-section[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%] {
    margin-bottom: 2rem;
  }
  .results-section[_ngcontent-%COMP%]   .results-highlight-card[_ngcontent-%COMP%]   .highlight-icon[_ngcontent-%COMP%] {
    margin-bottom: 1.5rem;
  }
}
@media (max-width: 767.98px) {
  .crops-section[_ngcontent-%COMP%]   .crop-card[_ngcontent-%COMP%] {
    margin-bottom: 2rem;
  }
  .comparison-section[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .comparison-section[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
}
[_nghost-%COMP%] {
  display: block;
}
[_nghost-%COMP%]   [data-aos][_ngcontent-%COMP%] {
  will-change: transform, opacity;
}
[_nghost-%COMP%]   img[_ngcontent-%COMP%] {
  max-width: 100%;
}
[_nghost-%COMP%]   .product-image-container[_ngcontent-%COMP%] {
  contain: layout paint;
}
/*# sourceMappingURL=super-fs.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperFsComponent, { className: "SuperFsComponent", filePath: "src\\app\\pages\\all-products\\super-fs\\super-fs.component.ts", lineNumber: 20 });
})();
export {
  SuperFsComponent
};
//# sourceMappingURL=chunk-FRMGPCTH.js.map
