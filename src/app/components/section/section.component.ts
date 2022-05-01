import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VideoProps } from '../../types';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass'],
})
export class SectionComponent {
  constructor(private router: Router) {}

  @Input() videos: VideoProps[] = [];

  onNavigateToVideo(image: VideoProps) {
    this.router.navigate(['/work', image.id]);
  }
}
