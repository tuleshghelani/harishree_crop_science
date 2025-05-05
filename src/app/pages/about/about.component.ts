import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import AOS from 'aos';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

const META_KEY = makeStateKey<boolean>('about-meta-data');
const STRUCTURED_DATA_KEY = makeStateKey<string>('about-structured-data');

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState
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
      image: 'assets/about-us/Vishal Dobariya.png',
      description: 'A visionary leader with over 10 years of expertise in agricultural science and sustainable farming solutions. Pioneering innovative approaches in eco-friendly crop protection and organic agricultural products.'
    },
    {
      name: 'Sagar Pambhar',
      position: 'Director',
      image: 'assets/about-us/Sagar Pambhar.png',
      description: 'Expert in agricultural innovation with extensive experience in developing premium bio-fertilizers and sustainable farming technologies. Driving research and development in organic crop protection solutions.'
    },
    {
      name: 'Nilesh Dobariya',
      position: 'Director',
      image: 'assets/about-us/Nilesh Dobariya.png',
      description: 'Specialized in agricultural product development and quality assurance. Leading strategic initiatives in eco-friendly pesticides and innovative crop protection solutions for enhanced farm productivity.'
    }
  ];

  ngOnInit() {
    this.setMetaData();
    this.setStructuredData();
    
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }

  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) {
      return;
    }

    this.title.setTitle('About Harishree Crop Science | Leading Agricultural Solutions Provider');
    
    const metaTags = [
      { name: 'description', content: 'Harishree Crop Science is a leading provider of sustainable agricultural solutions, innovative farming products, and eco-friendly crop protection. Learn about our vision, mission, and leadership team.' },
      { name: 'keywords', content: 'Harishree Crop Science, agricultural solutions, sustainable farming, crop protection, agricultural innovation, eco-friendly farming, agricultural products, farming technology, Indian agriculture company' },
      { property: 'og:title', content: 'About Harishree Crop Science | Leading Agricultural Solutions Provider' },
      { property: 'og:description', content: 'Discover Harishree Crop Science\'s commitment to sustainable agriculture through innovative solutions and eco-friendly products.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'canonical', content: `${this.baseUrl}/about-us` },
      { property: 'og:url', content: `${this.baseUrl}/about-us` },
      { property: 'og:type', content: 'website' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: environment.metaDefaults.author }
    ];

    metaTags.forEach(tag => this.meta.updateTag(tag as MetaDefinition));
    this.transferState.set(META_KEY, true);
  }

  private setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY)) {
      return;
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Harishree Crop Science",
      "description": "Leading provider of sustainable agricultural solutions and eco-friendly farming products",
      "url": `${this.baseUrl}/about`,
      "foundingDate": "2010",
      "founder": {
        "@type": "Person",
        "name": "Vishal Dobariya",
        "jobTitle": "Founder",
        "description": "A visionary leader with over 10 years of expertise in agricultural science and sustainable farming solutions. Pioneering innovative approaches in eco-friendly crop protection and organic agricultural products.",
        "image": `${this.baseUrl}/assets/about-us/Vishal Dobariya.jpg`,
        "worksFor": {
          "@type": "Organization",
          "name": "Harishree Crop Science"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India"
      },
      "employee": [
        {
          "@type": "Person",
          "name": "Sagar Pambhar",
          "jobTitle": "Director",
          "description": "Expert in agricultural innovation with extensive experience in developing premium bio-fertilizers and sustainable farming technologies. Driving research and development in organic crop protection solutions.",
          "image": `${this.baseUrl}/assets/about-us/Sagar Pambhar.jpg`,
          "worksFor": {
            "@type": "Organization",
            "name": "Harishree Crop Science"
          }
        },
        {
          "@type": "Person",
          "name": "Nilesh Dobariya",
          "jobTitle": "Director",
          "description": "Specialized in agricultural product development and quality assurance. Leading strategic initiatives in eco-friendly pesticides and innovative crop protection solutions for enhanced farm productivity.",
          "image": `${this.baseUrl}/assets/about-us/Nilesh Dobariya.jpg`,
          "worksFor": {
            "@type": "Organization",
            "name": "Harishree Crop Science"
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
}
