import { Component } from '@angular/core';
import { LanguageSupport } from 'src/app/shared/directives/language-support';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent extends LanguageSupport {}
