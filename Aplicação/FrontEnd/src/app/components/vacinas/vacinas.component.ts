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
export class VacinasAppComponent implements OnInit {
  constructor(private service: AppService, private router: Router, private dialog: MatDialog,) { this.GetVacinas() }
  ngOnInit(): void {
    this.GetVacinas()
  }

  vaccines: any[] = [];
  columns: string[] = ['name','acoes'];


  searchTerm: string = '';
  allVacinas: any[] = [];


  search(event: Event): void {
    if (this.searchTerm.trim() === '')
      this.vaccines = this.allVacinas;
    else {
      this.vaccines = this.allVacinas.filter((vacinas) =>
        vacinas.Nome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  OpenDialogRegisterVacciness() {
  var form = this.dialog.open(AddVaccinessComponent)
  form.afterClosed().subscribe(a => {
      this.GetVacinas();
    });
  }

  GetVacinas() {
    this.service.GetAllVacinas().subscribe((response) => {
      this.allVacinas = response.result.Vacinas
      this.vaccines = response.result.Vacinas
    })
  }

  UpdateVacina(id: number) {
    this.service.setIdVacina(id);
    this.dialog.open(VacinasUpdateComponent).afterClosed().subscribe(a => {
      this.GetVacinas()
    })
  }

  deleteVacina(id: number) {
    this.service.setIdVacina(id);
    this.dialog.open(VacinasDeleteComponent).afterClosed().subscribe(a => {
      this.GetVacinas()
    })
  }
}
