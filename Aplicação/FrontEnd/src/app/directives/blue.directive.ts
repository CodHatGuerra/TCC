import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective {

  constructor(el: ElementRef ) {
    el.nativeElement.style.color = "#21a4f0"
   }
}
