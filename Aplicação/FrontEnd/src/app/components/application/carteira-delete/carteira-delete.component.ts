import { Component } from '@angular/core';
import { AppService } from 'src/app/settings/Services/app.service';

@Component({
  selector: 'app-carteira-delete',
  templateUrl: './carteira-delete.component.html',
  styleUrls: ['./carteira-delete.component.css']
})
export class CarteiraDeleteComponent {
  constructor(private service: AppService){ }
  
  deleteVacina() {
    const id = this.service.getVacinaCarteira()
  }
}
