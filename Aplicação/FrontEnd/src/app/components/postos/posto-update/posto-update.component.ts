import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/settings/Services/app.service';
import { Posto } from '../../interfaces';

@Component({
  selector: 'app-posto-update',
  templateUrl: './posto-update.component.html',
  styleUrls: ['./posto-update.component.css']
})
export class PostoUpdateComponent implements OnInit {

  constructor(private service: AppService, private dialogRef: MatDialogRef<PostoUpdateComponent>) {
  }
  result: any = {};

  postoUpdate: Posto = {
    posto: {
      nome: ""
    },
    endereco: {
      cep: 0,
      uf: "",
      localidade: "",
      bairro: "",
      logradouro: "",
      numero: 0
    },
    telefone: {
      numero: 0
    }
  };

  ngOnInit(): void {
    const id = this.service.GetIdPosto();
    this.service.GetByIdPosto(id).subscribe((response) => {
      this.result = response.result!;
    });
  }

  updatePosto(): void {
    this.postoUpdate = {
      posto: {
        nome: this.result.postos[0].Nome_do_Posto
      },
      endereco: {
        cep: this.result.postos[0].Cep,
        uf: this.result.postos[0].Uf,
        localidade: this.result.postos[0].Localidade,
        bairro: this.result.postos[0].Bairro,
        logradouro: this.result.postos[0].Logradouro,
        numero: this.result.postos[0].Numero // Note que removi o [0] aqui, pois não parece necessário
      },
      telefone: {
        numero: 9
      }
    };

    console.log(this.postoUpdate);
    this.service.UpdatePosto(this.postoUpdate).subscribe((response) => {
      if (response) {
        this.service.SuccessMessage("Posto atulizado com sucesso!");
        this.dialogRef.close();
      }
      else {
        console.log(response);
      }
    });
  }
}