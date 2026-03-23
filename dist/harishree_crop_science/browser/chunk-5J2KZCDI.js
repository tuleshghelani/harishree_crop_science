import {
  ProductService
} from "./chunk-R2RWIPHT.js";
import {
  ActivatedRoute,
  RouterModule
} from "./chunk-4MSA62PL.js";
import {
  environment
} from "./chunk-TP5SVJPG.js";
import {
  CommonModule,
  Location,
  Meta,
  NgForOf,
  NgIf,
  PLATFORM_ID,
  Subject,
  Title,
  TransferState,
  ViewContainerRef,
  isPlatformBrowser,
  makeStateKey2 as makeStateKey,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpropertyInterpolate1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FE7VCITN.js";

// src/app/shared/services/dialog.service.ts
var DialogService = class _DialogService {
  constructor() {
    this.dialogContainer = null;
    this.dialogRef = null;
    this.backdropElement = null;
    this.closeSubject = new Subject();
    this.onClose$ = this.closeSubject.asObservable();
  }
  setContainer(container) {
    this.dialogContainer = container;
  }
  open(component, data) {
    if (!this.dialogContainer)
      return;
    this.createBackdrop();
    this.dialogRef = this.dialogContainer.createComponent(component);
    this.dialogRef.instance.data = data;
    document.body.style.overflow = "hidden";
  }
  close() {
    if (this.dialogRef) {
      this.dialogRef.destroy();
      this.dialogRef = null;
    }
    if (this.backdropElement) {
      document.body.removeChild(this.backdropElement);
      this.backdropElement = null;
    }
    document.body.style.overflow = "";
    this.closeSubject.next();
  }
  createBackdrop() {
    this.backdropElement = document.createElement("div");
    this.backdropElement.className = "dialog-backdrop";
    document.body.appendChild(this.backdropElement);
    this.backdropElement.addEventListener("click", () => this.close());
  }
  static {
    this.\u0275fac = function DialogService_Factory(t) {
      return new (t || _DialogService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DialogService, factory: _DialogService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/components/product-dialog/product-dialog.component.ts
var ProductDialogComponent = class _ProductDialogComponent {
  constructor(dialogService) {
    this.dialogService = dialogService;
    this.data = { product: {} };
  }
  close() {
    this.dialogService.close();
  }
  static {
    this.\u0275fac = function ProductDialogComponent_Factory(t) {
      return new (t || _ProductDialogComponent)(\u0275\u0275directiveInject(DialogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDialogComponent, selectors: [["app-product-dialog"]], inputs: { data: "data" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 5, consts: [["data-aos", "zoom-in", 1, "custom-dialog"], [1, "dialog-content"], [1, "close-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["d", "M18 6L6 18M6 6l12 12", "stroke-width", "2", "stroke-linecap", "round"], [1, "product-details"], [1, "product-image"], ["loading", "lazy", 3, "src", "alt"], [1, "product-info"], [1, "description"], [1, "full-description"]], template: function ProductDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function ProductDialogComponent_Template_button_click_2_listener() {
          return ctx.close();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "path", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
        \u0275\u0275element(7, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 8)(9, "h2");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 9);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "h3");
        \u0275\u0275text(15, "Product Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p");
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("src", ctx.data.product.image, \u0275\u0275sanitizeUrl)("alt", ctx.data.product.name);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.data.product.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.data.product.description);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.data.product.fullDescription);
      }
    }, dependencies: [CommonModule], styles: ['\n\n[_nghost-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.custom-dialog[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom right,\n      #ffffff,\n      #f8f9fa);\n  border-radius: 20px;\n  box-shadow: 0 20px 60px rgba(var(--secondary-rgb), 0.45);\n  border: 1px solid var(--secondary);\n  width: 90%;\n  max-width: 1200px;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  animation: _ngcontent-%COMP%_dialogEntry 0.4s ease-out;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%] {\n  padding: 3rem;\n  overflow-y: auto;\n  max-height: 90vh;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  background: rgba(var(--primary-rgb), 0.1);\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 0.75rem;\n  color: var(--primary);\n  transition: all 0.3s ease;\n  z-index: 2;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  transition: transform 0.3s ease;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  transform: rotate(90deg);\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.8fr 1.2fr;\n  gap: 4rem;\n  align-items: start;\n}\n@media (max-width: 991px) {\n  .custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(var(--primary-rgb), 0.1),\n      rgba(var(--secondary-rgb), 0.1));\n  border-radius: 12px;\n  z-index: -1;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 450px;\n  object-fit: cover;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--primary);\n  margin-bottom: 1rem;\n  font-size: 2.5rem;\n  font-weight: 600;\n  line-height: 1.2;\n  position: relative;\n  padding-bottom: 1rem;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 60px;\n  height: 4px;\n  background: var(--primary);\n  border-radius: 2px;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-primary);\n  margin-bottom: 2rem;\n  line-height: 1.6;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .full-description[_ngcontent-%COMP%] {\n  background: rgba(var(--primary-rgb), 0.03);\n  padding: 2rem;\n  border-radius: 12px;\n  border: 1px solid rgba(var(--primary-rgb), 0.1);\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .full-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary);\n  margin-bottom: 1rem;\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .full-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  color: var(--text-secondary);\n  font-size: 1.1rem;\n}\n@keyframes _ngcontent-%COMP%_dialogEntry {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n/*# sourceMappingURL=product-dialog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDialogComponent, { className: "ProductDialogComponent", filePath: "src\\app\\shared\\components\\product-dialog\\product-dialog.component.ts", lineNumber: 37 });
})();

// src/app/pages/products/products.component.ts
function ProductsComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function ProductsComponent_button_16_Template_button_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveCategory(category_r2.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeCategory === category_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r2.name, " ");
  }
}
function ProductsComponent_ng_container_18_div_1_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "button", 27)(2, "a", 28);
    \u0275\u0275text(3, "View Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("href", "/", product_r4.url, "", \u0275\u0275sanitizeUrl);
  }
}
function ProductsComponent_ng_container_18_div_1_div_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 29);
    \u0275\u0275listener("click", function ProductsComponent_ng_container_18_div_1_div_2_div_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const product_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openProductDialog(product_r4.name));
    });
    \u0275\u0275text(2, "View Details");
    \u0275\u0275elementEnd()();
  }
}
function ProductsComponent_ng_container_18_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22);
    \u0275\u0275element(3, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 25);
    \u0275\u0275template(10, ProductsComponent_ng_container_18_div_1_div_2_div_10_Template, 4, 2, "div", 26)(11, ProductsComponent_ng_container_18_div_1_div_2_div_11_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    \u0275\u0275attribute("data-aos", "fade-up")("data-aos-delay", 100);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", product_r4.image, \u0275\u0275sanitizeUrl)("alt", product_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r4.url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !product_r4.url);
  }
}
function ProductsComponent_ng_container_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 14);
    \u0275\u0275template(2, ProductsComponent_ng_container_18_div_1_div_2_Template, 12, 8, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", category_r6.products)("ngForTrackBy", ctx_r2.trackByProduct);
  }
}
function ProductsComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductsComponent_ng_container_18_div_1_Template, 3, 2, "div", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeCategory === category_r6.name);
  }
}
var META_KEY = makeStateKey("products-meta-data");
var STRUCTURED_DATA_KEY = makeStateKey("products-structured-data");
var ProductsComponent = class _ProductsComponent {
  constructor(meta, title, transferState, productService, location, dialogService, viewContainerRef, route, platformId) {
    this.meta = meta;
    this.title = title;
    this.transferState = transferState;
    this.productService = productService;
    this.location = location;
    this.dialogService = dialogService;
    this.viewContainerRef = viewContainerRef;
    this.route = route;
    this.platformId = platformId;
    this.baseUrl = environment.baseUrl;
    this.categories = [];
    this.activeCategory = "Insecticide";
    this.trackByCategory = (_, item) => item.name;
    this.trackByProduct = (_, item) => item.name;
  }
  ngOnInit() {
    this.loadCategories();
    this.setMetaData();
    this.setStructuredData();
    this.dialogService.setContainer(this.viewContainerRef);
    this.route.params.subscribe((params) => {
      if (params["productName"]) {
        this.openProductDialog(params["productName"]);
      }
    });
  }
  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }
  loadCategories() {
    const catFromUrl = this.route.snapshot.queryParams["category"];
    this.productService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      if (catFromUrl && categories.some((c) => c.name === catFromUrl)) {
        this.activeCategory = catFromUrl;
      }
    });
  }
  setActiveCategory(category) {
    this.activeCategory = category;
  }
  setMetaData() {
    if (this.transferState.hasKey(META_KEY))
      return;
    this.title.setTitle("Agricultural Products | Harishree Crop Science");
    const metaTags = [
      { name: "description", content: "Discover our premium range of organic pesticides, bio-fertilizers, and eco-friendly crop protection solutions. Trusted by farmers for sustainable agriculture and enhanced crop yield." },
      { name: "keywords", content: "organic pesticides, bio fertilizers, crop protection solutions, agricultural products, sustainable farming products, organic farming solutions, agricultural chemicals india" },
      { property: "og:title", content: "Agricultural Products | Organic Pesticides & Bio Fertilizers" },
      { property: "og:description", content: "Premium agricultural solutions including organic pesticides, bio-fertilizers, and crop protection products for sustainable farming." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      // { name: 'canonical', content: `${this.baseUrl}/products` },
      { property: "og:url", content: `${this.baseUrl}/products` },
      { property: "og:type", content: "website" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: "Harishree Crop Science" }
    ];
    metaTags.forEach((tag) => this.meta.updateTag(tag));
    this.transferState.set(META_KEY, true);
  }
  setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY) || !isPlatformBrowser(this.platformId))
      return;
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://harishreecropscience.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://harishreecropscience.com/products?search={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Insecticides",
          "description": "High-quality insecticides for crop protection",
          "url": "https://harishreecropscience.com/products#insecticide"
        },
        {
          "@type": "WebPage",
          "name": "Fungicides",
          "description": "Effective fungicides for plant disease control",
          "url": "https://harishreecropscience.com/products#fungicide"
        },
        {
          "@type": "WebPage",
          "name": "Herbicides",
          "description": "Selective herbicides for weed control",
          "url": "https://harishreecropscience.com/products#herbicide"
        }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
  openProductDialog(productName) {
    const product = this.findProductByName(productName);
    if (!product)
      return;
    this.dialogService.open(ProductDialogComponent, { product });
    this.location.replaceState(`/products/${encodeURIComponent(productName)}`);
    this.dialogService.onClose$.subscribe(() => {
      this.location.replaceState("/products");
    });
  }
  findProductByName(name) {
    return this.categories.flatMap((category) => category.products).find((product) => product.name === name);
  }
  static {
    this.\u0275fac = function ProductsComponent_Factory(t) {
      return new (t || _ProductsComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(TransferState), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsComponent, selectors: [["app-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 3, consts: [[1, "products-page"], [1, "products-hero"], [1, "hero-content"], ["data-aos", "fade-up"], ["data-aos", "fade-up", "data-aos-delay", "200"], [1, "hero-bg"], ["viewBox", "0 0 1440 160", "preserveAspectRatio", "none"], ["fill", "var(--primary-lightest)", "d", "M0,48L48,56C96,64,192,80,288,80C384,80,480,64,576,56C672,48,768,48,864,56C960,64,1056,80,1152,80C1248,80,1344,64,1392,56L1440,48L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"], [1, "products-section"], [1, "container-wrapper"], [1, "container-fluid", "px-4"], ["data-aos", "fade-up", 1, "category-nav"], [1, "nav-scroll"], ["class", "category-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "row", "g-4"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "category-btn", 3, "click"], ["class", "products-grid w-100", 4, "ngIf"], [1, "products-grid", "w-100"], ["class", "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-xl-3", "col-lg-4", "col-md-6", "col-sm-6", "col-12"], [1, "product-card"], [1, "product-image"], ["loading", "lazy", "decoding", "async", "referrerpolicy", "no-referrer", 3, "src", "alt"], [1, "product-content"], [1, "product-footer"], [4, "ngIf"], [1, "btn", "btn-primary", "btn-sm"], [3, "href"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function ProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Our Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4)(6, "strong");
        \u0275\u0275text(7, "Discover our comprehensive range of agricultural solutions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 6);
        \u0275\u0275element(10, "path", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "section", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12);
        \u0275\u0275template(16, ProductsComponent_button_16_Template, 2, 3, "button", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 14);
        \u0275\u0275template(18, ProductsComponent_ng_container_18_Template, 2, 1, "ng-container", 15);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.categories)("ngForTrackBy", ctx.trackByCategory);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --primary: #009846;\n  --primary-light: #33b46e;\n  --primary-lighter: #66cf96;\n  --primary-lightest: #e6f5ed;\n  --secondary: #529433;\n  --secondary-light: #75ac5c;\n  --secondary-lighter: #98c485;\n  --secondary-lightest: #edf4ea;\n  --accent: #fecd08;\n  --accent-light: #fed73d;\n  --accent-lighter: #fee172;\n  --accent-lightest: #fff9e6;\n  --font-primary: "DM Sans", sans-serif;\n  --font-secondary: "Libre Baskerville", serif;\n  --font-accent: "Manrope", sans-serif;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-2xl: 1.5rem;\n  --text-3xl: 1.875rem;\n  --text-4xl: 2.25rem;\n  --text-5xl: 3rem;\n  --primary-rgb:\n    0,\n    152,\n    70;\n  --secondary-rgb:\n    82,\n    148,\n    51;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary) !important;\n}\n.bg-primary-light[_ngcontent-%COMP%] {\n  background-color: var(--primary-light) !important;\n}\n.bg-primary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--primary-lighter) !important;\n}\n.bg-primary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--primary-lightest) !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary) !important;\n}\n.bg-secondary-light[_ngcontent-%COMP%] {\n  background-color: var(--secondary-light) !important;\n}\n.bg-secondary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lighter) !important;\n}\n.bg-secondary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lightest) !important;\n}\n.bg-accent[_ngcontent-%COMP%] {\n  background-color: var(--accent) !important;\n}\n.bg-accent-light[_ngcontent-%COMP%] {\n  background-color: var(--accent-light) !important;\n}\n.bg-accent-lighter[_ngcontent-%COMP%] {\n  background-color: var(--accent-lighter) !important;\n}\n.bg-accent-lightest[_ngcontent-%COMP%] {\n  background-color: var(--accent-lightest) !important;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--secondary) !important;\n}\n.text-accent[_ngcontent-%COMP%] {\n  color: var(--accent) !important;\n}\n.font-primary[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n}\n.font-secondary[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n}\n.font-accent[_ngcontent-%COMP%] {\n  font-family: var(--font-accent);\n}\n.font-regular[_ngcontent-%COMP%] {\n  font-weight: var(--font-regular);\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: var(--font-medium);\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold);\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: var(--font-bold);\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-base);\n  line-height: 1.5;\n  color: var(--gray-700);\n  touch-action: manipulation;\n}\n.catalogue-page[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%], .premium-products[_ngcontent-%COMP%], .what-we-do[_ngcontent-%COMP%], .key-features[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%], .crop-categories[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%] {\n  content-visibility: auto;\n  contain-intrinsic-size: 1px 800px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  image-rendering: -webkit-optimize-contrast;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-weight: var(--font-semibold);\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--text-5xl);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n}\nh4[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\nh5[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\nh6[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n@media (max-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n  }\n  h4[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n  }\n  h5[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n  h6[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n  border-color: var(--secondary);\n}\n.btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:focus {\n  background-color: var(--primary);\n  border-color: var(--primary);\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n  border-color: var(--secondary);\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%]:hover, .btn-primary.btn-sm[_ngcontent-%COMP%]:focus {\n  background-color: var(--primary);\n  border-color: var(--primary);\n}\n.products-hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 52vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n}\n.products-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 152, 70, 0.9) 0%,\n      rgba(82, 148, 51, 0.85) 100%);\n  z-index: 1;\n}\n.products-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  color: white;\n  padding: 4rem 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.products-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 2rem;\n  font-weight: var(--font-bold);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n.products-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  opacity: 1;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  line-height: 1.6;\n  letter-spacing: 0.5px;\n}\n.products-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  z-index: 3;\n}\n.products-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.products-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: var(--primary-lightest);\n}\n.products-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background-color: var(--light);\n  overflow-x: hidden;\n}\n.products-section[_ngcontent-%COMP%]   .container-wrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100%;\n}\n.products-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0;\n}\n.products-section[_ngcontent-%COMP%]   .category-nav[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.products-section[_ngcontent-%COMP%]   .category-nav[_ngcontent-%COMP%]   .nav-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  overflow-x: auto;\n  padding: 1rem;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.products-section[_ngcontent-%COMP%]   .category-nav[_ngcontent-%COMP%]   .nav-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.products-section[_ngcontent-%COMP%]   .category-nav[_ngcontent-%COMP%]   .category-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 30px;\n  background: white;\n  color: var(--primary);\n  font-weight: 500;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.products-section[_ngcontent-%COMP%]   .category-nav[_ngcontent-%COMP%]   .category-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: white;\n}\n.products-section[_ngcontent-%COMP%]   .category-nav[_ngcontent-%COMP%]   .category-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 100%;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  height: 500px;\n  transition: all 0.4s ease;\n  position: relative;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  border-color: var(--secondary);\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(var(--primary-rgb), 0.2),\n      rgba(var(--secondary-rgb), 0.4));\n  opacity: 1;\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .product-type[_ngcontent-%COMP%] {\n  background: var(--secondary);\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .product-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--secondary);\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n  border-color: var(--secondary);\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary);\n  border-color: var(--primary);\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  height: 320px;\n  overflow: hidden;\n  position: relative;\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(var(--primary-rgb), 0.1),\n      rgba(var(--secondary-rgb), 0.2));\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 1.25rem;\n  margin-bottom: 0.5rem;\n}\n.products-section[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin-bottom: 0.75rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-footer[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n.product-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 0.6rem 1rem;\n  font-size: 0.9rem;\n  width: 100%;\n}\n.product-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.product-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  background-color: var(--secondary);\n  border-color: var(--secondary);\n}\n@media (hover: none) {\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:active {\n    transform: translateY(-2px);\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:active {\n    transform: scale(0.98);\n  }\n}\n@media (max-width: 991px) {\n  .products-hero[_ngcontent-%COMP%] {\n    min-height: 40vh;\n  }\n  .products-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .products-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 768px) {\n  .products-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .products-section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n}\n@media (max-width: 1200px) {\n  .products-section[_ngcontent-%COMP%]   .container-wrapper[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .products-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .products-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .premium-products[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 420px;\n    margin-bottom: 1.5rem;\n    border-radius: 8px;\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-type[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 0.4rem 0.8rem;\n    top: 0.75rem;\n    right: 0.75rem;\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    object-fit: cover;\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]::after {\n    background:\n      linear-gradient(\n        to bottom,\n        rgba(var(--primary-rgb), 0.05),\n        rgba(var(--secondary-rgb), 0.1));\n    opacity: 1;\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    margin-bottom: 0.5rem;\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    line-height: 1.5;\n    margin-bottom: 0.75rem;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-footer[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    padding: 0.6rem 1rem;\n    font-size: 0.9rem;\n    width: 100%;\n  }\n  .premium-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:active {\n    transform: scale(0.98);\n    background-color: var(--secondary);\n    border-color: var(--secondary);\n  }\n  .premium-products[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin: 0 -0.75rem;\n  }\n  .premium-products[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%] {\n    padding: 0 0.75rem;\n  }\n}\n/*# sourceMappingURL=products.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "src\\app\\pages\\products\\products.component.ts", lineNumber: 27 });
})();
export {
  ProductsComponent
};
//# sourceMappingURL=chunk-5J2KZCDI.js.map
