import { Component, Input } from '@angular/core';
import { LanguageSupport } from 'src/app/shared/directives/language-support';
import { VideoProps } from 'src/app/types';

@Component({
  selector: 'app-video-description',
  templateUrl: './video-description.component.html',
  styleUrls: ['./video-description.component.sass'],
})
export class VideoDescriptionComponent extends LanguageSupport {
  @Input() video: VideoProps | undefined;
}
