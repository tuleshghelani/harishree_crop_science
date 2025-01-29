import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

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
    // Set title and meta tags for SEO
    this.title.setTitle('Harishree Crop Science | Sustainable Agricultural Solutions India');
    
    this.meta.addTags([
      { name: 'description', content: 'Harishree Crop Science provides innovative agricultural solutions, organic fertilizers, and eco-friendly farming products. Leading provider of sustainable agricultural technology in India.' },
      { name: 'keywords', content: 'agricultural solutions, organic fertilizers, sustainable farming, crop protection, bio fertilizers, agricultural products, farming technology, eco-friendly agriculture, Indian agriculture company, Harishree Crop Science' },
      { property: 'og:title', content: 'Harishree Crop Science | Sustainable Agricultural Solutions India' },
      { property: 'og:description', content: 'Leading provider of sustainable agricultural solutions, organic fertilizers, and innovative farming products in India.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'assets/logo/HARISHREE.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Harishree Crop Science' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]);

    this.addStructuredData();
    
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 50
    });
  }

  private addStructuredData() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Harishree Crop Science",
      "description": "Leading provider of sustainable agricultural solutions and eco-friendly farming products",
      "url": "https://harishreecropscience.com",
      "logo": "assets/logo/HARISHREE.png",
      "sameAs": [
        // "https://facebook.com/harishreecropscience",
        // "https://linkedin.com/company/harishree-crop-science"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service"
      }
    });
    document.head.appendChild(script);
  }
} 