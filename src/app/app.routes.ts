import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'catalogue', component: CatalogueComponent },
];
