import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ResearchComponent } from './pages/research/research.component';
import { QualityAssuranceComponent } from './pages/quality-assurance/quality-assurance.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:productName', component: ProductsComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'quality-assurance', component: QualityAssuranceComponent },
];
