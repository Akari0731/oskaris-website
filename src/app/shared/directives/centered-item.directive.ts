import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCenteredItem]',
})
export class CenteredItemDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  scrolling(): void {
    if (!this.el.nativeElement || !window || !this.renderer) return;

    setInterval(() => {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const topPosition = rect.top;
      const bottomPosition = rect.bottom;
      const windowCenter = window.outerHeight / 2 + 32;
      const isCenteredElement =
        topPosition < windowCenter && bottomPosition > windowCenter;
      if (isCenteredElement) {
        this.renderer.addClass(this.el.nativeElement, 'centered');
        return;
      }
      this.renderer.removeClass(this.el.nativeElement, 'centered');
    }, 500);
  }
}
