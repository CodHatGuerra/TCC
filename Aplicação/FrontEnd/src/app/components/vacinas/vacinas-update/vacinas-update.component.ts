import { Subject } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { AppService } from "src/app/settings/Services/app.service";

@Component({
  selector: "app-vacinas-update",
  templateUrl: "./vacinas-update.component.html",
  styleUrls: ["./vacinas-update.component.css"],
})
export class VacinasUpdateComponent implements OnInit {
  constructor(
    private service: AppService,
    private dialog: MatDialogRef<VacinasUpdateComponent>
  ) {}

  vacina: any;

  ngOnInit(): void {
    const id = this.service.getIdVacina();
    this.service.GetByVacinas(id).subscribe((response) => {
      this.vacina = response.result.postos[0];
      console.log(this.vacina);
    });
  }

  updateVacina(){
    const vacina = {
      ID: this.vacina.ID,
      Nome: this.vacina.Nome
    }

    console.log(vacina);
    
    this.service.UpdateVacina(vacina).subscribe((res)=>{
      if(res)
       this.service.SuccessMessage("Vacina Atualizada !")
        this.dialog.close()
      })
  }
}
