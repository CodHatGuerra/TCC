import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { MatDialog } from '@angular/material/dialog';
import { CarteiraAddComponent } from './carteira-add/carteira-add.component';
import { CarteiraDeleteComponent } from './carteira-delete/carteira-delete.component';
import { ProfileService } from 'src/app/settings/Services/profile.service';

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

  isFuncionario: boolean = true
  idFuncionario: number = 0;

  columnCarteira: string[] = ['vacinas', 'doses', 'acoes'];
  input: string = '';
  cpf: any;
  dataSource: any;

  ngOnInit(): void {
    // this.getCarteira()

    // if (uncionario == 1)
    //   this.isFuncionario = true

    // else
    //   this.isFuncionario = false

    console.log();
  }

  search() {
    this.profileService.setCpf(this.cpf)
    this.getCarteira(this.cpf)
  }

  getCarteira(cpf: number) {
    this.service.GetVacinasCarteira(cpf).subscribe((res) => {
    this.dataSource = res.result.Vacinas
    console.log(res);
    });
  }

  CreateCarteira() {
    const dialog = this.dialog.open(CarteiraAddComponent);
    dialog.afterClosed().subscribe(() => {
      this.getCarteira(this.cpf)
    })
  }

  deleteVacinaCarteira(idVacina: number, idCarteira: number) {
    this.service.setCarteira(idCarteira)
    this.service.setVacinaCarteira(idVacina)
    const dialog = this.dialog.open(CarteiraDeleteComponent)
    return dialog.afterClosed().subscribe(() => {
      this.getCarteira(this.cpf)
    })
  }
}
