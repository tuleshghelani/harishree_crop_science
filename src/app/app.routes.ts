import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ResearchComponent } from './pages/research/research.component';
import { QualityAssuranceComponent } from './pages/quality-assurance/quality-assurance.component';
import { ProceedComponent } from './pages/all-products/proceed/proceed.component';
import { ThioHComponent } from './pages/all-products/thio-h/thio-h.component';
import { SuperFsComponent } from './pages/all-products/super-fs/super-fs.component';
import { Mpire404Component } from './pages/all-products/mpire-404/mpire-404.component';
import { HFunComponent } from './pages/all-products/h-fun/h-fun.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:productName', component: ProductsComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'quality-assurance', component: QualityAssuranceComponent },
  { path: 'product/proceed', component: ProceedComponent },
  { path: 'product/thio-h', component: ThioHComponent },
  { path: 'product/super-fs', component: SuperFsComponent },
  { path: 'product/mpire-404', component: Mpire404Component },
  { path: 'product/h-fun', component: HFunComponent },
];
