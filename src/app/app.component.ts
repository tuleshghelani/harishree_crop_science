import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'harishree_crop_science';
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS once and refresh on navigation to avoid multiple listeners
      AOS.init({ duration: 800, easing: 'ease-out', once: true });
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Using setTimeout to let view render before AOS refresh
          setTimeout(() => AOS.refreshHard(), 0);
        }
      });
    }
  }
}
