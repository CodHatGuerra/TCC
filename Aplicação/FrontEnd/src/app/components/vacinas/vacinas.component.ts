import { Vacinas } from './../vacciness';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { AddVaccinessComponent } from './add-vacciness/add-vacciness.component';

@Component({
  selector: 'app-vacinas-app',
  templateUrl: './vacinas.component.html',
  styleUrls: ['./vacinas.component.css']
})
export class VacinasAppComponent {
  constructor(private service: AppService, private router: Router, private dialog: MatDialog,) { }

  vaccines = Vacinas;
  columns: string[] = ['name', 'doses','acoes'];

  
  OpenDialogRegisterVacciness() {
    this.dialog.open(AddVaccinessComponent)
  }
}
