import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass'],
})
export class VideoComponent {
  constructor(private router: Router) {}

  onNavigateHome() {
    this.router.navigate(['']);
  }
}
