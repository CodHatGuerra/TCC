import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/settings/Services/app.service';

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

  allVacinas: any;
  idVacina: number = 0;
  constructor(private service: AppService, private dialogRef: MatDialogRef<CarteiraAddComponent>) {
  }

  ngOnInit(): void {
    this.service.GetAllVacinas().subscribe((res) => {
      this.allVacinas = res.result.Vacinas
      console.log(this.allVacinas);
    })
  }

  createVacina() {
    const carteira = {
      carteiraUsuario:
      {
        Usuario_ID: this.userId,
        Vacina_ID: this.idVacina,
        Dose_01: this.dose01,
        Dose_02: this.dose02,
        Dose_03: this.dose03
      }
    }
    console.log(carteira);

    if(carteira.carteiraUsuario.Vacina_ID == null)
    this.service.AlertMessage("É necessário adicionar uma vacina!")

    this.service.CreateCarteira(carteira).subscribe((res) => {
      console.log(res);
        this.dialogRef.close()
        this.service.SuccessMessage("Vacina registrada com sucesso!")
    })
  }

  onSelectionChange(event: any) {
    if(event.value == null || event.value == 0)
    this.service.AlertMessage("Nenhuma vacina registrada!")

    this.idVacina = event.value;
    const user = this.service.GetUser();
    this.userId = user[0].ID
  }

}
