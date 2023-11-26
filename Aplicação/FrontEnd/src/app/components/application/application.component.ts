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
  constructor(
    private service: AppService, private router: Router,
    private dialog: MatDialog,
    private profileService: ProfileService) { }

  isFuncionario: boolean = false
  idFuncionario: number = 0;
  columnCarteira: string[] = ['vacinas', 'doses', 'acoes'];
  input: string = '';
  cpf: any;
  dataSource: any;

  dose01: boolean = false;
  dose02: boolean = false;
  dose03: boolean = false;

  ngOnInit(): void {
    // this.getCarteira()
    const user = this.service.GetUser();

    if (user[0].Funcionario == 1)
      this.isFuncionario = true

    else
      this.isFuncionario = false
  }

  search() {
    this.profileService.setCpf(this.cpf)
    // this.dialog.open(SppinerComponent)
    this.getCarteira(this.cpf)
  }

  getCarteira(cpf: number) {
    this.service.GetVacinasCarteira(cpf).subscribe((res) => {
      this.dataSource = res.result.Vacinas

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
