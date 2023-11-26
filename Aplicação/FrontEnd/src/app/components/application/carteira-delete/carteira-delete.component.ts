import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/settings/Services/app.service';

@Component({
  selector: 'app-carteira-delete',
  templateUrl: './carteira-delete.component.html',
  styleUrls: ['./carteira-delete.component.css']
})
export class CarteiraDeleteComponent {
  constructor(private service: AppService, private dialog: MatDialogRef<CarteiraDeleteComponent>) { }

  deleteVacina() {
    const idVacina = this.service.getVacinaCarteira()
    const idCarteira = this.service.getCarteira()

    console.log(`id-carteira ${idCarteira}`);
    console.log(`id-Vacina ${idVacina}`);
    
    this.service.DeleteVacinaCarteira(idCarteira, idVacina).subscribe((res)=>{
      console.log(res);
      this.dialog.close()
      this.service.SuccessMessage("Vacina removida!")
    })
  }
}
