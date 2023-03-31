import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @ViewChild('teste') teste: ElementRef;

  constructor(private el: ElementRef) { 
    this.teste=el.nativeElement;
  }  

  func(){ 
    console.log(this.teste.nativeElement.innerText);
   }

  ngOnInit() {
  }
}
