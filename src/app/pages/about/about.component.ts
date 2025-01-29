import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
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
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }
}
