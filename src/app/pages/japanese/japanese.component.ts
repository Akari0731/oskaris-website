import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-japanese',
  templateUrl: './japanese.component.html',
  styleUrls: ['./japanese.component.sass'],
})
export class JapaneseComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
