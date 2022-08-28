import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';
import { VideoProps } from 'src/app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  animations: VideoProps[] = [];
  videos: VideoProps[] = [];
  language: 'en' | 'ja' = 'en';

  constructor(private languageService: LanguageService) {
    this.animations = this.languageService.getAnimationTranslations();
    this.videos = this.languageService.getVideoTranslations();
    this.language = this.languageService.getLanguage();
  }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.languageService.languageSubject.subscribe(language => {
      this.animations = this.languageService.getAnimationTranslations();
      this.videos = this.languageService.getVideoTranslations();
      this.language = this.languageService.getLanguage();
    });
  }
}
