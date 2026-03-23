import './polyfills.server.mjs';
import {
  SafeHtmlPipe,
  SvgIconsService
} from "./chunk-NOE3Z5ZM.mjs";
import {
  environment
} from "./chunk-UYQZEPZK.mjs";
import {
  CommonModule,
  Meta,
  PLATFORM_ID,
  Title,
  TransferState2 as TransferState,
  isPlatformBrowser,
  makeStateKey,
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
} from "./chunk-Q6ZNKT7I.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/pages/research/research.component.ts
var META_KEY = makeStateKey("research_meta");
var STRUCTURED_DATA_KEY = makeStateKey("research_structured_data");
var ResearchComponent = class _ResearchComponent {
  constructor(title, meta, transferState, svgIconsService, platformId) {
    this.title = title;
    this.meta = meta;
    this.transferState = transferState;
    this.platformId = platformId;
    this.baseUrl = environment.baseUrl;
    this.svgIcons = svgIconsService;
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const images = [
        "assets/research/1.jpeg",
        "assets/research/2.jpeg",
        "assets/research/3.jpeg",
        "assets/research/4.jpeg"
      ];
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
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
    this.title.setTitle("Research & Development | Harishree Crop Science");
    const metaTags = [
      { name: "description", content: "Discover our state-of-the-art R&D facilities and innovative agricultural research. Leading the way in sustainable farming solutions." },
      { name: "keywords", content: "agricultural research, R&D, crop science research, sustainable farming research, agricultural innovation" },
      { property: "og:title", content: "Research & Development | Harishree Crop Science" },
      { property: "og:description", content: "Explore our cutting-edge research and development in sustainable agricultural solutions." },
      { property: "og:type", content: "website" },
      // { name: 'canonical', content: `${this.baseUrl}/research` },
      { property: "og:url", content: `${this.baseUrl}/research` },
      { property: "og:type", content: "website" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
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
      "@type": "ResearchOrganization",
      "name": "Harishree Crop Science Research & Development",
      "description": "Leading research facility in sustainable agricultural solutions",
      "url": `${this.baseUrl}/research`,
      "parentOrganization": {
        "@type": "Organization",
        "name": "Harishree Crop Science"
      }
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
    this.\u0275fac = function ResearchComponent_Factory(t) {
      return new (t || _ResearchComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(TransferState), \u0275\u0275directiveInject(SvgIconsService), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResearchComponent, selectors: [["app-research"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 113, vars: 21, consts: [[1, "research-hero"], [1, "hero-content"], ["data-aos", "fade-up"], ["data-aos", "fade-up", "data-aos-delay", "200"], [1, "hero-bg"], ["viewBox", "0 0 1440 160", "preserveAspectRatio", "none"], ["fill", "var(--primary-lightest)", "d", "M0,48L48,56C96,64,192,80,288,80C384,80,480,64,576,56C672,48,768,48,864,56C960,64,1056,80,1152,80C1248,80,1344,64,1392,56L1440,48L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"], [1, "research-overview"], [1, "container"], [1, "row", "align-items-center"], ["data-aos", "fade-right", 1, "col-lg-6"], [1, "content"], ["data-aos", "fade-left", 1, "col-lg-6"], [1, "research-image"], ["src", "assets/research/research.webp", "alt", "Research Facility", 1, "img-fluid", "rounded", "shadow"], [1, "research-capabilities"], ["data-aos", "fade-up", 1, "section-title"], ["data-aos", "zoom-in", 1, "capabilities-diagram"], [3, "innerHTML"], [1, "lab-facilities"], [1, "row"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-6", "col-md-6"], [1, "lab-image"], ["src", "assets/research/1.jpeg", "alt", "Quality Control Lab", "loading", "lazy"], [1, "overlay"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-6", "col-md-6"], ["src", "assets/research/2.jpeg", "alt", "Research & Development Lab", "loading", "lazy"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-6", "col-md-6"], ["src", "assets/research/3.jpeg", "alt", "Testing Facility", "loading", "lazy"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "col-lg-6", "col-md-6"], ["src", "assets/research/4.jpeg", "alt", "Analysis Lab", "loading", "lazy"], [1, "my-5"], [1, "research-areas"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-4", "col-md-6", "research-main-card"], [1, "research-card"], [1, "icon", 3, "innerHTML"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-4", "col-md-6"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-6"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "col-lg-4", "col-md-6"], ["data-aos", "fade-up", "data-aos-delay", "500", 1, "col-lg-4", "col-md-6"], ["data-aos", "fade-up", "data-aos-delay", "600", 1, "col-lg-4", "col-md-6"]], template: function ResearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Research & Development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, " Pioneering sustainable agricultural solutions through research ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 5);
        \u0275\u0275element(8, "path", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "section", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "h2");
        \u0275\u0275text(15, "Advanced Research & Development Excellence");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p");
        \u0275\u0275text(17, "At Harishree Crop Science, we maintain state-of-the-art NABL-certified research laboratories equipped with cutting-edge analytical instruments and staffed by highly qualified scientists. Our R&D infrastructure forms the cornerstone of our innovation strategy, enabling us to develop sustainable agricultural solutions that meet global standards.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "Our research team collaborates with leading agricultural universities and research institutions, combining academic expertise with practical industry experience to create breakthrough solutions. Through our advanced pilot plant facilities, we ensure seamless scaling of laboratory innovations to commercial production while maintaining the highest quality standards.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 12)(21, "div", 13);
        \u0275\u0275element(22, "img", 14);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(23, "section", 15)(24, "div", 8)(25, "h2", 16);
        \u0275\u0275text(26, "Our Research Capabilities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 17);
        \u0275\u0275element(28, "div", 18);
        \u0275\u0275pipe(29, "safeHtml");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "section", 19)(31, "div", 8)(32, "h2", 16);
        \u0275\u0275text(33, "Our Laboratory Facilities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 20)(35, "div", 21)(36, "div", 22);
        \u0275\u0275element(37, "img", 23);
        \u0275\u0275elementStart(38, "div", 24)(39, "h3");
        \u0275\u0275text(40, "Quality Control Lab");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div", 25)(42, "div", 22);
        \u0275\u0275element(43, "img", 26);
        \u0275\u0275elementStart(44, "div", 24)(45, "h3");
        \u0275\u0275text(46, "R&D Lab");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(47, "div", 27)(48, "div", 22);
        \u0275\u0275element(49, "img", 28);
        \u0275\u0275elementStart(50, "div", 24)(51, "h3");
        \u0275\u0275text(52, "Testing Facility");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(53, "div", 29)(54, "div", 22);
        \u0275\u0275element(55, "img", 30);
        \u0275\u0275elementStart(56, "div", 24)(57, "h3");
        \u0275\u0275text(58, "Analysis Lab");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275element(59, "hr", 31);
        \u0275\u0275elementStart(60, "section", 32)(61, "div", 8)(62, "h2", 16);
        \u0275\u0275text(63, "Key Research Areas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 20)(65, "div", 33)(66, "div", 34);
        \u0275\u0275element(67, "div", 35);
        \u0275\u0275pipe(68, "safeHtml");
        \u0275\u0275elementStart(69, "h3");
        \u0275\u0275text(70, "Product Development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "p");
        \u0275\u0275text(72, "Creating innovative agricultural solutions through extensive research and testing");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "div", 36)(74, "div", 34);
        \u0275\u0275element(75, "div", 35);
        \u0275\u0275pipe(76, "safeHtml");
        \u0275\u0275elementStart(77, "h3");
        \u0275\u0275text(78, "Quality Control");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "p");
        \u0275\u0275text(80, "Maintaining highest standards through rigorous quality assurance processes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "div", 37)(82, "div", 34);
        \u0275\u0275element(83, "div", 35);
        \u0275\u0275pipe(84, "safeHtml");
        \u0275\u0275elementStart(85, "h3");
        \u0275\u0275text(86, "Advanced Lab Testing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "p");
        \u0275\u0275text(88, "State-of-the-art laboratory facilities for comprehensive product analysis");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(89, "div", 38)(90, "div", 34);
        \u0275\u0275element(91, "div", 35);
        \u0275\u0275pipe(92, "safeHtml");
        \u0275\u0275elementStart(93, "h3");
        \u0275\u0275text(94, "Sustainability Research");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "p");
        \u0275\u0275text(96, "Developing eco-friendly solutions for sustainable agriculture");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "div", 39)(98, "div", 34);
        \u0275\u0275element(99, "div", 35);
        \u0275\u0275pipe(100, "safeHtml");
        \u0275\u0275elementStart(101, "h3");
        \u0275\u0275text(102, "Innovation Hub");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "p");
        \u0275\u0275text(104, "Pioneering new technologies and methodologies in agricultural science");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(105, "div", 40)(106, "div", 34);
        \u0275\u0275element(107, "div", 35);
        \u0275\u0275pipe(108, "safeHtml");
        \u0275\u0275elementStart(109, "h3");
        \u0275\u0275text(110, "Research Collaboration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "p");
        \u0275\u0275text(112, "Partnering with leading institutions for advanced agricultural research");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(28);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(29, 7, ctx.svgIcons.researchIcons.capabilities), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(39);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(68, 9, ctx.svgIcons.researchIcons.productDevelopment), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(8);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(76, 11, ctx.svgIcons.researchIcons.qualityControl), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(8);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(84, 13, ctx.svgIcons.researchIcons.labTesting), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(8);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(92, 15, ctx.svgIcons.researchIcons.sustainability), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(8);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(100, 17, ctx.svgIcons.researchIcons.innovation), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(8);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(108, 19, ctx.svgIcons.researchIcons.research), \u0275\u0275sanitizeHtml);
      }
    }, dependencies: [CommonModule, SafeHtmlPipe], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --primary: #009846;\n  --primary-light: #33b46e;\n  --primary-lighter: #66cf96;\n  --primary-lightest: #e6f5ed;\n  --secondary: #529433;\n  --secondary-light: #75ac5c;\n  --secondary-lighter: #98c485;\n  --secondary-lightest: #edf4ea;\n  --accent: #fecd08;\n  --accent-light: #fed73d;\n  --accent-lighter: #fee172;\n  --accent-lightest: #fff9e6;\n  --font-primary: "DM Sans", sans-serif;\n  --font-secondary: "Libre Baskerville", serif;\n  --font-accent: "Manrope", sans-serif;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-2xl: 1.5rem;\n  --text-3xl: 1.875rem;\n  --text-4xl: 2.25rem;\n  --text-5xl: 3rem;\n  --primary-rgb:\n    0,\n    152,\n    70;\n  --secondary-rgb:\n    82,\n    148,\n    51;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary) !important;\n}\n.bg-primary-light[_ngcontent-%COMP%] {\n  background-color: var(--primary-light) !important;\n}\n.bg-primary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--primary-lighter) !important;\n}\n.bg-primary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--primary-lightest) !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary) !important;\n}\n.bg-secondary-light[_ngcontent-%COMP%] {\n  background-color: var(--secondary-light) !important;\n}\n.bg-secondary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lighter) !important;\n}\n.bg-secondary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lightest) !important;\n}\n.bg-accent[_ngcontent-%COMP%] {\n  background-color: var(--accent) !important;\n}\n.bg-accent-light[_ngcontent-%COMP%] {\n  background-color: var(--accent-light) !important;\n}\n.bg-accent-lighter[_ngcontent-%COMP%] {\n  background-color: var(--accent-lighter) !important;\n}\n.bg-accent-lightest[_ngcontent-%COMP%] {\n  background-color: var(--accent-lightest) !important;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--secondary) !important;\n}\n.text-accent[_ngcontent-%COMP%] {\n  color: var(--accent) !important;\n}\n.font-primary[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n}\n.font-secondary[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n}\n.font-accent[_ngcontent-%COMP%] {\n  font-family: var(--font-accent);\n}\n.font-regular[_ngcontent-%COMP%] {\n  font-weight: var(--font-regular);\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: var(--font-medium);\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold);\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: var(--font-bold);\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-base);\n  line-height: 1.5;\n  color: var(--gray-700);\n  touch-action: manipulation;\n}\n.catalogue-page[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%], .premium-products[_ngcontent-%COMP%], .what-we-do[_ngcontent-%COMP%], .key-features[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%], .crop-categories[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%] {\n  content-visibility: auto;\n  contain-intrinsic-size: 1px 800px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  image-rendering: -webkit-optimize-contrast;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-weight: var(--font-semibold);\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--text-5xl);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n}\nh4[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\nh5[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\nh6[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n@media (max-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n  }\n  h4[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n  }\n  h5[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n  h6[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n}\n.research-hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 52vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n}\n.research-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 152, 70, 0.9) 0%,\n      rgba(82, 148, 51, 0.85) 100%);\n  z-index: 1;\n}\n.research-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  color: white;\n  padding: 4rem 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.research-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 2rem;\n  font-weight: var(--font-bold);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n.research-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  opacity: 1;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  line-height: 1.6;\n  letter-spacing: 0.5px;\n}\n.research-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  z-index: 3;\n}\n.research-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.research-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: var(--primary-lightest);\n}\n.research-overview[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n}\n.research-overview[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--secondary);\n  margin-bottom: 1.5rem;\n}\n.research-overview[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-700);\n  margin-bottom: 1.5rem;\n  line-height: 1.6;\n}\n.research-overview[_ngcontent-%COMP%]   .research-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 550px;\n  height: auto;\n  object-fit: cover;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.research-capabilities[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background-color: var(--primary-lightest);\n}\n.research-capabilities[_ngcontent-%COMP%]   .capabilities-diagram[_ngcontent-%COMP%] {\n  margin: 3rem auto;\n  max-width: 800px;\n}\n.research-capabilities[_ngcontent-%COMP%]   .capabilities-diagram[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.research-areas[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n}\n.research-areas[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: -1.5rem;\n}\n.research-areas[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.research-areas[_ngcontent-%COMP%]   .research-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2.5rem 2rem;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  height: 100%;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n  margin: 0;\n}\n.research-areas[_ngcontent-%COMP%]   .research-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: var(--secondary);\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);\n}\n.research-areas[_ngcontent-%COMP%]   .research-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 2rem;\n  color: var(--primary);\n  transition: color 0.3s ease;\n}\n.research-areas[_ngcontent-%COMP%]   .research-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary);\n  margin-bottom: 1.5rem;\n  text-align: center;\n  transition: color 0.3s ease;\n}\n.research-areas[_ngcontent-%COMP%]   .research-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-700);\n  text-align: center;\n  margin: 0;\n  line-height: 1.6;\n}\n.research-areas[_ngcontent-%COMP%]   .research-card[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  color: var(--secondary);\n}\n.research-areas[_ngcontent-%COMP%]   .research-card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: var(--secondary);\n}\n.lab-facilities[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n}\n.lab-facilities[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: var(--secondary);\n}\n.lab-facilities[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: -1rem;\n}\n.lab-facilities[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.lab-facilities[_ngcontent-%COMP%]   .lab-image[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n  cursor: pointer;\n}\n.lab-facilities[_ngcontent-%COMP%]   .lab-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.lab-facilities[_ngcontent-%COMP%]   .lab-image[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.8),\n      rgba(0, 0, 0, 0));\n  padding: 2rem 1rem 1rem;\n  transform: translateY(100%);\n  transition: transform 0.3s ease;\n}\n.lab-facilities[_ngcontent-%COMP%]   .lab-image[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.1rem;\n  margin: 0;\n  text-align: center;\n}\n.lab-facilities[_ngcontent-%COMP%]   .lab-image[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.lab-facilities[_ngcontent-%COMP%]   .lab-image[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.research-hero[_ngcontent-%COMP%], .research-overview[_ngcontent-%COMP%], .research-capabilities[_ngcontent-%COMP%], .research-areas[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n}\n.research-hero[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .research-overview[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .research-capabilities[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .research-areas[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: var(--secondary);\n}\n.research-hero[_ngcontent-%COMP%]:not(:last-child), .research-overview[_ngcontent-%COMP%]:not(:last-child), .research-capabilities[_ngcontent-%COMP%]:not(:last-child), .research-areas[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 4rem;\n}\n@media (max-width: 991px) {\n  .research-hero[_ngcontent-%COMP%], .research-overview[_ngcontent-%COMP%], .research-capabilities[_ngcontent-%COMP%], .research-areas[_ngcontent-%COMP%] {\n    padding: 6rem 0;\n  }\n  .research-hero[_ngcontent-%COMP%]:not(:last-child), .research-overview[_ngcontent-%COMP%]:not(:last-child), .research-capabilities[_ngcontent-%COMP%]:not(:last-child), .research-areas[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 3rem;\n  }\n}\n@media (max-width: 768px) {\n  .research-hero[_ngcontent-%COMP%], .research-overview[_ngcontent-%COMP%], .research-capabilities[_ngcontent-%COMP%], .research-areas[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n  .research-hero[_ngcontent-%COMP%]:not(:last-child), .research-overview[_ngcontent-%COMP%]:not(:last-child), .research-capabilities[_ngcontent-%COMP%]:not(:last-child), .research-areas[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 2rem;\n  }\n  .research-areas[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin: -1rem;\n  }\n  .research-areas[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .research-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .research-card[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .lab-facilities[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n  .lab-facilities[_ngcontent-%COMP%]   .lab-image[_ngcontent-%COMP%] {\n    aspect-ratio: 3/2;\n  }\n  .lab-facilities[_ngcontent-%COMP%]   .lab-image[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    background:\n      linear-gradient(\n        to top,\n        rgba(0, 0, 0, 0.8),\n        rgba(0, 0, 0, 0.2));\n  }\n}\n/*# sourceMappingURL=research.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResearchComponent, { className: "ResearchComponent", filePath: "src\\app\\pages\\research\\research.component.ts", lineNumber: 20 });
})();
export {
  ResearchComponent
};
//# sourceMappingURL=chunk-33CROHJD.mjs.map
