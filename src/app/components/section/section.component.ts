import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { images as imageObj } from 'src/app/constants';
import { VideoProps } from '../../types';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass'],
})
export class SectionComponent {
  constructor(private router: Router) {}

  images: VideoProps[] = imageObj;

  onNavigateToVideo(image: VideoProps) {
    this.router.navigate(['/work', image.id]);
  }
}
