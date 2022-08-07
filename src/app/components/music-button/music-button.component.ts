import { Component } from '@angular/core';

@Component({
  selector: 'app-music-button',
  templateUrl: './music-button.component.html',
  styleUrls: ['./music-button.component.sass'],
})
export class MusicButtonComponent {
  constructor() {
    this.audio.load();
    this.audio.volume = 0.1;
    this.audio.loop = true;
  }

  public audio: HTMLAudioElement = new Audio('assets/audio/inspiration.mp3');
  public isPlaying: boolean = false;

  public onClickPlay() {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.audio.pause();
    } else {
      this.isPlaying = true;
      this.audio.play();
    }
  }
}
