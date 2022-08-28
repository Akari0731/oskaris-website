import { Component } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent {
  language: 'en' | 'ja' = 'en';

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.getLanguage();
    this.languageService.languageSubject.subscribe(newLanguage => {
      this.language = newLanguage;
    });
  }
}
