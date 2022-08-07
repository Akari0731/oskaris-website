import { Component } from '@angular/core';
import { Event, NavigationEnd, NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-music-button',
  templateUrl: './music-button.component.html',
  styleUrls: ['./music-button.component.sass'],
})
export class MusicButtonComponent {
  constructor(private router: Router) {
    this.audio.load();
    this.audio.volume = 0.1;
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationError) {
        this.isPlaying = false;
        this.audio.pause();
      }
    });
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
