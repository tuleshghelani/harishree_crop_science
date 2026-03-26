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
  { path: 'product/glyphosate-41-sl', loadComponent: () => import('./pages/all-products/glyphosate-41-sl/glyphosate-41-sl.component').then(m => m.Glyphosate41SlComponent) },
  { path: 'product/glufosinate-ammonium-13-5-sl', loadComponent: () => import('./pages/all-products/glufosinate-ammonium-13-5-sl/glufosinate-ammonium-13-5-sl.component').then(m => m.GlufosinateAmmonium135SlComponent) },
  { path: 'product/quizalofop-ethyl-10-ec', loadComponent: () => import('./pages/all-products/quizalofop-ethyl-10-ec/quizalofop-ethyl-10-ec.component').then(m => m.QuizalofopEthyl10EcComponent) },
  { path: 'product/tembotrione-34-4-w-w-sc', loadComponent: () => import('./pages/all-products/tembotrione-34-4-w-w-sc/tembotrione-34-4-w-w-sc.component').then(m => m.Tembotrione344WwScComponent) },
  { path: 'product/paraquat-dichloride-24-sl', loadComponent: () => import('./pages/all-products/paraquat-dichloride-24-sl/paraquat-dichloride-24-sl.component').then(m => m.ParaquatDichloride24SlComponent) },
  { path: 'product/round', redirectTo: 'product/glyphosate-41-sl', pathMatch: 'full' },
];
