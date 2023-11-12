import { Vacinas } from './../vacciness';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { AddVaccinessComponent } from './add-vacciness/add-vacciness.component';
import { VacinasDeleteComponent } from './vacinas-delete/vacinas-delete.component';
import { VacinasUpdateComponent } from './vacinas-update/vacinas-update.component';

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
      this.vaccines = response.result.Vacinas
      console.log(this.vaccines);
      
    })
  }

  UpdateVacina(id: number){
    this.service.setIdVacina(id);
    this.dialog.open(VacinasUpdateComponent).afterClosed().subscribe(a=>{
      this.GetVacinas()
    })
  }

  deleteVacina(id: number) {
    this.service.setIdVacina(id);
    this.dialog.open(VacinasDeleteComponent).afterClosed().subscribe(a=>{
      this.GetVacinas()
    })
  }
}
