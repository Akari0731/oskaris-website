import { Component, Input } from '@angular/core';
import { Event, NavigationEnd, NavigationError, Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  @Input() sticky: boolean | undefined;
  activeRoute: string = this.router.url;
  language: 'en' | 'ja' = 'en';

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = this.router.url;
      }

      if (event instanceof NavigationError) {
        this.activeRoute = 'error';
      }
    });

    this.language = this.languageService.getLanguage();
    this.languageService.languageSubject.subscribe(newLanguage => {
      this.language = newLanguage;
    });
  }

  onNavigateHome() {
    this.router.navigate(['']);
  }

  onNavigateWork() {
    this.router.navigate(['']);
  }

  onNavigateInfo() {
    this.router.navigate(['info']);
  }

  onSwitchLanguage() {
    this.languageService.switchLanguage();
  }
}
