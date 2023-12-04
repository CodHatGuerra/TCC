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
  columnCarteira: string[] = ['vacinas', 'doses', 'data', 'funcionario', 'acoes'];
  input: string = '';
  cpf: any;
  dataSource: any;
  isCpf: boolean = false;

  dose01: boolean = false;
  dose02: boolean = false;
  dose03: boolean = false;
  selectedOption: string = ''
  bebe: any;
  crianca: any;
  adolecente: any;
  adulto: any;
  gestante: any;

  dataValidade: any;
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
      this.cpf = user[0].Cpf
      this.columnCarteira = ['vacinas', 'doses', 'data', 'funcionario']
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

  formatarData(dataString: string) {
    const data = new Date(dataString);

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = String(data.getFullYear()).slice(-2);
    return `${dia}/${mes}/${ano}`;
  }

  filtrarPorFaixaEtaria(inicio: number, fim: number): any[] {
    return this.dataSource.filter((Vacina: any) => Vacina.Idade >= inicio && Vacina.Idade <= fim);
  }

  filterBebe() {
    this.selectedOption = 'bebe';
    this.service.GetVacinasCarteira(this.cpf).subscribe((res) => {
      this.dataSource = res.result.Vacinas;
      this.bebe = this.filtrarPorFaixaEtaria(0, 2);
      this.dataSource = this.bebe
    })
  }

  filterCrianca() {
    this.selectedOption = 'crianca';
    this.service.GetVacinasCarteira(this.cpf).subscribe((res) => {
      this.dataSource = res.result.Vacinas;
      this.crianca = this.filtrarPorFaixaEtaria(3, 10);
      this.dataSource = this.crianca
    })

  }

  filterAdolescente() {
    this.selectedOption = 'adolescente';
    this.service.GetVacinasCarteira(this.cpf).subscribe((res) => {
      this.dataSource = res.result.Vacinas;
      this.adolecente = this.filtrarPorFaixaEtaria(11, 17);
      this.dataSource = this.adolecente
    })
  }

  filterAdulto() {
    this.selectedOption = 'adulto';
    this.service.GetVacinasCarteira(this.cpf).subscribe((res) => {
      this.dataSource = res.result.Vacinas;
      this.adulto = this.filtrarPorFaixaEtaria(18, 59);
      this.dataSource = this.adulto
    })
  }

  getCarteira(cpf: number): any {
    this.service.GetVacinasCarteira(cpf).subscribe((res) => {
      if (res.result.Vacinas[0] == null || res.result.Vacinas[0] == '')
        this.isNoCotent = true
      else
        this.isNoCotent = false

      this.dataSource = res.result.Vacinas;
      console.log(res);
      

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
    this.service.setCpfUser(this.cpf)
    this.service.setCarteira(idCarteira)
    this.service.setVacinaCarteira(idVacina)
    const dialog = this.dialog.open(CarteiraUpdateComponent)
    dialog.afterClosed().subscribe(() => {
      this.getCarteira(this.cpf)
    })
  }
}
