import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  opened: boolean = false
  constructor() { }

  Set(isActive: boolean) : void {
    this.opened = isActive;
  }

  Get(){
    return this.opened;
  }

}
