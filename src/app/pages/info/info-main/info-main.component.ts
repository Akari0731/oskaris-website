import { Component } from '@angular/core';
import { LanguageSupport } from 'src/app/shared/directives/language-support';

@Component({
  selector: 'app-info-main',
  templateUrl: './info-main.component.html',
  styleUrls: ['./info-main.component.sass'],
})
export class InfoMainComponent extends LanguageSupport {}
