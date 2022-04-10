import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'],
})
export class HeroComponent {
  constructor() {}

  top: string = '3rem';
  left: string = '5rem';
  count: number = 1;

  onHover() {
    this.top = `7rem`;
    this.left = `9rem`;
  }

  onMouseOut() {
    this.top = '3rem';
    this.left = `5rem`;
  }
}
