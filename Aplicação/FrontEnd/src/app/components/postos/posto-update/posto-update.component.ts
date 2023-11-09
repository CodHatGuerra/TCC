import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/settings/Services/app.service';
import { Posto } from '../../interfaces';
import { PostosService } from '../../../settings/Services/postos.service';

@Component({
  selector: 'app-posto-update',
  templateUrl: './posto-update.component.html',
  styleUrls: ['./posto-update.component.css']
})
export class PostoUpdateComponent implements OnInit {

  constructor(
    private service: AppService,
     private dialogRef: MatDialogRef<PostoUpdateComponent>,
     private postoService: PostosService
     ) {
  }
  result: any = {};

  postoUpdate: Posto = {
    posto: {
      nome: "",
      id: 0
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
    this.postoService.GetByIdPosto(id).subscribe((response) => {
      this.result = response.result!;
    });
  }

  updatePosto(): void {
    this.postoUpdate = {
      posto: {
        nome: this.result.postos[0].Nome_do_Posto,
        id: this.result.postos[0].Posto_ID
      },
      endereco: {
        cep: this.result.postos[0].Cep,
        uf: this.result.postos[0].Uf,
        localidade: this.result.postos[0].Localidade,
        bairro: this.result.postos[0].Bairro,
        logradouro: this.result.postos[0].Logradouro,
        numero: this.result.postos[0].Numero 
      },
      telefone: {
        numero: 9
      }
    };

    this.service.UpdatePosto(this.postoUpdate).subscribe((response) => {
      if (response) {
        this.service.SuccessMessage("Posto atulizado com sucesso!");
        this.dialogRef.close();
        window.location.reload();
      }
      else {
        console.log(response);
      }
    });
  }
}