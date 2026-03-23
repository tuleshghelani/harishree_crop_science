import {
  SafeHtmlPipe,
  SvgIconsService
} from "./chunk-4LKGFBPQ.js";
import {
  environment
} from "./chunk-TP5SVJPG.js";
import {
  CommonModule,
  Meta,
  Title,
  TransferState,
  makeStateKey2 as makeStateKey,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext
} from "./chunk-FE7VCITN.js";

// src/app/pages/quality-assurance/quality-assurance.component.ts
var META_KEY = makeStateKey("quality_meta");
var STRUCTURED_DATA_KEY = makeStateKey("quality_structured_data");
var QualityAssuranceComponent = class _QualityAssuranceComponent {
  constructor(title, meta, transferState, svgIconsService) {
    this.title = title;
    this.meta = meta;
    this.transferState = transferState;
    this.baseUrl = environment.baseUrl;
    this.svgIcons = svgIconsService;
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
    if (this.transferState.hasKey(META_KEY))
      return;
    this.title.setTitle("Quality Assurance | Harishree Crop Science");
    const metaTags = [
      { name: "description", content: "Discover our rigorous quality assurance processes ensuring the highest standards in agricultural products. Leading the way in quality control and testing." },
      { name: "keywords", content: "quality assurance, quality control, testing standards, agricultural quality, product testing, certification" },
      { property: "og:title", content: "Quality Assurance | Harishree Crop Science" },
      { property: "og:description", content: "Experience excellence through our comprehensive quality assurance processes and standards." },
      // { name: 'canonical', content: `${this.baseUrl}/quality-assurance` },
      { property: "og:url", content: `${this.baseUrl}/quality-assurance` },
      { property: "og:type", content: "website" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Harishree Crop Science" }
    ];
    metaTags.forEach((tag) => this.meta.updateTag(tag));
    this.transferState.set(META_KEY, true);
  }
  setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY))
      return;
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Quality Assurance at Harishree Crop Science",
      "description": "Comprehensive quality assurance and testing services for agricultural products",
      "provider": {
        "@type": "Organization",
        "name": "Harishree Crop Science"
      },
      "url": `${this.baseUrl}/quality-assurance`
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
  static {
    this.\u0275fac = function QualityAssuranceComponent_Factory(t) {
      return new (t || _QualityAssuranceComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(TransferState), \u0275\u0275directiveInject(SvgIconsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QualityAssuranceComponent, selectors: [["app-quality-assurance"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 116, vars: 18, consts: [[1, "quality-hero"], [1, "hero-content"], ["data-aos", "fade-up"], ["data-aos", "fade-up", "data-aos-delay", "200"], [1, "hero-bg"], ["viewBox", "0 0 1440 160", "preserveAspectRatio", "none"], ["fill", "var(--primary-lightest)", "d", "M0,48L48,56C96,64,192,80,288,80C384,80,480,64,576,56C672,48,768,48,864,56C960,64,1056,80,1152,80C1248,80,1344,64,1392,56L1440,48L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"], [1, "quality-overview"], [1, "container"], [1, "row"], ["data-aos", "fade-up", 1, "col-12"], [1, "content"], ["data-aos", "fade-up", 1, "overview-text"], [1, "lead"], [1, "testing-facilities"], [1, "section-title"], [1, "quality-cards"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-4", "col-md-6"], [1, "quality-card"], [1, "icon", 3, "innerHTML"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-4", "col-md-6"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-6"], [2, "border", "2px solid var(--primary-lightest)"], [1, "quality-standards"], ["data-aos", "fade-up", 1, "section-title"], [1, "standard-card"], [1, "quality-process"], ["data-aos", "fade-up", 1, "process-timeline"]], template: function QualityAssuranceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Quality Assurance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, " Ensuring excellence through rigorous testing and standards ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 5);
        \u0275\u0275element(8, "path", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "section", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "p", 13);
        \u0275\u0275text(16, " The ability to deliver consistently high-quality agro chemical products to customers is critical to our business. Quality control is ensured by strict adherence to work protocols, from the procurement of raw materials through the stages of production. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p");
        \u0275\u0275text(18, " Our manufacturing facility is certified with ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 for development and manufacturing of agrochemical formulations such as insecticides, herbicides, fungicides, micro fertilizers and plant growth regulators. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p");
        \u0275\u0275text(20, " Our quality assurance department, comprising of 7 people as on November 30, 2021, helps us to monitor the quality of raw materials used by us and the end products produced by us. Robust process and product audit and quality rating are conducted, and quality check parameters are laid down to ensure adherence to defined process and product specifications. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p");
        \u0275\u0275text(22, " Our quality assurance department uses chemical and physical testing facilities, like: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "ul", 14)(24, "li");
        \u0275\u0275text(25, "UV spectrophotometer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li");
        \u0275\u0275text(27, "High-performance liquid chromatographer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "li");
        \u0275\u0275text(29, "Gas liquid chromatographer valiant moisture meter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "li");
        \u0275\u0275text(31, "Tests like pH, assay, suspension, density, viscosity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "li");
        \u0275\u0275text(33, "Wettability, acidity, alkalinity tests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "li");
        \u0275\u0275text(35, "Heat stability test");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "li");
        \u0275\u0275text(37, "Emulsion stability test");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "li");
        \u0275\u0275text(39, "Flash point test");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "h2", 15);
        \u0275\u0275text(41, "Quality Management System");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 16)(43, "div", 9)(44, "div", 17)(45, "div", 18);
        \u0275\u0275element(46, "div", 19);
        \u0275\u0275pipe(47, "safeHtml");
        \u0275\u0275elementStart(48, "h3");
        \u0275\u0275text(49, "ISO Certifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "ul")(51, "li");
        \u0275\u0275text(52, "ISO 9001:2015");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "li");
        \u0275\u0275text(54, "ISO 14001:2015");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "li");
        \u0275\u0275text(56, "ISO 45001:2018");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "div", 20)(58, "div", 18);
        \u0275\u0275element(59, "div", 19);
        \u0275\u0275pipe(60, "safeHtml");
        \u0275\u0275elementStart(61, "h3");
        \u0275\u0275text(62, "Advanced Testing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "ul")(64, "li");
        \u0275\u0275text(65, "UV Spectrophotometer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "Liquid Chromatographer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "Gas Chromatographer");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(70, "div", 21)(71, "div", 18);
        \u0275\u0275element(72, "div", 19);
        \u0275\u0275pipe(73, "safeHtml");
        \u0275\u0275elementStart(74, "h3");
        \u0275\u0275text(75, "Quality Tests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "ul")(77, "li");
        \u0275\u0275text(78, "Heat Stability Testing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "li");
        \u0275\u0275text(80, "Emulsion Stability");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "Physical Properties");
        \u0275\u0275elementEnd()()()()()()()()()()();
        \u0275\u0275element(83, "hr", 22);
        \u0275\u0275elementStart(84, "section", 23)(85, "div", 8)(86, "h2", 24);
        \u0275\u0275text(87, "Our Quality Standards");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 9)(89, "div", 17)(90, "div", 25);
        \u0275\u0275element(91, "div", 19);
        \u0275\u0275pipe(92, "safeHtml");
        \u0275\u0275elementStart(93, "h3");
        \u0275\u0275text(94, "Testing Protocols");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "p");
        \u0275\u0275text(96, "Comprehensive testing at every stage of production");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "div", 20)(98, "div", 25);
        \u0275\u0275element(99, "div", 19);
        \u0275\u0275pipe(100, "safeHtml");
        \u0275\u0275elementStart(101, "h3");
        \u0275\u0275text(102, "Certifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "p");
        \u0275\u0275text(104, "International quality certifications and compliance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(105, "div", 21)(106, "div", 25);
        \u0275\u0275element(107, "div", 19);
        \u0275\u0275pipe(108, "safeHtml");
        \u0275\u0275elementStart(109, "h3");
        \u0275\u0275text(110, "Monitoring Systems");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "p");
        \u0275\u0275text(112, "Continuous quality monitoring and improvement");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(113, "section", 26)(114, "div", 8);
        \u0275\u0275element(115, "div", 27);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(46);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(47, 6, ctx.svgIcons.qualityIcons.certification), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(13);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(60, 8, ctx.svgIcons.qualityIcons.testing), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(13);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(73, 10, ctx.svgIcons.qualityIcons.monitoring), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(19);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(92, 12, ctx.svgIcons.qualityIcons.testing), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(8);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(100, 14, ctx.svgIcons.qualityIcons.certification), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(8);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(108, 16, ctx.svgIcons.qualityIcons.monitoring), \u0275\u0275sanitizeHtml);
      }
    }, dependencies: [CommonModule, SafeHtmlPipe], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --primary: #009846;\n  --primary-light: #33b46e;\n  --primary-lighter: #66cf96;\n  --primary-lightest: #e6f5ed;\n  --secondary: #529433;\n  --secondary-light: #75ac5c;\n  --secondary-lighter: #98c485;\n  --secondary-lightest: #edf4ea;\n  --accent: #fecd08;\n  --accent-light: #fed73d;\n  --accent-lighter: #fee172;\n  --accent-lightest: #fff9e6;\n  --font-primary: "DM Sans", sans-serif;\n  --font-secondary: "Libre Baskerville", serif;\n  --font-accent: "Manrope", sans-serif;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-2xl: 1.5rem;\n  --text-3xl: 1.875rem;\n  --text-4xl: 2.25rem;\n  --text-5xl: 3rem;\n  --primary-rgb:\n    0,\n    152,\n    70;\n  --secondary-rgb:\n    82,\n    148,\n    51;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary) !important;\n}\n.bg-primary-light[_ngcontent-%COMP%] {\n  background-color: var(--primary-light) !important;\n}\n.bg-primary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--primary-lighter) !important;\n}\n.bg-primary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--primary-lightest) !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary) !important;\n}\n.bg-secondary-light[_ngcontent-%COMP%] {\n  background-color: var(--secondary-light) !important;\n}\n.bg-secondary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lighter) !important;\n}\n.bg-secondary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lightest) !important;\n}\n.bg-accent[_ngcontent-%COMP%] {\n  background-color: var(--accent) !important;\n}\n.bg-accent-light[_ngcontent-%COMP%] {\n  background-color: var(--accent-light) !important;\n}\n.bg-accent-lighter[_ngcontent-%COMP%] {\n  background-color: var(--accent-lighter) !important;\n}\n.bg-accent-lightest[_ngcontent-%COMP%] {\n  background-color: var(--accent-lightest) !important;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--secondary) !important;\n}\n.text-accent[_ngcontent-%COMP%] {\n  color: var(--accent) !important;\n}\n.font-primary[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n}\n.font-secondary[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n}\n.font-accent[_ngcontent-%COMP%] {\n  font-family: var(--font-accent);\n}\n.font-regular[_ngcontent-%COMP%] {\n  font-weight: var(--font-regular);\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: var(--font-medium);\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold);\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: var(--font-bold);\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-base);\n  line-height: 1.5;\n  color: var(--gray-700);\n  touch-action: manipulation;\n}\n.catalogue-page[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%], .premium-products[_ngcontent-%COMP%], .what-we-do[_ngcontent-%COMP%], .key-features[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%], .crop-categories[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%] {\n  content-visibility: auto;\n  contain-intrinsic-size: 1px 800px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  image-rendering: -webkit-optimize-contrast;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-weight: var(--font-semibold);\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--text-5xl);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n}\nh4[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\nh5[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\nh6[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n@media (max-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n  }\n  h4[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n  }\n  h5[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n  h6[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n}\n.quality-hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 52vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n}\n.quality-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 152, 70, 0.9) 0%,\n      rgba(82, 148, 51, 0.85) 100%);\n  z-index: 1;\n}\n.quality-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  color: white;\n  padding: 4rem 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.quality-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 2rem;\n  font-weight: var(--font-bold);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n.quality-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  opacity: 1;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  line-height: 1.6;\n  letter-spacing: 0.5px;\n}\n.quality-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  z-index: 3;\n}\n.quality-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.quality-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: var(--primary-lightest);\n}\nh2[_ngcontent-%COMP%] {\n  color: var(--secondary);\n}\n.quality-hero[_ngcontent-%COMP%], .quality-overview[_ngcontent-%COMP%], .quality-standards[_ngcontent-%COMP%], .quality-process[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.quality-hero[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], .quality-overview[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], .quality-standards[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], .quality-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: -1.5rem;\n}\n.quality-hero[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%], .quality-overview[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%], .quality-standards[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%], .quality-process[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.quality-hero[_ngcontent-%COMP%]:not(:last-child), .quality-overview[_ngcontent-%COMP%]:not(:last-child), .quality-standards[_ngcontent-%COMP%]:not(:last-child), .quality-process[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 4rem;\n}\n.standard-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2.5rem 2rem;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  height: 100%;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n  margin-bottom: 2rem;\n}\n.standard-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: var(--secondary);\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);\n}\n.standard-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 2rem;\n  color: var(--primary);\n  transition: color 0.3s ease;\n}\n.standard-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary);\n  margin-bottom: 1.5rem;\n  text-align: center;\n  transition: color 0.3s ease;\n}\n.standard-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-700);\n  text-align: center;\n  margin: 0;\n  line-height: 1.6;\n}\n.standard-card[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  color: var(--secondary);\n}\n.standard-card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: var(--secondary);\n}\n.quality-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2.5rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  height: 100%;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n  margin-bottom: 2rem;\n}\n.quality-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: var(--secondary);\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);\n}\n.quality-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 2rem;\n  color: var(--primary);\n  transition: color 0.3s ease;\n}\n.quality-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary);\n  margin-bottom: 1.5rem;\n  text-align: center;\n  font-size: 1.5rem;\n  transition: color 0.3s ease;\n}\n.quality-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n}\n.quality-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--gray-700);\n  margin-bottom: 0.75rem;\n  position: relative;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--primary-lightest);\n}\n.quality-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.quality-card[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  color: var(--secondary);\n}\n.quality-card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: var(--secondary);\n}\n.overview-text[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n  padding: 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid var(--primary-lightest);\n}\n.overview-text[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--primary);\n  font-weight: var(--font-medium);\n  margin-bottom: 1.5rem;\n  line-height: 1.6;\n}\n.overview-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-700);\n  margin-bottom: 1.25rem;\n  line-height: 1.7;\n}\n.overview-text[_ngcontent-%COMP%]   .testing-facilities[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n.overview-text[_ngcontent-%COMP%]   .testing-facilities[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 1.5rem;\n  color: var(--gray-700);\n  line-height: 1.6;\n}\n.overview-text[_ngcontent-%COMP%]   .testing-facilities[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n  height: 8px;\n  background-color: var(--secondary);\n  border-radius: 50%;\n}\n@media (max-width: 991px) {\n  .quality-hero[_ngcontent-%COMP%], .quality-overview[_ngcontent-%COMP%], .quality-standards[_ngcontent-%COMP%], .quality-process[_ngcontent-%COMP%] {\n    padding: 6rem 0;\n  }\n  .quality-hero[_ngcontent-%COMP%]:not(:last-child), .quality-overview[_ngcontent-%COMP%]:not(:last-child), .quality-standards[_ngcontent-%COMP%]:not(:last-child), .quality-process[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 3rem;\n  }\n}\n@media (max-width: 768px) {\n  .quality-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .quality-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .quality-hero[_ngcontent-%COMP%], .quality-overview[_ngcontent-%COMP%], .quality-standards[_ngcontent-%COMP%], .quality-process[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n  .quality-hero[_ngcontent-%COMP%]:not(:last-child), .quality-overview[_ngcontent-%COMP%]:not(:last-child), .quality-standards[_ngcontent-%COMP%]:not(:last-child), .quality-process[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 2rem;\n  }\n  .quality-card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  .quality-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .overview-text[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .overview-text[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .overview-text[_ngcontent-%COMP%]   .testing-facilities[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=quality-assurance.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QualityAssuranceComponent, { className: "QualityAssuranceComponent", filePath: "src\\app\\pages\\quality-assurance\\quality-assurance.component.ts", lineNumber: 19 });
})();
export {
  QualityAssuranceComponent
};
//# sourceMappingURL=chunk-KEWX7LGV.js.map
