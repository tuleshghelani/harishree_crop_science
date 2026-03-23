import "./chunk-4MSA62PL.js";
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
  isPlatformBrowser,
  makeStateKey2 as makeStateKey,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl
} from "./chunk-FE7VCITN.js";

// src/app/pages/about/about.component.ts
function AboutComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "h3", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function AboutComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "div", 68)(3, "span", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h4", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 71);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275attribute("data-aos", "fade-up")("data-aos-delay", i_r3 * 100);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(i_r3 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.desc);
  }
}
function AboutComponent_ng_container_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 72)(2, "div", 73)(3, "div", 74);
    \u0275\u0275element(4, "img", 75)(5, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 77)(7, "h3", 78);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 79);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 80);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "link", 81);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const member_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275attribute("data-aos", "fade-up")("data-aos-delay", i_r5 * 100);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", member_r4.image, \u0275\u0275sanitizeUrl)("alt", member_r4.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(member_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r4.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r4.description);
  }
}
function AboutComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275element(1, "div", 83);
    \u0275\u0275elementStart(2, "div", 84)(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4", 86);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 87);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const isOdd_r7 = ctx.odd;
    \u0275\u0275classProp("inverted", isOdd_r7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r6.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.description);
  }
}
var META_KEY = makeStateKey("about-meta-data");
var STRUCTURED_DATA_KEY = makeStateKey("about-structured-data");
var AboutComponent = class _AboutComponent {
  constructor(meta, title, transferState, platformId) {
    this.meta = meta;
    this.title = title;
    this.transferState = transferState;
    this.platformId = platformId;
    this.baseUrl = environment.baseUrl;
    this.foundingYear = 2024;
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.yearsExperience = this.currentYear - this.foundingYear;
    this.milestones = [
      {
        year: "2024",
        title: "Seeds of Innovation",
        description: "Founded with a vision to revolutionize Indian agriculture through sustainable solutions."
      },
      {
        year: "2024",
        title: "R&D Excellence",
        description: "Established a state-of-the-art research facility to develop proprietary crop protection formulas."
      },
      {
        year: "2025",
        title: "Global Footprint",
        description: "Expanded operations to international markets, exporting quality agro-chemicals."
      },
      {
        year: "2025",
        title: "Green Revolution 2.0",
        description: "Launched a comprehensive range of eco-friendly bio-fertilizers and organic pesticides."
      }
    ];
    this.values = [
      {
        icon: "assets/icons/innovation.svg",
        // Placeholder path, using inline SVG in HTML
        title: "Innovation",
        desc: "Pioneering advanced agricultural technologies for better yield."
      },
      {
        icon: "assets/icons/sustainability.svg",
        title: "Sustainability",
        desc: "Committed to eco-friendly practices that protect our soil and future."
      },
      {
        icon: "assets/icons/quality.svg",
        title: "Quality",
        desc: "Rigorous testing ensures only the best products reach our farmers."
      },
      {
        icon: "assets/icons/integrity.svg",
        title: "Integrity",
        desc: "Building trust through transparent and ethical business practices."
      }
    ];
    this.whyChooseUs = [
      {
        title: "Expert Research",
        desc: "Backed by a dedicated team of agricultural scientists and researchers."
      },
      {
        title: "Premium Quality",
        desc: "ISO 9001:2015 certified manufacturing processes ensure superior product efficacy."
      },
      {
        title: "Farmer First",
        desc: "Solutions focused on maximizing farmer profitability and crop health."
      },
      {
        title: "Eco-Friendly",
        desc: "Safe for the environment, beneficial for the crops."
      }
    ];
    this.stats = [
      { number: `${this.yearsExperience}+`, label: "Years Experience" },
      { number: "50+", label: "Products" },
      { number: "1000+", label: "Happy Farmers" },
      // Example- placeholder
      { number: "20+", label: "Regions Served" }
    ];
    this.team = [
      {
        name: "Vishal Dobariya",
        position: "Founder & CEO",
        image: "assets/about-us/Vishal Dobariya.png",
        description: "A visionary leader with over a decade of expertise in agricultural science. Pioneering sustainable farming solutions and driving the company's mission for a greener future."
      },
      {
        name: "Sagar Pambhar",
        position: "Director of Operations",
        image: "assets/about-us/Sagar Pambhar.png",
        description: "Expert in agricultural innovation and supply chain management. Ensuring the seamless delivery of premium bio-fertilizers to farmers across the nation."
      },
      {
        name: "Nilesh Dobariya",
        position: "Director of R&D",
        image: "assets/about-us/Nilesh Dobariya.png",
        description: "Leading strategic initiatives in eco-friendly pesticides. Specialized in product development and quality assurance to enhance farm productivity."
      }
    ];
  }
  ngOnInit() {
    this.setMetaData();
    this.setStructuredData();
  }
  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }
  setMetaData() {
    if (this.transferState.hasKey(META_KEY)) {
      return;
    }
    const title = "About Harishree Crop Science | Leading Agricultural & Crop Solutions";
    const description = "Harishree Crop Science: Empowering farmers with premium crop protection, bio-fertilizers, and sustainable agricultural solutions since 2024. Discover our journey and vision.";
    const keywords = "Harishree Crop Science, Agricultural Solutions, Organic Farming, Crop Protection, Bio-fertilizers, Pesticides Manufacturer, Sustainable Agriculture, Indian Agriculture, Farming Technology";
    this.title.setTitle(title);
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: environment.metaDefaults.author || "Harishree Crop Science" },
      { name: "robots", content: "index, follow" },
      // Open Graph / Facebook
      { property: "og:site_name", content: "Harishree Crop Science" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${this.baseUrl}/about-us` },
      { property: "og:image", content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      // Additional SEO props
      { name: "theme-color", content: "#009846" },
      // Primary Green
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" }
    ];
    metaTags.forEach((tag) => this.meta.updateTag(tag));
    this.transferState.set(META_KEY, true);
  }
  setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY)) {
      return;
    }
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Harishree Crop Science",
      "alternateName": "Harishree Crops",
      "url": `${this.baseUrl}`,
      "logo": `${this.baseUrl}/assets/logo/HARISHREE.png`,
      "foundingDate": "2024",
      "description": "Leading provider of sustainable agricultural solutions, bio-fertilizers, and crop protection products.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "gu"]
      },
      "sameAs": [
        "https://www.facebook.com/harishreecropscience",
        "https://www.instagram.com/harishreecropscience",
        "https://www.linkedin.com/company/harishree-crop-science"
      ],
      "founders": [
        {
          "@type": "Person",
          "name": "Vishal Dobariya",
          "jobTitle": "Founder & CEO"
        }
      ],
      "employee": this.team.map((member) => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.position,
        "image": `${this.baseUrl}/${member.image}`
      }))
    };
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
  static {
    this.\u0275fac = function AboutComponent_Factory(t) {
      return new (t || _AboutComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(TransferState), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 102, vars: 6, consts: [["itemscope", "", "itemtype", "http://schema.org/Organization", 1, "about-page"], [1, "about-hero"], [1, "hero-content"], ["data-aos", "fade-down", 1, "badge", "rounded-pill", "bg-accent", "text-primary", "mb-3"], ["data-aos", "fade-up"], ["data-aos", "fade-up", "data-aos-delay", "200"], [1, "hero-bg"], ["viewBox", "0 0 1440 160", "preserveAspectRatio", "none"], ["fill", "#ffffff", "d", "M0,48L48,56C96,64,192,80,288,80C384,80,480,64,576,56C672,48,768,48,864,56C960,64,1056,80,1152,80C1248,80,1344,64,1392,56L1440,48L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"], ["id", "who-we-are", 1, "section-padding", "who-we-are"], [1, "container"], [1, "row", "align-items-center"], ["data-aos", "fade-right", 1, "col-lg-6", "mb-5", "mb-lg-0"], [1, "image-stack"], [1, "img-wrapper", "main-img"], ["src", "assets/about-us/field-research.jpg", "alt", "Agricultural Research Field", 1, "img-fluid", "rounded", "shadow-lg"], [1, "experience-badge", "bounce-animate"], [1, "years"], [1, "text"], ["data-aos", "fade-left", 1, "col-lg-6", "ps-lg-5"], [1, "text-primary", "text-uppercase", "letter-spacing-2", "mb-2"], [1, "section-heading", "mb-4"], [1, "text-primary"], [1, "text-muted", "mb-4", "lead"], [1, "text-muted", "mb-5"], [1, "row", "g-4", "stats-row"], ["class", "col-6 col-sm-6", 4, "ngFor", "ngForOf"], [1, "section-padding", "vision-mission"], [1, "row", "g-4"], ["data-aos", "fade-up", 1, "col-md-6"], [1, "card", "h-100", "border-0", "shadow-sm", "hover-lift", "card-vision"], [1, "card-body", "p-4", "p-lg-5"], [1, "icon-box", "mb-4", "bg-primary-10", "text-primary"], [1, "fas", "fa-eye", "fa-2x"], ["width", "40", "height", "40", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"], ["cx", "12", "cy", "12", "r", "3"], [1, "card-title", "font-weight-bold", "mb-3"], [1, "card-text", "text-muted"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-md-6"], [1, "card", "h-100", "border-0", "shadow-sm", "hover-lift", "card-mission"], [1, "icon-box", "mb-4", "bg-secondary-10", "text-secondary"], ["d", "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"], [1, "quality-policy", "py-5", "bg-primary", "text-white", "position-relative", "overflow-hidden"], [1, "bg-pattern", "opacity-10", "position-absolute", "w-100", "h-100", "top-0", "start-0"], [1, "container", "position-relative", "z-1", "text-center"], [1, "row", "justify-content-center"], ["data-aos", "zoom-in", 1, "col-lg-8"], [1, "font-weight-bold", "mb-3"], [1, "lead", "mb-0", "opacity-90"], [1, "section-padding", "why-choose-us"], ["data-aos", "fade-up", 1, "text-center", "mb-5"], [1, "text-primary", "text-uppercase", "letter-spacing-2"], [1, "font-weight-bold"], ["class", "col-md-6 col-lg-3", 4, "ngFor", "ngForOf"], [1, "section-padding", "team-section"], [1, "row", "justify-content-center", "g-4"], [4, "ngFor", "ngForOf"], [1, "section-padding", "journey-section"], [1, "timeline-clean"], [1, "timeline-items"], ["class", "timeline-item", "data-aos", "fade-up", 3, "inverted", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-6"], [1, "stat-item"], [1, "font-weight-bold", "text-dark", "mb-0"], [1, "text-muted", "small", "text-uppercase", "mb-0"], [1, "col-md-6", "col-lg-3"], [1, "feature-card", "text-center", "p-4", "rounded", "bg-white", "border", "h-100", "transition-hover"], [1, "icon-circle", "mb-4", "mx-auto", "bg-primary-lightest", "text-primary", "d-flex", "align-items-center", "justify-content-center", 2, "width", "60px", "height", "60px", "border-radius", "50%"], [1, "h4", "mb-0"], [1, "h5", "font-weight-bold", "mb-3"], [1, "text-muted", "small", "mb-0"], [1, "col-md-6", "col-lg-4"], ["itemscope", "", "itemtype", "https://schema.org/Person", 1, "team-card-premium", "bg-white", "rounded", "overflow-hidden", "shadow-sm", "h-100", "position-relative", "group-hover"], [1, "img-wrapper", "position-relative", "overflow-hidden"], ["itemprop", "image", 1, "img-fluid", "w-100", 2, "height", "350px", "object-fit", "cover", "object-position", "top", 3, "src", "alt"], [1, "overlay-gradient", "position-absolute", "w-100", "h-100", "top-0", "start-0", "opacity-0", "transition-opacity"], [1, "card-body", "p-4", "text-center", "position-relative", "z-1"], ["itemprop", "name", 1, "h5", "font-weight-bold", "mb-1"], ["itemprop", "jobTitle", 1, "text-primary", "small", "text-uppercase", "mb-3"], ["itemprop", "description", 1, "text-muted", "small", "mb-0"], ["itemprop", "worksFor", "href", \u0275\u0275trustConstantResourceUrl`https://harishreecropscience.com`], ["data-aos", "fade-up", 1, "timeline-item"], [1, "timeline-badge", "bg-primary"], [1, "timeline-content", "shadow-sm", "bg-white", "p-4", "rounded", "relative"], [1, "date-badge", "bg-primary-lightest", "text-primary", "font-weight-bold", "px-3", "py-1", "rounded-pill", "mb-3", "d-inline-block"], [1, "font-weight-bold", "h5"], [1, "text-muted", "mb-0", "small"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "Harishree Crop Science");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5)(8, "strong");
        \u0275\u0275text(9, "Pioneering the future of Sustainable Agriculture with innovation, integrity, and excellence.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 7);
        \u0275\u0275element(12, "path", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "section", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14);
        \u0275\u0275element(19, "img", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 16)(21, "span", 17);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 18);
        \u0275\u0275text(24, "Years of");
        \u0275\u0275element(25, "br");
        \u0275\u0275text(26, "Excellence");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 19)(28, "h6", 20);
        \u0275\u0275text(29, "Who We Are");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "h2", 21);
        \u0275\u0275text(31, "Empowering Farmers with ");
        \u0275\u0275elementStart(32, "span", 22);
        \u0275\u0275text(33, "Next-Gen Solutions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "p", 23);
        \u0275\u0275text(35, "Harishree Crop Science is a premier manufacturer of agricultural inputs, dedicated to enhancing crop productivity and soil health.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p", 24);
        \u0275\u0275text(37, "We specialize in developing high-performance bio-fertilizers, organic pesticides, and plant growth regulators. Our products are the result of rigorous research and a deep understanding of Indian farming conditions, ensuring that every farmer gets the best yield with minimal environmental impact.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 25);
        \u0275\u0275template(39, AboutComponent_div_39_Template, 6, 2, "div", 26);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(40, "section", 27)(41, "div", 10)(42, "div", 28)(43, "div", 29)(44, "div", 30)(45, "div", 31)(46, "div", 32);
        \u0275\u0275element(47, "i", 33);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(48, "svg", 34);
        \u0275\u0275element(49, "path", 35)(50, "circle", 36);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(51, "h3", 37);
        \u0275\u0275text(52, "Our Vision");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 38);
        \u0275\u0275text(54, "To be the global leader in sustainable agricultural innovation, creating a world where farming is profitable, eco-friendly, and capable of feeding the future.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(55, "div", 39)(56, "div", 40)(57, "div", 31)(58, "div", 41);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(59, "svg", 34);
        \u0275\u0275element(60, "path", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(61, "h3", 37);
        \u0275\u0275text(62, "Our Mission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p", 38);
        \u0275\u0275text(64, "To engineer superior crop protection capability and deliver high-quality, cost-effective agricultural solutions that empower the farming community.");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(65, "section", 43);
        \u0275\u0275element(66, "div", 44);
        \u0275\u0275elementStart(67, "div", 45)(68, "div", 46)(69, "div", 47)(70, "h2", 48);
        \u0275\u0275text(71, "Quality Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p", 49);
        \u0275\u0275text(73, '"We are committed to total customer satisfaction by providing high-quality agricultural inputs ensuring on-time delivery and continual improvement in our processes and products."');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(74, "section", 50)(75, "div", 10)(76, "div", 51)(77, "h6", 52);
        \u0275\u0275text(78, "Why Choose Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "h2", 53);
        \u0275\u0275text(80, "The Harishree Advantage");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 28);
        \u0275\u0275template(82, AboutComponent_div_82_Template, 9, 5, "div", 54);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(83, "section", 55)(84, "div", 10)(85, "div", 51)(86, "h6", 52);
        \u0275\u0275text(87, "Leadership");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "h2", 53);
        \u0275\u0275text(89, "Meet Our Visionaries");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 56);
        \u0275\u0275template(91, AboutComponent_ng_container_91_Template, 14, 7, "ng-container", 57);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "section", 58)(93, "div", 10)(94, "div", 51)(95, "h6", 52);
        \u0275\u0275text(96, "Our History");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "h2", 53);
        \u0275\u0275text(98, "A Decade of Growth");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 59)(100, "div", 60);
        \u0275\u0275template(101, AboutComponent_div_101_Template, 9, 5, "div", 61);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Since ", ctx.foundingYear, "");
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate1("", ctx.yearsExperience, "+");
        \u0275\u0275advance(17);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(43);
        \u0275\u0275property("ngForOf", ctx.whyChooseUs);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.team);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.milestones);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --primary: #009846;\n  --primary-light: #33b46e;\n  --primary-lighter: #66cf96;\n  --primary-lightest: #e6f5ed;\n  --secondary: #529433;\n  --secondary-light: #75ac5c;\n  --secondary-lighter: #98c485;\n  --secondary-lightest: #edf4ea;\n  --accent: #fecd08;\n  --accent-light: #fed73d;\n  --accent-lighter: #fee172;\n  --accent-lightest: #fff9e6;\n  --font-primary: "DM Sans", sans-serif;\n  --font-secondary: "Libre Baskerville", serif;\n  --font-accent: "Manrope", sans-serif;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-2xl: 1.5rem;\n  --text-3xl: 1.875rem;\n  --text-4xl: 2.25rem;\n  --text-5xl: 3rem;\n  --primary-rgb:\n    0,\n    152,\n    70;\n  --secondary-rgb:\n    82,\n    148,\n    51;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary) !important;\n}\n.bg-primary-light[_ngcontent-%COMP%] {\n  background-color: var(--primary-light) !important;\n}\n.bg-primary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--primary-lighter) !important;\n}\n.bg-primary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--primary-lightest) !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary) !important;\n}\n.bg-secondary-light[_ngcontent-%COMP%] {\n  background-color: var(--secondary-light) !important;\n}\n.bg-secondary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lighter) !important;\n}\n.bg-secondary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lightest) !important;\n}\n.bg-accent[_ngcontent-%COMP%] {\n  background-color: var(--accent) !important;\n}\n.bg-accent-light[_ngcontent-%COMP%] {\n  background-color: var(--accent-light) !important;\n}\n.bg-accent-lighter[_ngcontent-%COMP%] {\n  background-color: var(--accent-lighter) !important;\n}\n.bg-accent-lightest[_ngcontent-%COMP%] {\n  background-color: var(--accent-lightest) !important;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--secondary) !important;\n}\n.text-accent[_ngcontent-%COMP%] {\n  color: var(--accent) !important;\n}\n.font-primary[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n}\n.font-secondary[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n}\n.font-accent[_ngcontent-%COMP%] {\n  font-family: var(--font-accent);\n}\n.font-regular[_ngcontent-%COMP%] {\n  font-weight: var(--font-regular);\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: var(--font-medium);\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold);\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: var(--font-bold);\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-base);\n  line-height: 1.5;\n  color: var(--gray-700);\n  touch-action: manipulation;\n}\n.catalogue-page[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%], .premium-products[_ngcontent-%COMP%], .what-we-do[_ngcontent-%COMP%], .key-features[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%], .crop-categories[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%] {\n  content-visibility: auto;\n  contain-intrinsic-size: 1px 800px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  image-rendering: -webkit-optimize-contrast;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-weight: var(--font-semibold);\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--text-5xl);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n}\nh4[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\nh5[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\nh6[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n@media (max-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n  }\n  h4[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n  }\n  h5[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n  h6[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n}\n.section-padding[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n@media (max-width: 768px) {\n  .section-padding[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n}\n.min-vh-60[_ngcontent-%COMP%] {\n  min-height: 60vh;\n}\n.letter-spacing-2[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  font-family: var(--font-accent);\n}\n.hover-lift[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.hover-lift[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;\n}\n.about-hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 52vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  display: flex;\n  align-items: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  padding: 4rem 1rem 14vw 1rem;\n}\n.about-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 152, 70, 0.9) 0%,\n      rgba(82, 148, 51, 0.85) 100%);\n  z-index: 1;\n}\n.about-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  color: white;\n  padding: 2rem 1rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.about-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: clamp(2rem, 5vw, 4rem);\n  margin-bottom: 1.5rem;\n  font-weight: var(--font-bold);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n.about-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: clamp(1rem, 3vw, 1.5rem);\n  margin: 0 auto;\n  max-width: 600px;\n  padding: 0 1rem;\n  opacity: 1;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  line-height: 1.6;\n  letter-spacing: 0.5px;\n}\n.about-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-family: var(--font-accent);\n  background-color: var(--accent) !important;\n  color: var(--primary) !important;\n  font-weight: var(--font-bold);\n  padding: 0.5em 1em;\n  font-size: 1rem;\n}\n.about-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  z-index: 3;\n}\n.about-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.about-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: var(--primary-lightest);\n}\n.who-we-are[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.who-we-are[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  color: var(--secondary);\n}\n.who-we-are[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.who-we-are[_ngcontent-%COMP%]   .image-stack[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2rem;\n}\n.who-we-are[_ngcontent-%COMP%]   .image-stack[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  transform: rotate(-2deg);\n  transition: transform 0.5s ease;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  aspect-ratio: 4/3;\n  background-color: var(--primary-lightest);\n}\n.who-we-are[_ngcontent-%COMP%]   .image-stack[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.who-we-are[_ngcontent-%COMP%]   .image-stack[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%]:hover {\n  transform: rotate(0);\n}\n.who-we-are[_ngcontent-%COMP%]   .image-stack[_ngcontent-%COMP%]   .experience-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: var(--accent);\n  padding: 1.5rem;\n  border-radius: 50%;\n  box-shadow: 0 10px 30px rgba(254, 205, 8, 0.3);\n  z-index: 2;\n  width: 150px;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border: 4px solid white;\n}\n.who-we-are[_ngcontent-%COMP%]   .image-stack[_ngcontent-%COMP%]   .experience-badge[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2.5rem;\n  font-family: var(--font-secondary);\n  font-weight: 800;\n  color: var(--primary);\n  line-height: 1;\n}\n.who-we-are[_ngcontent-%COMP%]   .image-stack[_ngcontent-%COMP%]   .experience-badge[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-family: var(--font-accent);\n  font-weight: 700;\n  color: var(--primary);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.who-we-are[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-left: 4px solid var(--accent);\n  background: var(--primary-lightest);\n  border-radius: 0 8px 8px 0;\n  transition: transform 0.3s ease;\n}\n.who-we-are[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-family: var(--font-secondary);\n}\n.who-we-are[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n  background: var(--secondary-lightest);\n}\n.vision-mission[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lightest);\n}\n.vision-mission[_ngcontent-%COMP%]   .card-vision[_ngcontent-%COMP%], .vision-mission[_ngcontent-%COMP%]   .card-mission[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  background: white;\n}\n.vision-mission[_ngcontent-%COMP%]   .card-vision[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%], .vision-mission[_ngcontent-%COMP%]   .card-mission[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  margin-bottom: 2rem;\n}\n.vision-mission[_ngcontent-%COMP%]   .card-vision[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .vision-mission[_ngcontent-%COMP%]   .card-mission[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  color: var(--primary);\n}\n.vision-mission[_ngcontent-%COMP%]   .card-vision[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .vision-mission[_ngcontent-%COMP%]   .card-mission[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n}\n.vision-mission[_ngcontent-%COMP%]   .card-vision[_ngcontent-%COMP%]:hover   .icon-box[_ngcontent-%COMP%], .vision-mission[_ngcontent-%COMP%]   .card-mission[_ngcontent-%COMP%]:hover   .icon-box[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.vision-mission[_ngcontent-%COMP%]   .bg-primary-10[_ngcontent-%COMP%] {\n  background-color: var(--primary-lightest);\n  color: var(--primary);\n}\n.vision-mission[_ngcontent-%COMP%]   .bg-secondary-10[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lightest);\n  color: var(--secondary);\n}\n.quality-policy[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n}\n.quality-policy[_ngcontent-%COMP%]   .bg-pattern[_ngcontent-%COMP%] {\n  background-image:\n    radial-gradient(\n      circle at 2px 2px,\n      rgba(255, 255, 255, 0.2) 1px,\n      transparent 0);\n  background-size: 24px 24px;\n}\n.quality-policy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n}\n.quality-policy[_ngcontent-%COMP%]   p.lead[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-style: italic;\n}\n.why-choose-us[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.why-choose-us[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);\n  border: 1px solid var(--secondary-lightest);\n  background: white;\n}\n.why-choose-us[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  background-color: var(--primary-lightest);\n  color: var(--primary);\n  font-family: var(--font-secondary);\n  font-weight: bold;\n  transition: 0.3s;\n}\n.why-choose-us[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  color: var(--secondary);\n}\n.why-choose-us[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);\n  transform: translateY(-5px);\n  border-color: var(--accent);\n}\n.why-choose-us[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover   .icon-circle[_ngcontent-%COMP%] {\n  background-color: var(--accent);\n  color: var(--primary);\n}\n.team-section[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lightest);\n}\n.team-section[_ngcontent-%COMP%]   .team-card-premium[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.team-section[_ngcontent-%COMP%]   .team-card-premium[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%] {\n  transition: transform 0.5s ease;\n}\n.team-section[_ngcontent-%COMP%]   .team-card-premium[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   .overlay-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to top,\n      rgba(var(--primary-rgb), 0.9),\n      transparent);\n  transition: opacity 0.3s ease;\n}\n.team-section[_ngcontent-%COMP%]   .team-card-premium[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  color: var(--primary);\n}\n.team-section[_ngcontent-%COMP%]   .team-card-premium[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: var(--secondary) !important;\n  font-family: var(--font-accent);\n  font-weight: 700;\n}\n.team-section[_ngcontent-%COMP%]   .team-card-premium[_ngcontent-%COMP%]   .group-hover[_ngcontent-%COMP%]:hover   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.team-section[_ngcontent-%COMP%]   .team-card-premium[_ngcontent-%COMP%]   .group-hover[_ngcontent-%COMP%]:hover   .overlay-gradient[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n.journey-section[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2rem 0;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 2px;\n  background: var(--primary-lighter);\n  transform: translateX(-50%);\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 3rem;\n  width: 50%;\n  padding-right: 3rem;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item.inverted[_ngcontent-%COMP%] {\n  margin-left: 50%;\n  padding-right: 0;\n  padding-left: 3rem;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item.inverted[_ngcontent-%COMP%]   .timeline-badge[_ngcontent-%COMP%] {\n  left: -9px;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:not(.inverted) {\n  text-align: right;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:not(.inverted)   .timeline-badge[_ngcontent-%COMP%] {\n  right: -9px;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 24px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--accent);\n  border: 4px solid white;\n  box-shadow: 0 0 0 4px var(--primary-lightest);\n  z-index: 1;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  position: relative;\n  transition: transform 0.3s ease;\n  border: 1px solid var(--secondary-lightest);\n  border-radius: 12px;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: var(--primary-lighter);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .date-badge[_ngcontent-%COMP%] {\n  background-color: var(--primary-lightest);\n  color: var(--primary);\n  font-family: var(--font-accent);\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  color: var(--secondary);\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 24px;\n  border-style: solid;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:not(.inverted)   .timeline-content[_ngcontent-%COMP%]::after {\n  right: -10px;\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent white;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item.inverted[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]::after {\n  left: -10px;\n  border-width: 10px 10px 10px 0;\n  border-color: transparent white transparent transparent;\n}\n@keyframes _ngcontent-%COMP%_bounce-subtle {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.bounce-animate[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce-subtle 3s infinite ease-in-out;\n}\n@media (max-width: 991px) {\n  .journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]::before {\n    left: 20px;\n  }\n  .journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 4.5rem;\n    padding-right: 0;\n    margin-left: 0;\n    text-align: left;\n  }\n  .journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item.inverted[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding-left: 4.5rem;\n  }\n  .journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-badge[_ngcontent-%COMP%] {\n    left: 13px !important;\n    right: auto !important;\n  }\n  .journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:not(.inverted)   .timeline-content[_ngcontent-%COMP%]::after, .journey-section[_ngcontent-%COMP%]   .timeline-clean[_ngcontent-%COMP%]   .timeline-item.inverted[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]::after {\n    left: -10px;\n    right: auto;\n    border-width: 10px 10px 10px 0;\n    border-color: transparent white transparent transparent;\n  }\n  .who-we-are[_ngcontent-%COMP%]   .image-stack[_ngcontent-%COMP%]   .experience-badge[_ngcontent-%COMP%] {\n    right: 50%;\n    transform: translateX(50%);\n    bottom: -40px;\n  }\n}\n@media (max-width: 576px) {\n  .section-padding[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .who-we-are[_ngcontent-%COMP%]   .image-stack[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin-bottom: 3rem;\n  }\n  .who-we-are[_ngcontent-%COMP%]   .image-stack[_ngcontent-%COMP%]   .experience-badge[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 120px;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\pages\\about\\about.component.ts", lineNumber: 18 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-RBF7BQII.js.map
