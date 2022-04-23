import { Component, Input } from '@angular/core';
import { Event, NavigationEnd, NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  @Input() sticky: boolean | undefined;
  activeRoute: string = this.router.url;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = this.router.url;
      }

      if (event instanceof NavigationError) {
        this.activeRoute = 'error';
      }
    });
  }

  onNavigateHome() {
    this.router.navigate(['']);
  }

  //TODO: where to navigate?
  onNavigateWork() {
    this.router.navigate(['']);
  }

  onNavigateInfo() {
    this.router.navigate(['info']);
  }

  onNavigateJapanese() {
    this.router.navigate(['japanese']);
  }
}
