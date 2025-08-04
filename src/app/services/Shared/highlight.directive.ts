import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  constructor(private el : ElementRef, private renderer : Renderer2) { }

  @HostListener('mouseenter') mouseEnter(){
    this.renderer.setStyle(this.el.nativeElement,"backgroundColor","yellow");
    this.renderer.setStyle(this.el.nativeElement,"fontSize","35px")
  }

  @HostListener('mouseleave') mouseLeave(){
    this.renderer.removeStyle(this.el.nativeElement, "backgroundColor");
    this.renderer.removeStyle(this.el.nativeElement,"fontSize")
  }

}