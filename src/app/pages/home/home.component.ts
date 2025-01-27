import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products = [
    {
      name: 'Bio Fertilizer',
      image: 'assets/home/product_1.jpeg',
      description: 'Organic bio-fertilizer for enhanced crop growth'
    },
    {
      name: 'Growth Promoter',
      image: 'assets/home/product_2.jpeg',
      description: 'Natural growth promoter for healthy plants'
    },
    {
      name: 'Organic Pesticide',
      image: 'assets/home/product_3.jpeg',
      description: 'Safe and effective organic pest control'
    },
    {
      name: 'Soil Conditioner',
      image: 'assets/home/product_4.jpeg',
      description: 'Premium soil conditioning solution'
    }
  ];
} 