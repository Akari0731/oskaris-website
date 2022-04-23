import { Component, Input } from '@angular/core';
import { VideoProps } from 'src/app/types';

@Component({
  selector: 'app-video-description',
  templateUrl: './video-description.component.html',
  styleUrls: ['./video-description.component.sass'],
})
export class VideoDescriptionComponent {
  @Input() video: VideoProps | undefined;
}
