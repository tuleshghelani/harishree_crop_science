import './polyfills.server.mjs';
import {
  require_aos
} from "./chunk-7Z6SOXOL.mjs";
import {
  provideAnimations,
  provideServerRendering
} from "./chunk-JKBLTW6F.mjs";
import {
  ProductService
} from "./chunk-D5MUVTGS.mjs";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  provideRouter
} from "./chunk-SM3HQYI7.mjs";
import {
  CommonModule,
  NgForOf,
  PLATFORM_ID,
  bootstrapApplication,
  filter,
  isPlatformBrowser,
  mergeApplicationConfig,
  provideClientHydration,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-Q6ZNKT7I.mjs";
import {
  __toESM
} from "./chunk-24VIC3GD.mjs";

// src/app/components/header/header.component.ts
var _c0 = () => ({ exact: true });
var HeaderComponent = class _HeaderComponent {
  constructor(router) {
    this.router = router;
    this.isMenuOpen = false;
  }
  ngOnInit() {
    this.navSub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.closeMenu());
  }
  ngOnDestroy() {
    this.navSub?.unsubscribe();
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(t) {
      return new (t || _HeaderComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 7, consts: [[1, "main-header"], [1, "navbar", "navbar-expand-lg"], [1, "container"], ["routerLink", "/", "aria-label", "Harishree Crop Science Home", 1, "navbar-brand"], ["src", "assets/logo/HARISHREE.png", "alt", "Harishree Crop Science", 1, "logo"], ["type", "button", "aria-label", "Toggle menu", "touch-action", "manipulation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["role", "presentation", "aria-hidden", "true", 1, "nav-overlay", 3, "click"], ["id", "navbarMenu", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/products", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/research", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/quality-assurance", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/catalogue", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/about-us", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/contact-us", "routerLinkActive", "active", 1, "nav-link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 5);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_5_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275element(6, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275listener("click", function HeaderComponent_Template_div_click_7_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 8)(9, "ul", 9)(10, "li", 10)(11, "a", 11);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_11_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(12, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li", 10)(14, "a", 12);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_14_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(15, "Products");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "li", 10)(17, "a", 13);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_17_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(18, "Research");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "li", 10)(20, "a", 14);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_20_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(21, "Quality Assurance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "li", 10)(23, "a", 15);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_23_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(24, "Catalogue");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "li", 10)(26, "a", 16);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_26_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(27, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "li", 10)(29, "a", 17);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_29_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(30, "Contact");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275attribute("aria-expanded", ctx.isMenuOpen);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("show", ctx.isMenuOpen);
        \u0275\u0275advance();
        \u0275\u0275classProp("show", ctx.isMenuOpen);
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c0));
      }
    }, dependencies: [RouterLink, RouterLinkActive, CommonModule], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --primary: #009846;\n  --primary-light: #33b46e;\n  --primary-lighter: #66cf96;\n  --primary-lightest: #e6f5ed;\n  --secondary: #529433;\n  --secondary-light: #75ac5c;\n  --secondary-lighter: #98c485;\n  --secondary-lightest: #edf4ea;\n  --accent: #fecd08;\n  --accent-light: #fed73d;\n  --accent-lighter: #fee172;\n  --accent-lightest: #fff9e6;\n  --font-primary: "DM Sans", sans-serif;\n  --font-secondary: "Libre Baskerville", serif;\n  --font-accent: "Manrope", sans-serif;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-2xl: 1.5rem;\n  --text-3xl: 1.875rem;\n  --text-4xl: 2.25rem;\n  --text-5xl: 3rem;\n  --primary-rgb:\n    0,\n    152,\n    70;\n  --secondary-rgb:\n    82,\n    148,\n    51;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary) !important;\n}\n.bg-primary-light[_ngcontent-%COMP%] {\n  background-color: var(--primary-light) !important;\n}\n.bg-primary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--primary-lighter) !important;\n}\n.bg-primary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--primary-lightest) !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary) !important;\n}\n.bg-secondary-light[_ngcontent-%COMP%] {\n  background-color: var(--secondary-light) !important;\n}\n.bg-secondary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lighter) !important;\n}\n.bg-secondary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lightest) !important;\n}\n.bg-accent[_ngcontent-%COMP%] {\n  background-color: var(--accent) !important;\n}\n.bg-accent-light[_ngcontent-%COMP%] {\n  background-color: var(--accent-light) !important;\n}\n.bg-accent-lighter[_ngcontent-%COMP%] {\n  background-color: var(--accent-lighter) !important;\n}\n.bg-accent-lightest[_ngcontent-%COMP%] {\n  background-color: var(--accent-lightest) !important;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--secondary) !important;\n}\n.text-accent[_ngcontent-%COMP%] {\n  color: var(--accent) !important;\n}\n.font-primary[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n}\n.font-secondary[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n}\n.font-accent[_ngcontent-%COMP%] {\n  font-family: var(--font-accent);\n}\n.font-regular[_ngcontent-%COMP%] {\n  font-weight: var(--font-regular);\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: var(--font-medium);\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold);\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: var(--font-bold);\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-base);\n  line-height: 1.5;\n  color: var(--gray-700);\n  touch-action: manipulation;\n}\n.catalogue-page[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%], .premium-products[_ngcontent-%COMP%], .what-we-do[_ngcontent-%COMP%], .key-features[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%], .crop-categories[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%] {\n  content-visibility: auto;\n  contain-intrinsic-size: 1px 800px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  image-rendering: -webkit-optimize-contrast;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-weight: var(--font-semibold);\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--text-5xl);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n}\nh4[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\nh5[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\nh6[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n@media (max-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n  }\n  h4[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n  }\n  h5[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n  h6[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n}\n.main-header[_ngcontent-%COMP%] {\n  background: white;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n}\n.main-header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.main-header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 75px;\n  width: 120px;\n}\n.main-header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--gray-700);\n  font-family: var(--font-primary);\n  font-weight: var(--font-medium);\n  font-size: var(--text-base);\n  padding: 0.5rem 1rem;\n  transition: color 0.3s ease;\n}\n.main-header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .main-header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.main-header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n}\n.main-header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n@media (max-width: 991px) {\n  .nav-overlay[_ngcontent-%COMP%] {\n    display: none;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.35);\n    z-index: 999;\n    touch-action: manipulation;\n  }\n  .nav-overlay.show[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .navbar-collapse[_ngcontent-%COMP%] {\n    background: white;\n    padding: 1rem;\n    border-radius: 8px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n    margin-top: 1rem;\n    position: relative;\n    z-index: 1001;\n    max-height: calc(100vh - 100px);\n    overflow-y: auto;\n  }\n  .navbar-collapse[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n    touch-action: manipulation;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\components\\header\\header.component.ts", lineNumber: 14 });
})();

// src/app/components/footer/footer.component.ts
var _c02 = () => ({ exact: true });
var _c1 = (a0) => ["/products/", a0];
function FooterComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 41);
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
function FooterComponent_li_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, product_r2.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r2.name, " ");
  }
}
var FooterComponent = class _FooterComponent {
  constructor(productService) {
    this.productService = productService;
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.featuredProducts = [];
    this.socialLinks = [
      { icon: "fab fa-twitter", url: "https://twitter.com/harishreecrop", label: "Twitter" },
      { icon: "fab fa-facebook", url: "https://www.facebook.com/profile.php?id=61573857659074", label: "Facebook" },
      { icon: "fab fa-instagram", url: "https://instagram.com/harishree_crop_science", label: "Instagram" },
      { icon: "fab fa-linkedin", url: "https://linkedin.com/company/harishree-crop-science", label: "LinkedIn" }
    ];
  }
  ngOnInit() {
    this.productService.getAllProducts().subscribe((products) => {
      this.featuredProducts = [
        products.find((p) => p.name === "Proceed"),
        products.find((p) => p.name === "X-Pro"),
        products.find((p) => p.name === "Laser"),
        products.find((p) => p.name === "Black gold"),
        products.find((p) => p.name === "Mpire 404")
      ].filter(Boolean);
    });
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(t) {
      return new (t || _FooterComponent)(\u0275\u0275directiveInject(ProductService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 98, vars: 5, consts: [[1, "main-footer"], [1, "container"], [1, "row", "g-4"], [1, "col-lg-4", "col-md-6", "mb-4", "mb-lg-0"], [1, "footer-brand"], ["src", "assets/logo/HARISHREE.png", "alt", "Harishree Crop Science Logo", "width", "150", "height", "85", 1, "footer-logo", "mb-3"], [1, "company-description"], [1, "social-connect", "mt-4"], [1, "text-uppercase", "mb-3"], [1, "social-links"], [4, "ngFor", "ngForOf"], [1, "col-lg-2", "col-md-6", "mb-4", "mb-lg-0"], [1, "footer-heading"], ["aria-label", "Footer Navigation"], [1, "footer-links"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], ["routerLink", "/research", "routerLinkActive", "active"], ["routerLink", "/quality-assurance", "routerLinkActive", "active"], ["routerLink", "/catalogue", "routerLinkActive", "active"], [1, "col-lg-3", "col-md-6", "mb-4", "mb-lg-0"], ["aria-label", "Product Navigation"], ["routerLink", "/products", "routerLinkActive", "active"], [1, "col-lg-3", "col-md-6"], [1, "contact-info"], [1, "contact-item"], [1, "fas", "fa-map-marker-alt", "icon"], [1, "details"], [1, "fas", "fa-industry", "icon"], [1, "fas", "fa-phone-alt", "icon"], ["href", "tel:+919898197196", 1, "contact-link"], [1, "fas", "fa-envelope", "icon"], ["href", "mailto:harishreecropscience@gmail.com", 1, "contact-link"], [1, "footer-bottom"], [1, "row", "align-items-center"], [1, "col-md-6", "text-center", "text-md-start", "mb-3", "mb-md-0"], [1, "copyright-text"], [1, "col-md-6", "text-center", "text-md-end"], [1, "developer-text"], ["href", "https://www.linkedin.com/in/tuleshghelani/", "target", "_blank", "rel", "noopener noreferrer", 1, "dev-link"], ["target", "_blank", "rel", "noopener noreferrer", 1, "social-btn", 3, "href"], ["routerLinkActive", "active", 3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "p", 6);
        \u0275\u0275text(7, " Leading manufacturer of agricultural products committed to sustainable farming solutions and environmental stewardship. Empowering farmers with quality inputs for a better harvest. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 7)(9, "h6", 8);
        \u0275\u0275text(10, "Follow Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275template(12, FooterComponent_ng_container_12_Template, 3, 4, "ng-container", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 11)(14, "h5", 12);
        \u0275\u0275text(15, "Quick Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "nav", 13)(17, "ul", 14)(18, "li")(19, "a", 15);
        \u0275\u0275text(20, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "li")(22, "a", 16);
        \u0275\u0275text(23, "About Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "li")(25, "a", 17);
        \u0275\u0275text(26, "Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "li")(28, "a", 18);
        \u0275\u0275text(29, "R&D");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "li")(31, "a", 19);
        \u0275\u0275text(32, "Quality");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "li")(34, "a", 20);
        \u0275\u0275text(35, "Catalogue");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(36, "div", 21)(37, "h5", 12);
        \u0275\u0275text(38, "Our Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "nav", 22)(40, "ul", 14)(41, "li")(42, "a", 23);
        \u0275\u0275text(43, "All Products");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(44, FooterComponent_li_44_Template, 3, 4, "li", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 24)(46, "h5", 12);
        \u0275\u0275text(47, "Get in Touch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "address", 25)(49, "div", 26);
        \u0275\u0275element(50, "i", 27);
        \u0275\u0275elementStart(51, "div", 28)(52, "h6");
        \u0275\u0275text(53, "Corporate Office");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p");
        \u0275\u0275text(55, " G-11, Saikruti Complex,");
        \u0275\u0275element(56, "br");
        \u0275\u0275text(57, " Gotri Road, Vadodara,");
        \u0275\u0275element(58, "br");
        \u0275\u0275text(59, " Gujarat-390021, India ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "div", 26);
        \u0275\u0275element(61, "i", 29);
        \u0275\u0275elementStart(62, "div", 28)(63, "h6");
        \u0275\u0275text(64, "Manufacturing Unit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "p");
        \u0275\u0275text(66, " Survey No.751, Targhari,");
        \u0275\u0275element(67, "br");
        \u0275\u0275text(68, " Jamnagar Road,");
        \u0275\u0275element(69, "br");
        \u0275\u0275text(70, " Gujarat-360110, India ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "div", 26);
        \u0275\u0275element(72, "i", 30);
        \u0275\u0275elementStart(73, "div", 28)(74, "h6");
        \u0275\u0275text(75, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "a", 31);
        \u0275\u0275text(77, "+91 9898197196");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 26);
        \u0275\u0275element(79, "i", 32);
        \u0275\u0275elementStart(80, "div", 28)(81, "h6");
        \u0275\u0275text(82, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "a", 33);
        \u0275\u0275text(84, "harishreecropscience@gmail.com");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(85, "div", 34)(86, "div", 35)(87, "div", 36)(88, "p", 37);
        \u0275\u0275text(89);
        \u0275\u0275elementStart(90, "strong");
        \u0275\u0275text(91, "Harishree Crop Science");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, ". All rights reserved. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 38)(94, "p", 39);
        \u0275\u0275text(95, " Managed by ");
        \u0275\u0275elementStart(96, "a", 40);
        \u0275\u0275text(97, "Tulesh Ghelani");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngForOf", ctx.socialLinks);
        \u0275\u0275advance(7);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c02));
        \u0275\u0275advance(25);
        \u0275\u0275property("ngForOf", ctx.featuredProducts);
        \u0275\u0275advance(45);
        \u0275\u0275textInterpolate1(" \xA9 ", ctx.currentYear, " ");
      }
    }, dependencies: [CommonModule, NgForOf, RouterLink, RouterLinkActive], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --primary: #009846;\n  --primary-light: #33b46e;\n  --primary-lighter: #66cf96;\n  --primary-lightest: #e6f5ed;\n  --secondary: #529433;\n  --secondary-light: #75ac5c;\n  --secondary-lighter: #98c485;\n  --secondary-lightest: #edf4ea;\n  --accent: #fecd08;\n  --accent-light: #fed73d;\n  --accent-lighter: #fee172;\n  --accent-lightest: #fff9e6;\n  --font-primary: "DM Sans", sans-serif;\n  --font-secondary: "Libre Baskerville", serif;\n  --font-accent: "Manrope", sans-serif;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-2xl: 1.5rem;\n  --text-3xl: 1.875rem;\n  --text-4xl: 2.25rem;\n  --text-5xl: 3rem;\n  --primary-rgb:\n    0,\n    152,\n    70;\n  --secondary-rgb:\n    82,\n    148,\n    51;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary) !important;\n}\n.bg-primary-light[_ngcontent-%COMP%] {\n  background-color: var(--primary-light) !important;\n}\n.bg-primary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--primary-lighter) !important;\n}\n.bg-primary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--primary-lightest) !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary) !important;\n}\n.bg-secondary-light[_ngcontent-%COMP%] {\n  background-color: var(--secondary-light) !important;\n}\n.bg-secondary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lighter) !important;\n}\n.bg-secondary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lightest) !important;\n}\n.bg-accent[_ngcontent-%COMP%] {\n  background-color: var(--accent) !important;\n}\n.bg-accent-light[_ngcontent-%COMP%] {\n  background-color: var(--accent-light) !important;\n}\n.bg-accent-lighter[_ngcontent-%COMP%] {\n  background-color: var(--accent-lighter) !important;\n}\n.bg-accent-lightest[_ngcontent-%COMP%] {\n  background-color: var(--accent-lightest) !important;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--secondary) !important;\n}\n.text-accent[_ngcontent-%COMP%] {\n  color: var(--accent) !important;\n}\n.font-primary[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n}\n.font-secondary[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n}\n.font-accent[_ngcontent-%COMP%] {\n  font-family: var(--font-accent);\n}\n.font-regular[_ngcontent-%COMP%] {\n  font-weight: var(--font-regular);\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: var(--font-medium);\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold);\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: var(--font-bold);\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-base);\n  line-height: 1.5;\n  color: var(--gray-700);\n  touch-action: manipulation;\n}\n.catalogue-page[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%], .premium-products[_ngcontent-%COMP%], .what-we-do[_ngcontent-%COMP%], .key-features[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%], .crop-categories[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%] {\n  content-visibility: auto;\n  contain-intrinsic-size: 1px 800px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  image-rendering: -webkit-optimize-contrast;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-weight: var(--font-semibold);\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--text-5xl);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n}\nh4[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\nh5[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\nh6[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n@media (max-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n  }\n  h4[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n  }\n  h5[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n  h6[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n}\n.main-footer[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-lightest) 0%,\n      #ffffff 100%);\n  padding: 5rem 0 0;\n  color: var(--gray-700);\n  position: relative;\n  overflow: hidden;\n  border-top: 1px solid rgba(var(--primary-rgb), 0.1);\n}\n.main-footer[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(var(--secondary-rgb), 0.05) 0%,\n      transparent 70%);\n  z-index: 0;\n}\n.main-footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  height: 85px;\n  width: auto;\n  margin-bottom: 1.5rem;\n  transition: transform 0.3s ease;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.main-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .company-description[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-base);\n  line-height: 1.7;\n  color: var(--gray-600);\n  max-width: 90%;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  color: #1a5c35;\n  margin-bottom: 1.5rem;\n  position: relative;\n  display: inline-block;\n  padding-bottom: 0.75rem;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-heading[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 40px;\n  height: 3px;\n  background-color: var(--accent);\n  border-radius: 2px;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.875rem;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--gray-700);\n  text-decoration: none;\n  font-family: var(--font-primary);\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: "\\203a";\n  margin-right: 8px;\n  color: var(--accent);\n  font-weight: bold;\n  transition: transform 0.3s ease;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .main-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  padding-left: 5px;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before, .main-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::before {\n  transform: translateX(3px);\n}\n.main-footer[_ngcontent-%COMP%]   .social-connect[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: var(--font-accent);\n  font-size: 0.875rem;\n  letter-spacing: 1px;\n  color: var(--gray-500);\n  font-weight: 700;\n}\n.main-footer[_ngcontent-%COMP%]   .social-connect[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.main-footer[_ngcontent-%COMP%]   .social-connect[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--primary);\n  text-decoration: none;\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);\n}\n.main-footer[_ngcontent-%COMP%]   .social-connect[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.main-footer[_ngcontent-%COMP%]   .social-connect[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary);\n  color: white;\n  transform: translateY(-5px);\n  box-shadow: 0 10px 15px rgba(var(--primary-rgb), 0.2);\n}\n.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n}\n.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 1.25rem;\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  min-width: 24px;\n  text-align: center;\n}\n.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: var(--font-accent);\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: #1a5c35;\n  margin-bottom: 0.25rem;\n}\n.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .contact-link[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: 0.95rem;\n  color: var(--gray-600);\n  margin: 0;\n  line-height: 1.5;\n}\n.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .contact-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .contact-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  padding: 2rem 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .copyright-text[_ngcontent-%COMP%], .main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .developer-text[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: 0.9rem;\n  color: var(--gray-500);\n  margin: 0;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .copyright-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .developer-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .dev-link[_ngcontent-%COMP%] {\n  color: var(--secondary);\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .dev-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  text-decoration: underline;\n}\n@media (max-width: 991px) {\n  .main-footer[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 3rem;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .company-description[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .social-connect[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-heading[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    text-align: left;\n  }\n}\n@media (max-width: 767px) {\n  .main-footer[_ngcontent-%COMP%] {\n    padding-top: 3rem;\n    text-align: left;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n    margin: 0 0 1rem 0;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .company-description[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .social-connect[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .text-md-end[_ngcontent-%COMP%] {\n    text-align: center !important;\n    margin-top: 1rem;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .copyright-text[_ngcontent-%COMP%], .main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .developer-text[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n@media (pointer: coarse) {\n  .main-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-footer[_ngcontent-%COMP%]   .social-connect[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%], .main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-link[_ngcontent-%COMP%] {\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\components\\footer\\footer.component.ts", lineNumber: 14 });
})();

// src/app/app.component.ts
var import_aos = __toESM(require_aos());
var AppComponent = class _AppComponent {
  constructor(router, platformId) {
    this.router = router;
    this.platformId = platformId;
    this.title = "harishree_crop_science";
    if (isPlatformBrowser(this.platformId)) {
      import_aos.default.init({ duration: 600, easing: "ease-out", once: true, offset: 60 });
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          setTimeout(() => import_aos.default.refresh(), 50);
        }
      });
    }
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "main");
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "app-footer");
      }
    }, dependencies: [RouterOutlet, HeaderComponent, FooterComponent], styles: ["\n\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 15 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", loadComponent: () => import("./chunk-ZMZOLGTA.mjs").then((m) => m.HomeComponent) },
  { path: "about-us", loadComponent: () => import("./chunk-AQJGQDHR.mjs").then((m) => m.AboutComponent) },
  { path: "contact-us", loadComponent: () => import("./chunk-ILXRUM4B.mjs").then((m) => m.ContactUsComponent) },
  { path: "products", loadComponent: () => import("./chunk-V7Q6E7HV.mjs").then((m) => m.ProductsComponent) },
  { path: "products/:productName", loadComponent: () => import("./chunk-V7Q6E7HV.mjs").then((m) => m.ProductsComponent) },
  { path: "catalogue", loadComponent: () => import("./chunk-UP5YER4G.mjs").then((m) => m.CatalogueComponent) },
  { path: "research", loadComponent: () => import("./chunk-33CROHJD.mjs").then((m) => m.ResearchComponent) },
  { path: "quality-assurance", loadComponent: () => import("./chunk-LB5GNGZF.mjs").then((m) => m.QualityAssuranceComponent) },
  { path: "product/proceed", loadComponent: () => import("./chunk-Q2PRMMDW.mjs").then((m) => m.ProceedComponent) },
  { path: "product/thio-h", loadComponent: () => import("./chunk-WXDFI3IG.mjs").then((m) => m.ThioHComponent) },
  { path: "product/super-fs", loadComponent: () => import("./chunk-VVIM2RY6.mjs").then((m) => m.SuperFsComponent) },
  { path: "product/mpire-404", loadComponent: () => import("./chunk-DHPR4HB4.mjs").then((m) => m.Mpire404Component) },
  { path: "product/h-fun", loadComponent: () => import("./chunk-CZHF2GES.mjs").then((m) => m.HFunComponent) },
  { path: "product/glyphosate-41-sl", loadComponent: () => import("./chunk-N2I5DJIX.mjs").then((m) => m.Glyphosate41SlComponent) },
  { path: "product/round", redirectTo: "product/glyphosate-41-sl", pathMatch: "full" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations()
  ]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
//# sourceMappingURL=chunk-7TNBDHVD.mjs.map
