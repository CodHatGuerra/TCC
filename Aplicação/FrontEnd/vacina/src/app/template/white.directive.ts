import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWhite]'
})
export class WhiteDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.color = "#FFF"
  }

}
