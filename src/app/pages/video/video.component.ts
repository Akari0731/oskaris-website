import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { animations, videos } from 'src/app/constants';
import { VideoProps } from 'src/app/types';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass'],
})
export class VideoComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  video: VideoProps | undefined = undefined;

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe((params: Params) => {
      this.video =
        animations.find(image => image.id === params['id']) ||
        videos.find(image => image.id === params['id']);
    });
  }

  onNavigateHome() {
    this.router.navigate(['']);
  }
}
