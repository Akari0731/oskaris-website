import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { merge } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';
import { VideoProps } from 'src/app/types';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass'],
})
export class VideoComponent implements OnInit {
  id: string = '';
  video: VideoProps | undefined = undefined;
  animations: VideoProps[] = [];
  videos: VideoProps[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private languageService: LanguageService
  ) {
    this.animations = this.languageService.getAnimationTranslations();
    this.videos = this.languageService.getVideoTranslations();
  }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.languageService.languageSubject.subscribe(language => {
      this.animations = this.languageService.getAnimationTranslations();
      this.videos = this.languageService.getVideoTranslations();
      this.video =
        this.animations.find(image => image.id === this.id) ||
        this.videos.find(image => image.id === this.id);
    });

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.animations = this.languageService.getAnimationTranslations();
      this.videos = this.languageService.getVideoTranslations();
      this.video =
        this.animations.find(image => image.id === params['id']) ||
        this.videos.find(image => image.id === params['id']);
    });
  }

  onNavigateHome() {
    this.router.navigate(['']);
  }
}
