import { Component, OnInit } from '@angular/core';
import { animations, videos } from 'src/app/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }

  animations = animations;
  videos = videos;
}
