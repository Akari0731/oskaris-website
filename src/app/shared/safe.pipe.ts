import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url?: string): SafeResourceUrl {
    if (!url) return '';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
