import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-active-page',
  templateUrl: './active-page.component.html',
  styleUrls: ['./active-page.component.sass'],
})
export class ActivePageComponent {
  @Input() active: boolean = false;
}
