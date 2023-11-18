import { Component, OnInit } from '@angular/core';
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

  allVacinas: any;
  idVacina: number = 0;
  constructor(private service: AppService) {
  }

  ngOnInit(): void {
    this.service.GetAllVacinas().subscribe((res) => {
      this.allVacinas = res.result.Vacinas
      console.log(this.allVacinas);
    })
  }

  onSelectionChange(event: any) { 
    this.idVacina = event.value;
    const user = this.service.GetUser();
    const carteira ={
    carteiraUsuario: 
    {
      Usuario_ID: user.Id,
      Vacina_ID: this.idVacina,
      Dose_01: this.dose01,
      Dose_02: this.dose02,
      Dose_03: this.dose03
    }
  }
  }
}
