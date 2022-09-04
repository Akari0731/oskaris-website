import { Directive } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Directive()
export class LanguageSupport {
  language: 'en' | 'ja' = 'en';

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.getLanguage();
    this.languageService.languageSubject.subscribe(newLanguage => {
      this.language = newLanguage;
    });
  }
}
