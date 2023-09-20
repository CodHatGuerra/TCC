import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { Vacinas } from '../vacciness';
import { MatDialog } from '@angular/material/dialog';
import { AddVaccinessComponent } from '../add-vacciness/add-vacciness.component';

@Component({
  selector: 'app-home',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  constructor(private service: AppService, private router: Router, private dialog: MatDialog,) { }

  vaccines = Vacinas;
  columns: string[] = ['name', 'actions'];
  input: string = '';

  OpenDialogRegisterVacciness() {
    this.dialog.open(AddVaccinessComponent)
  }

  onSearchKeyUp(){
    
  }
}
