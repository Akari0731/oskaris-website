import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass'],
})
export class InfoComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onNavigateHome() {
    this.router.navigate(['']);
  }
}
