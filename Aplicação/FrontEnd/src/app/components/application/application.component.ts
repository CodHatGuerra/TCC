import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { Vacinas } from '../vacciness';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  constructor(private service: AppService, private router: Router, private dialog: MatDialog,) { }

  vaccines = Vacinas;
  columnCarteira: string[] = ['nome', 'doses', 'acoes'];
  input: string = '';

  dataSource: any;

  onSearchKeyUp(){
    
  }
}
