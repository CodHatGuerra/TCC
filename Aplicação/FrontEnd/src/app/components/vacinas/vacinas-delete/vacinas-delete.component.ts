import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { AppService } from "src/app/settings/Services/app.service";

@Component({
  selector: "app-vacinas-delete",
  templateUrl: "./vacinas-delete.component.html",
  styleUrls: ["./vacinas-delete.component.css"],
})
export class VacinasDeleteComponent implements OnInit {
  constructor(
    private service: AppService,
    private dialog: MatDialogRef<VacinasDeleteComponent>
  ) {
    this.dialog.disableClose = true
  }

  vacina: any;

  ngOnInit(): void {
    const id = this.service.getIdVacina();
    this.service.GetByVacinas(id).subscribe((response) => {
      this.vacina = response.result.postos[0];
      console.log(this.vacina);
    });
  }

  deleteVacina() {
    this.service.DeleteVacinas(this.vacina.ID).subscribe((re) => {
      console.log(this.vacina.ID);
       this.service.SuccessMessage("Vacina removida !");

      this.dialog.close();
    });
  }
}
