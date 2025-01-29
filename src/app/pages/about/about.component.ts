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
        "name": "Vishal Dobariya"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
}
