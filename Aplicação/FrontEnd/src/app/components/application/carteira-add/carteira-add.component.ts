import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/settings/Services/app.service';

@Component({
  selector: 'app-carteira-add',
  templateUrl: './carteira-add.component.html',
  styleUrls: ['./carteira-add.component.css']
})
export class CarteiraAddComponent implements OnInit {

  allVacinas: any;
  idVacinas: number = 0;
  constructor(private service: AppService) {
  }

  ngOnInit(): void {
    this.service.GetAllVacinas().subscribe((res) => {
      this.allVacinas = res.result.Vacinas
      console.log(this.allVacinas);
    })
  }

  onSelectionChange(event: any) { 
    this.idVacinas = event.value;
  }
}
