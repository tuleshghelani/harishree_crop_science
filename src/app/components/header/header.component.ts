import { Component, OnInit, OnDestroy, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  private navSub?: Subscription;

  constructor(
    private router: Router,
    private elRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.navSub = this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(() => this.closeMenu());
  }

  ngOnDestroy() {
    this.navSub?.unsubscribe();
    this.unlockBodyScroll();
  }

  toggleMenu(event?: Event) {
    event?.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
    this.setBodyScrollState();
  }

  closeMenu(event?: Event) {
    event?.preventDefault();
    this.isMenuOpen = false;
    this.setBodyScrollState();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isMenuOpen) {
      return;
    }

    const clickedInside = this.elRef.nativeElement.contains(event.target as Node);
    if (!clickedInside) {
      this.closeMenu();
    }
  }

  @HostListener('document:touchstart', ['$event'])
  onDocumentTouchStart(event: TouchEvent): void {
    if (!this.isMenuOpen) {
      return;
    }

    const touchedInside = this.elRef.nativeElement.contains(event.target as Node);
    if (!touchedInside) {
      this.closeMenu(event);
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 992 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  private setBodyScrollState(): void {
    if (!this.document?.body) {
      return;
    }
    if (this.isMenuOpen) {
      this.renderer.addClass(this.document.body, 'mobile-menu-open');
      return;
    }
    this.unlockBodyScroll();
  }

  private unlockBodyScroll(): void {
    if (this.document?.body) {
      this.renderer.removeClass(this.document.body, 'mobile-menu-open');
    }
  }
} 