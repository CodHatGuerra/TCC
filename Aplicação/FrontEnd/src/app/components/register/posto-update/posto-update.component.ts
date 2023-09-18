import { Posto } from './../../interfaces';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/settings/Services/app.service';

@Component({
  selector: 'app-posto-update',
  templateUrl: './posto-update.component.html',
  styleUrls: ['./posto-update.component.css']
})
export class PostoUpdateComponent implements OnInit {

  constructor(private service: AppService, private dialogRef: MatDialogRef<PostoUpdateComponent>) {
  }
  result: any = {};

  postoUpdate = {
    id: this.result.result[0].Posto_ID,
    posto: {
      nome: this.result.postos[0].Nome_do_Posto
    },
    endereco: {
      cep: this.result.postos[0].Cep,
      uf: this.result.postos[0].Uf,
      localidade: this.result.postos[0].Localidade,
      bairro: this.result.postos[0].Bairro,
      logradouro: this.result.postos[0].Logradouro,
      numero: this.result.Numero[0]
    },
    telefone: {
      numero: 9
    }
  }
  ngOnInit(): void {
    const id = this.service.GetIdPosto();
    this.service.GetByIdPosto(id).subscribe((response) => {
      console.log(response);
      this.result = response.result;
    });
  }

  updatePosto(): void {
    this.service.UpdatePosto(this.postoUpdate).subscribe(() => {
      this.service.SuccessMessage("Posto Removido com sucesso!");
      this.dialogRef.close();
    });
  }
}