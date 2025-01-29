import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize agricultural solutions'
    },
    {
      year: '2015',
      title: 'Research Center',
      description: 'Established state-of-the-art research facility'
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Extended operations to international markets'
    },
    {
      year: '2023',
      title: 'Sustainability Initiative',
      description: 'Launched eco-friendly product line'
    }
  ];

  team = [
    {
      name: 'Vishal Dobariya',
      position: 'Founder',
      image: 'assets/logo/HARISHREE.png',
      description: 'With over 5 years of experience in agricultural science'
    },
    {
      name: 'Sagar Patel',
      position: 'Director',
      image: 'assets/logo/HARISHREE.png',
      description: 'Leading innovation in sustainable farming solutions'

    }
  ];

  ngOnInit() {
    // Set title and meta tags
    this.title.setTitle('About Harishree Crop Science | Leading Agricultural Solutions Provider');
    
    this.meta.addTags([
      { name: 'description', content: 'Harishree Crop Science is a leading provider of sustainable agricultural solutions, innovative farming products, and eco-friendly crop protection. Learn about our vision, mission, and leadership team.' },
      { name: 'keywords', content: 'Harishree Crop Science, agricultural solutions, sustainable farming, crop protection, agricultural innovation, eco-friendly farming, agricultural products, farming technology, Indian agriculture company' },
      { property: 'og:title', content: 'About Harishree Crop Science | Leading Agricultural Solutions Provider' },
      { property: 'og:description', content: 'Discover Harishree Crop Science\'s commitment to sustainable agriculture through innovative solutions and eco-friendly products.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'index, follow' }
    ]);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });

    this.addStructuredData();
  }

  private addStructuredData() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Harishree Crop Science",
      "description": "Leading provider of sustainable agricultural solutions and eco-friendly farming products",
      "url": "https://harishreecropscience.com/about",
      "foundingDate": "2010",
      "founder": {
        "@type": "Person",
        "name": "Vishal Dobariya"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India"
      }
    });
    document.head.appendChild(script);
  }
}
