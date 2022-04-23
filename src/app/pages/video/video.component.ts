import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass'],
})
export class VideoComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}

  ngOnInit() {
    document.domain = 'player.vimeo.com';
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    const iframe = document.getElementById('iframe') as any;
    const iframDoc = iframe.contentDocument;
    if (iframDoc?.body?.style) {
      iframDoc.body.style.color = 'blue !important';
    }
    console.log('iframe', iframe, iframDoc, iframDoc?.body?.style);
  }

  onNavigateHome() {
    this.router.navigate(['']);
  }
}
