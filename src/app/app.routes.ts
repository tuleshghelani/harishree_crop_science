import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about-us', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'contact-us', loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent) },
  { path: 'products', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
  { path: 'products/:productName', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
  { path: 'catalogue', loadComponent: () => import('./pages/catalogue/catalogue.component').then(m => m.CatalogueComponent) },
  { path: 'research', loadComponent: () => import('./pages/research/research.component').then(m => m.ResearchComponent) },
  { path: 'quality-assurance', loadComponent: () => import('./pages/quality-assurance/quality-assurance.component').then(m => m.QualityAssuranceComponent) },
  { path: 'product/proceed', loadComponent: () => import('./pages/all-products/proceed/proceed.component').then(m => m.ProceedComponent) },
  { path: 'product/thio-h', loadComponent: () => import('./pages/all-products/thio-h/thio-h.component').then(m => m.ThioHComponent) },
  { path: 'product/super-fs', loadComponent: () => import('./pages/all-products/super-fs/super-fs.component').then(m => m.SuperFsComponent) },
  { path: 'product/mpire-404', loadComponent: () => import('./pages/all-products/mpire-404/mpire-404.component').then(m => m.Mpire404Component) },
  { path: 'product/h-fun', loadComponent: () => import('./pages/all-products/h-fun/h-fun.component').then(m => m.HFunComponent) },
];
