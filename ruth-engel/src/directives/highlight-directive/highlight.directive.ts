import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private color: ElementRef) {
  }

  @Input() highlight1! : string;

  @HostListener('mouseenter') onMouseLeave() {
    this.changeHighlight(this.highlight1);
  }

  private changeHighlight(color: string) {
    this.color.nativeElement.style.backgroundColor = color;
  }

}