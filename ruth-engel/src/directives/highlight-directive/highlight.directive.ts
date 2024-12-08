import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private color: ElementRef) {
  }
  ngOnInit():void{
    this.changeHighlight(this.highlight1);
  }
  @Input() highlight1! : string;

  private changeHighlight(color: string) {
    this.color.nativeElement.style.backgroundColor = color;
  }

}
