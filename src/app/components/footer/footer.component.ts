import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {
      this.featuredProducts = [
        products.find(p => p.name === 'Proceed'),
        products.find(p => p.name === 'X-Pro'),
        products.find(p => p.name === 'Laser'),
        products.find(p => p.name === 'Black gold'),
        products.find(p => p.name === 'Mpire 404')
      ].filter(Boolean) as Product[];
    });
  }
} 