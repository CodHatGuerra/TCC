import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/settings/Services/app.service';

@Component({
  selector: 'app-carteira-add',
  templateUrl: './carteira-add.component.html',
  styleUrls: ['./carteira-add.component.css']
})
export class CarteiraAddComponent implements OnInit {

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
      Dose_01: true,
      Dose_02: true,
      Dose_03: false
    }
  }
  }
}
