import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/settings/Services/app.service';
import { ProfileService } from 'src/app/settings/Services/profile.service';

@Component({
  selector: 'app-carteira-update',
  templateUrl: './carteira-update.component.html',
  styleUrls: ['./carteira-update.component.css']
})
export class CarteiraUpdateComponent implements OnInit {

  constructor(private service: AppService, private profileService: ProfileService,
    private dialogRef: MatDialogRef<CarteiraUpdateComponent>) { this.dialogRef.disableClose = true }

  allVacinas: any;
  dose01: boolean = false;
  dose02: boolean = false;
  dose03: boolean = false;
  idVacina: any;
  ProximaDose: any;

  vacinaNome: any;
  dataAp: any;
  onSelectionChange(event: any) { }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    const idCarteira = this.service.getCarteira()
    const idVacina = this.service.getVacinaCarteira()

    this.service.GetVacinaCarteira(idCarteira, idVacina).subscribe((res) => {
      if (res.result.Vacinas[0].Dose_01 == 1)
        this.dose01 = true

      if (res.result.Vacinas[0].Dose_02 == 1)
        this.dose02 = true

      if (res.result.Vacinas[0].Dose_03 == 1)
        this.dose03 = true

      const data = this.ajusteData(res.result.Vacinas[0].Validade)
      this.dataAp = data
      console.log(this.dataAp);

    })

    this.idVacina = idVacina
    this.service.GetByVacinas(idVacina).subscribe((res) => {
      this.vacinaNome = res.result.postos[0].Nome
    })
  }

  ajusteData(dataNascimentoString: any) {
    const dataNascimento = new Date(dataNascimentoString);
    const ano = dataNascimento.getFullYear();
    const mes = (dataNascimento.getMonth() + 1).toString().padStart(2, '0');
    const dia = dataNascimento.getDate().toString().padStart(2, '0');

    return new Date(`${ano}-${mes}-${dia}`);
  }

  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString();
    return `${year}-${month}-${day}`;
  }

  updateVacina() {
    const idCarteira = this.service.getCarteira()
    const cpf = this.service.getCpfUser()
    const user = this.service.GetUser()

    this.service.GetUserByCpf(cpf).subscribe((res) => {

      const idade = this.profileService.idadeCalculo(res.result.Usuario[0].Data_Nascimento)
      const dataNasc = this.formatDate(this.dataAp)


      const carteira = {
        carteiraUsuario:
        {
          Usuario_ID: idCarteira,
          Vacina_ID: this.idVacina,
          Dose_01: this.dose01,
          Dose_02: this.dose02,
          Dose_03: this.dose03,
          Idade: idade,
          Funcionario: user[0].Nome,
          Validade: dataNasc
        }
      }

      console.log(carteira);

      this.profileService.updateCarteira(carteira).subscribe((res) => {
        console.log(res);
        this.dialogRef.close()
        this.service.SuccessMessage("Doses atualizadas!")

      })
    });

  }
}
