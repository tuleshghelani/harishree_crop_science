import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products = [
    {
      name: 'Bio Fertilizer',
      image: 'assets/products/Buldozer.png',
      description: 'Organic bio-fertilizer for enhanced crop growth'
    },
    {
      name: 'Growth Promoter',
      image: 'assets/products/CHEMISTRY.png',
      description: 'Natural growth promoter for healthy plants'
    },
    {
      name: 'Organic Pesticide',
      image: 'assets/products/GREEN OUT.png',
      description: 'Safe and effective organic pest control'
    },
    {
      name: 'Soil Conditioner',
      image: 'assets/products/kavach.png',
      description: 'Premium soil conditioning solution'
    }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 50
    });
  }
} 