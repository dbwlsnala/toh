import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighligntDirective {
  @Input()
  highLight: string;
  constructor(private el: ElementRef ) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.highLight;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }


}
