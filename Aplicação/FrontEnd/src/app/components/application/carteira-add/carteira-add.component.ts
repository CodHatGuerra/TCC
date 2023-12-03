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
  ProximaDose: any;
  constructor(private http: HttpClient,
    private service: AppService, private dialogRef: MatDialogRef<CarteiraAddComponent>,
    private profileService: ProfileService) {
    this.dialogRef.disableClose = true
  }

  close() {
    this.dialogRef.close();
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
      console.log(res.result.Usuario[0].Data_Nascimento);
      this.dataNascimento = res.result.Usuario[0].Data_Nascimento 
      this.userId = res.result.Usuario[0].ID
    });
  }

   formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString();
    return `${year}-${month}-${day}`;
  }

  createVacina() {
    const idade = this.profileService.idadeCalculo(this.dataNascimento);
    const dataNasc = this.formatDate(this.ProximaDose)
    
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
        Funcionario: user[0].Nome,
        Validade: dataNasc
      }
    }

    if(carteira.carteiraUsuario.Validade == undefined)
      throw this.service.AlertMessage("É necessário informar os campos.")
    
      console.log(carteira);

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
