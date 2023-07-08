import { TemplateService } from './../Template.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})

export class NavComponent  {
  opened = true;
  constructor(private  templateService: TemplateService){
  }
}

