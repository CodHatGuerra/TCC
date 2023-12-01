import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { MatDialog } from '@angular/material/dialog';
import { CarteiraAddComponent } from './carteira-add/carteira-add.component';
import { CarteiraDeleteComponent } from './carteira-delete/carteira-delete.component';
import { ProfileService } from 'src/app/settings/Services/profile.service';
import { CarteiraUpdateComponent } from './carteira-update/carteira-update.component';

@Component({
  selector: 'app-home',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  originalDataSource: any;
  appliedFilters: ((data: any[]) => any)[] = [];
  constructor(
    private service: AppService, private router: Router,
    private dialog: MatDialog,
    private profileService: ProfileService) {
  }

  isFuncionario: boolean = false
  idFuncionario: number = 0;
  columnCarteira: string[] = ['vacinas', 'doses', 'funcionario', 'acoes'];
  input: string = '';
  cpf: any;
  dataSource: any;
  isCpf: boolean = false;

  dose01: boolean = false;
  dose02: boolean = false;
  dose03: boolean = false;

  bebe: any;
  crianca: any;
  adolecente: any;
  adulto: any;
  gestante: any;


  isNoCotent: boolean = false;

  ngOnInit(): void {
    const user = this.service.GetUser();
    if (user[0].Funcionario == 1) {
      this.search()
      this.isFuncionario = true
    }
    else {
      this.isFuncionario = false
      this.getCarteira(user[0].Cpf)
      this.columnCarteira = ['vacinas', 'doses', 'funcionario']
    }
  }

  
  resetFilters() {
    this.dataSource = this.originalDataSource.slice();
    this.appliedFilters = [];
  }

  applyFilter(filter: (data: any[]) => any[]) {
    this.dataSource = filter(this.dataSource);
    this.appliedFilters.push(filter);
  }

  search(): any {
    if (this.cpf == null || this.cpf == undefined || this.cpf == '') {
      return this.isCpf = true
    }

    else {
      this.isCpf = false

      this.profileService.setCpf(this.cpf)
      this.getCarteira(this.cpf)
    }
  }

  filterBebe() {
    this.applyFilter((data) => this.filtrarPorFaixaEtaria(data, 0, 2));
  }

  filterCrianca() {
    this.applyFilter((data) => this.filtrarPorFaixaEtaria(data, 3, 10));
  }

  filterAdolescente() {
    this.applyFilter((data) => this.filtrarPorFaixaEtaria(data, 11, 17));
  }

  filterAdulto() {
    this.applyFilter((data) => this.filtrarPorFaixaEtaria(data, 18, 59));
  }

  filtrarPorFaixaEtaria(data: any[], inicio: number, fim: number): any[] {
    return data.filter((Vacina: any) => Vacina.Idade >= inicio && Vacina.Idade <= fim);
  }

  getCarteira(cpf: number): any {
    this.service.GetVacinasCarteira(cpf).subscribe((res) => {
      if (res.result.Vacinas[0] == null || res.result.Vacinas[0] == '')
        this.isNoCotent = true
      else
        this.isNoCotent = false

     this.originalDataSource = res.result.Vacinas;  
      this.dataSource = this.originalDataSource.slice();

      if (this.dataSource[0].Dose_01 == 1)
        this.dose01 = true
      else
        this.dose01 = false

      if (this.dataSource[0].Dose_02 == 1)
        this.dose02 = true
      else
        this.dose02 = false

      if (this.dataSource[0].Dose_03 == 1)
        this.dose03 = true
      else
        this.dose03 = false

    });
  }

  CreateCarteira() {
    if (this.cpf == null || undefined)
      throw this.service.AlertMessage("Nenhuma carteira selecionada !")

    const dialog = this.dialog.open(CarteiraAddComponent);
    dialog.afterClosed().subscribe(() => {
      this.getCarteira(this.cpf)
    })
  }

  deleteVacinaCarteira(idCarteira: number, idVacina: number) {
    this.service.setCarteira(idCarteira)
    this.service.setVacinaCarteira(idVacina)
    const dialog = this.dialog.open(CarteiraDeleteComponent)
    dialog.afterClosed().subscribe(() => {
      this.getCarteira(this.cpf)
    })
  }

  updateVacinaCarteira(idCarteira: number, idVacina: number) {
    this.service.setCarteira(idCarteira)
    this.service.setVacinaCarteira(idVacina)
    const dialog = this.dialog.open(CarteiraUpdateComponent)
    dialog.afterClosed().subscribe(() => {
      this.getCarteira(this.cpf)
    })
  }
}
