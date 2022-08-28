import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  animations as animationsEn,
  videos as videosEn,
} from 'src/app/constants/english';
import {
  animations as animationsJa,
  videos as videosJa,
} from 'src/app/constants/japanese';
import { translations } from 'src/app/constants/translations';
import { VideoProps } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public language: 'en' | 'ja' = 'en';
  public videoTranslations: VideoProps[] = videosEn;
  public animationTranslations: VideoProps[] = animationsEn;

  public languageSubject = new Subject<'en' | 'ja'>();

  constructor() {
    //@ts-ignore
    const language = window.navigator.userLanguage || window.navigator.language;

    this.language = language?.substring(0, 2) === 'en' ? 'en' : 'ja';
    this.languageSubject.next(this.language);
    this.resetTranslations();
  }

  public getLanguage() {
    return this.language;
  }

  public switchLanguage() {
    this.language = this.language === 'en' ? 'ja' : 'en';
    this.languageSubject.next(this.language);
    this.resetTranslations();
  }

  private resetTranslations() {
    if (this.language === 'en') {
      this.animationTranslations = animationsEn;
      this.videoTranslations = videosEn;
    }

    this.animationTranslations = animationsJa;
    this.videoTranslations = videosJa;
  }

  public getVideoTranslations() {
    if (this.language === 'en') {
      return videosEn;
    }

    return videosJa;
  }

  public getAnimationTranslations() {
    if (this.language === 'en') {
      return animationsEn;
    }

    return animationsJa;
  }
}
