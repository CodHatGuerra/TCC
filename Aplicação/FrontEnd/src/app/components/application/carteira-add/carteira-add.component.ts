import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/settings/Services/app.service';
import { ProfileService } from 'src/app/settings/Services/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carteira-add',
  templateUrl: './carteira-add.component.html',
  styleUrls: ['./carteira-add.component.css']
})
export class CarteiraAddComponent implements OnInit {

  dose01: boolean = false;
  dose02: boolean = false;
  dose03: boolean = false;
  userId: number = 0;
  teste = true
  dataNascimento: any;
  cpf: any;
  allVacinas: any;
  idVacina: number = 0;
  constructor(private http: HttpClient,
    private service: AppService, private dialogRef: MatDialogRef<CarteiraAddComponent>,
    private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.service.GetAllVacinas().subscribe((res) => {
      this.allVacinas = res.result.Vacinas
    })

    this.userCpf()
  }

  userCpf() {
    const cpfUser = this.profileService.getCpf()
    this.cpf = cpfUser;
    this.service.GetUserByCpf(this.cpf).subscribe((res) => {
      this.dataNascimento = res.result.Usuario[0].Data_Nascimento
      this.userId = res.result.Usuario[0].ID
    });
  }

  createVacina() {
    const idade = this.profileService.idadeCalculo(this.dataNascimento);

   const user = this.service.GetUser();

    const carteira = {
      carteiraUsuario:
      {
        Usuario_ID: this.userId,
        Vacina_ID: this.idVacina,
        Dose_01: this.dose01,
        Dose_02: this.dose02,
        Dose_03: this.dose03,
        Idade: idade,
        Funcionario: user[0].Nome 
      }
    }

    if (this.userId == undefined || this.userId == null)
      throw this.service.AlertMessage("É necessário adicionar uma vacina!")

    this.service.CreateCarteira(carteira).subscribe((res) => {
      this.dialogRef.close()
      this.service.SuccessMessage("Vacina registrada com sucesso!")
    })
  }

  onSelectionChange(event: any) {
    if (event.value == null || event.value == 0)
      this.service.AlertMessage("Nenhuma vacina registrada!")

    this.idVacina = event.value;
  }
}
