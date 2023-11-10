import { Vacinas } from './../vacciness';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { AddVaccinessComponent } from './add-vacciness/add-vacciness.component';

@Component({
  selector: 'app-vacinas-app',
  templateUrl: './vacinas.component.html',
  styleUrls: ['./vacinas.component.css']
})
export class VacinasAppComponent implements OnInit{
  constructor(private service: AppService, private router: Router, private dialog: MatDialog,) { }
  ngOnInit(): void {
    this.GetVacinas()
  }

  vaccines: any;
  columns: string[] = ['name', 'acoes'];

  
  OpenDialogRegisterVacciness() {
    this.dialog.open(AddVaccinessComponent).afterClosed().subscribe(a => {
      this.GetVacinas();
    });
  }

  GetVacinas(){
    this.service.GetAllVacinas().subscribe((response)=> {
      console.log(response);
      this.vaccines = response.result.Vacinas
    })
  }
}
