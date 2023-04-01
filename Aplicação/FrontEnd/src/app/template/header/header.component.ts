import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeButton = 1;

  constructor() { }  

  ngOnInit() {}
}

