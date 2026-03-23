import './polyfills.server.mjs';
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
  ɵɵclassMap,
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
  ɵɵtrustConstantResourceUrl
} from "./chunk-Q6ZNKT7I.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/pages/contact-us/contact-us.component.ts
function ContactUsComponent_ng_container_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 31);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const social_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", social_r1.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", social_r1.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(social_r1.icon);
  }
}
var META_KEY = makeStateKey("contact-meta-data");
var STRUCTURED_DATA_KEY = makeStateKey("contact-structured-data");
var ContactUsComponent = class _ContactUsComponent {
  constructor(meta, title, transferState, platformId) {
    this.meta = meta;
    this.title = title;
    this.transferState = transferState;
    this.platformId = platformId;
    this.baseUrl = environment.baseUrl;
    this.socialLinks = [
      { icon: "fab fa-twitter", url: "https://twitter.com/harishreecrop", label: "Twitter" },
      { icon: "fab fa-facebook", url: "https://www.facebook.com/profile.php?id=61573857659074", label: "Facebook" },
      { icon: "fab fa-instagram", url: "https://instagram.com/harishree_crop_science", label: "Instagram" },
      { icon: "fab fa-linkedin", url: "https://linkedin.com/company/harishree-crop-science", label: "LinkedIn" }
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
    if (this.transferState.hasKey(META_KEY))
      return;
    this.title.setTitle("Contact Harishree Crop Science | Get in Touch");
    const metaTags = [
      { name: "description", content: "Contact Harishree Crop Science for sustainable agricultural solutions. Reach out to us for inquiries about our eco-friendly farming products and services." },
      { name: "keywords", content: "contact Harishree Crop Science, agricultural solutions contact, farming products inquiry, sustainable agriculture contact" },
      { property: "og:title", content: "Contact Harishree Crop Science | Get in Touch" },
      { property: "og:description", content: "Contact us for innovative agricultural solutions and sustainable farming products." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      { name: "twitter:card", content: "summary_large_image" },
      // { name: 'canonical', content: `${this.baseUrl}/contact-us` },
      { property: "og:url", content: `${this.baseUrl}/contact-us` },
      { property: "og:type", content: "website" },
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
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Harishree Crop Science",
      "description": "Contact page for Harishree Crop Science",
      "url": `${this.baseUrl}/contact`,
      "mainEntity": {
        "@type": "Organization",
        "name": "Harishree Crop Science",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No.57, survey no. 751, Palki 2 harsiddhi park - 1",
          "addressLocality": "Near jawahar navoday vidhyalay",
          "addressRegion": "Gujarat",
          "postalCode": "360110",
          "addressCountry": "India"
        },
        "telephone": "+919898197196",
        "email": "harishreecropscience@gmail.com"
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
    this.\u0275fac = function ContactUsComponent_Factory(t) {
      return new (t || _ContactUsComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(TransferState), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactUsComponent, selectors: [["app-contact-us"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 86, vars: 1, consts: [["itemscope", "", "itemtype", "https://schema.org/ContactPage"], [1, "contact-hero"], [1, "hero-content"], ["data-aos", "fade-up"], ["data-aos", "fade-up", "data-aos-delay", "200"], [1, "hero-bg"], ["viewBox", "0 0 1440 160", "preserveAspectRatio", "none"], ["fill", "var(--primary-lightest)", "d", "M0,48L48,56C96,64,192,80,288,80C384,80,480,64,576,56C672,48,768,48,864,56C960,64,1056,80,1152,80C1248,80,1344,64,1392,56L1440,48L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"], [1, "contact-info"], [1, "container"], [1, "row"], ["data-aos", "fade-up", 1, "col-lg-6"], [1, "info-card"], [1, "icon"], [1, "fas", "fa-industry"], ["itemprop", "address", "itemscope", "", "itemtype", "http://schema.org/PostalAddress"], ["itemprop", "streetAddress"], ["itemprop", "addressRegion"], ["itemprop", "postalCode"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-6"], [1, "fas", "fa-building"], [1, "fas", "fa-phone-alt"], ["href", "tel:+919898197196", "itemprop", "telephone"], ["href", "mailto:harishreecropscience@gmail.com", "itemprop", "email"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "col-lg-6"], [1, "fas", "fa-share-alt"], [1, "social-links"], [4, "ngFor", "ngForOf"], [1, "map-section"], ["data-aos", "zoom-in", 1, "map-container"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.3739903052706!2d70.68711247529475!3d22.37725437963127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cf8e16ba1eb7%3A0x583c735a955954ba!2sHARISHREE%20CROP%20SCIENCE!5e0!3m2!1sen!2sin!4v1738732043029!5m2!1sen!2sin`, "width", "100%", "height", "450", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], ["target", "_blank", "rel", "noopener", 3, "href"]], template: function ContactUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Contact Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4)(6, "strong");
        \u0275\u0275text(7, "Get in touch with us for sustainable agricultural solutions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 6);
        \u0275\u0275element(10, "path", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "section", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13);
        \u0275\u0275element(17, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "h3");
        \u0275\u0275text(19, "Manufacturing Unit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p", 15)(21, "span", 16);
        \u0275\u0275text(22, " Plot No.57, Survey No.751");
        \u0275\u0275element(23, "br");
        \u0275\u0275text(24, " Palki 2 Harsiddhi Park-1");
        \u0275\u0275element(25, "br");
        \u0275\u0275text(26, " Near Jawahar Navoday Vidhyalay");
        \u0275\u0275element(27, "br");
        \u0275\u0275text(28, " Jamnagar Road, Targhari ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "br");
        \u0275\u0275elementStart(30, "span", 17);
        \u0275\u0275text(31, "Gujarat");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, " - ");
        \u0275\u0275elementStart(33, "span", 18);
        \u0275\u0275text(34, "360110");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(35, "div", 19)(36, "div", 12)(37, "div", 13);
        \u0275\u0275element(38, "i", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "h3");
        \u0275\u0275text(40, "Corporate Office");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 15)(42, "span", 16);
        \u0275\u0275text(43, " Survey No.753, Plot No. 16 and 18");
        \u0275\u0275element(44, "br");
        \u0275\u0275text(45, " G-11, Ground Floor, Saikruti Complex");
        \u0275\u0275element(46, "br");
        \u0275\u0275text(47, " Harinagar Char Rasta, Gotri Road");
        \u0275\u0275element(48, "br");
        \u0275\u0275text(49, " Gotri, Vadodara ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "br");
        \u0275\u0275elementStart(51, "span", 17);
        \u0275\u0275text(52, "Gujarat");
        \u0275\u0275elementEnd();
        \u0275\u0275text(53, " - ");
        \u0275\u0275elementStart(54, "span", 18);
        \u0275\u0275text(55, "390021");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "div", 19)(57, "div", 12)(58, "div", 13);
        \u0275\u0275element(59, "i", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "h3");
        \u0275\u0275text(61, "Contact Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p")(63, "strong");
        \u0275\u0275text(64, "Phone:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(65, "br");
        \u0275\u0275elementStart(66, "a", 22);
        \u0275\u0275text(67, "+91 9898197196");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "p")(69, "strong");
        \u0275\u0275text(70, "Email:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(71, "br");
        \u0275\u0275elementStart(72, "a", 23);
        \u0275\u0275text(73, "harishreecropscience@gmail.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(74, "div", 24)(75, "div", 12)(76, "div", 13);
        \u0275\u0275element(77, "i", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "h3");
        \u0275\u0275text(79, "Connect With Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 26);
        \u0275\u0275template(81, ContactUsComponent_ng_container_81_Template, 3, 4, "ng-container", 27);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(82, "section", 28)(83, "div", 9)(84, "div", 29);
        \u0275\u0275element(85, "iframe", 30);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(81);
        \u0275\u0275property("ngForOf", ctx.socialLinks);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --primary: #009846;\n  --primary-light: #33b46e;\n  --primary-lighter: #66cf96;\n  --primary-lightest: #e6f5ed;\n  --secondary: #529433;\n  --secondary-light: #75ac5c;\n  --secondary-lighter: #98c485;\n  --secondary-lightest: #edf4ea;\n  --accent: #fecd08;\n  --accent-light: #fed73d;\n  --accent-lighter: #fee172;\n  --accent-lightest: #fff9e6;\n  --font-primary: "DM Sans", sans-serif;\n  --font-secondary: "Libre Baskerville", serif;\n  --font-accent: "Manrope", sans-serif;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-2xl: 1.5rem;\n  --text-3xl: 1.875rem;\n  --text-4xl: 2.25rem;\n  --text-5xl: 3rem;\n  --primary-rgb:\n    0,\n    152,\n    70;\n  --secondary-rgb:\n    82,\n    148,\n    51;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary) !important;\n}\n.bg-primary-light[_ngcontent-%COMP%] {\n  background-color: var(--primary-light) !important;\n}\n.bg-primary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--primary-lighter) !important;\n}\n.bg-primary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--primary-lightest) !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary) !important;\n}\n.bg-secondary-light[_ngcontent-%COMP%] {\n  background-color: var(--secondary-light) !important;\n}\n.bg-secondary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lighter) !important;\n}\n.bg-secondary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lightest) !important;\n}\n.bg-accent[_ngcontent-%COMP%] {\n  background-color: var(--accent) !important;\n}\n.bg-accent-light[_ngcontent-%COMP%] {\n  background-color: var(--accent-light) !important;\n}\n.bg-accent-lighter[_ngcontent-%COMP%] {\n  background-color: var(--accent-lighter) !important;\n}\n.bg-accent-lightest[_ngcontent-%COMP%] {\n  background-color: var(--accent-lightest) !important;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--secondary) !important;\n}\n.text-accent[_ngcontent-%COMP%] {\n  color: var(--accent) !important;\n}\n.font-primary[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n}\n.font-secondary[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n}\n.font-accent[_ngcontent-%COMP%] {\n  font-family: var(--font-accent);\n}\n.font-regular[_ngcontent-%COMP%] {\n  font-weight: var(--font-regular);\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: var(--font-medium);\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold);\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: var(--font-bold);\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-base);\n  line-height: 1.5;\n  color: var(--gray-700);\n  touch-action: manipulation;\n}\n.catalogue-page[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%], .premium-products[_ngcontent-%COMP%], .what-we-do[_ngcontent-%COMP%], .key-features[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%], .crop-categories[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%] {\n  content-visibility: auto;\n  contain-intrinsic-size: 1px 800px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  image-rendering: -webkit-optimize-contrast;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-weight: var(--font-semibold);\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--text-5xl);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n}\nh4[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\nh5[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\nh6[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n@media (max-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n  }\n  h4[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n  }\n  h5[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n  h6[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n}\n.contact-hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 52vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  padding: 2rem 1rem;\n}\n.contact-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 152, 70, 0.9) 0%,\n      rgba(82, 148, 51, 0.85) 100%);\n  z-index: 1;\n}\n.contact-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  color: white;\n  padding: 2rem 1rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.contact-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 5vw, 4rem);\n  margin-bottom: 1.5rem;\n  font-weight: var(--font-bold);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n.contact-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: clamp(1rem, 3vw, 1.5rem);\n  margin: 0 auto;\n  max-width: 600px;\n  padding: 0 1rem;\n  opacity: 1;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  line-height: 1.6;\n  letter-spacing: 0.5px;\n}\n.contact-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  z-index: 3;\n}\n.contact-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.contact-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: var(--primary-lightest);\n}\n.contact-info[_ngcontent-%COMP%] {\n  padding: 3rem 1rem;\n  background: var(--light);\n}\n.contact-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 1rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  height: 100%;\n  transition: transform 0.3s ease;\n  margin-bottom: 2rem;\n}\n.contact-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  border: 1px solid var(--secondary);\n}\n.contact-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--primary);\n  margin-bottom: 1.5rem;\n}\n.contact-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: var(--dark);\n}\n.contact-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray);\n  margin-bottom: 0.5rem;\n}\n.contact-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.contact-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-dark);\n}\n@media (max-width: 768px) {\n  .contact-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    margin: 1rem;\n  }\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--primary-lightest);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--primary);\n  transition: all 0.3s ease;\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  transform: translateY(-3px);\n}\n.map-section[_ngcontent-%COMP%] {\n  padding: 3rem 1rem;\n  background: white;\n}\n.map-section[_ngcontent-%COMP%]   .map-container[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  overflow: hidden;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  margin: 0 1rem;\n}\n@media (max-width: 768px) {\n  .map-section[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n  }\n}\n@media (max-width: 991px) {\n  .contact-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n}\n@media (max-width: 768px) {\n  .contact-hero[_ngcontent-%COMP%] {\n    padding: 4rem 0 6rem;\n  }\n  .contact-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n.contact-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n@media (max-width: 576px) {\n  .contact-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .social-links[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 1rem 0;\n  }\n}\n/*# sourceMappingURL=contact-us.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactUsComponent, { className: "ContactUsComponent", filePath: "src\\app\\pages\\contact-us\\contact-us.component.ts", lineNumber: 18 });
})();
export {
  ContactUsComponent
};
//# sourceMappingURL=chunk-ILXRUM4B.mjs.map
