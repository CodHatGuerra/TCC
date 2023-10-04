import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { AppService } from "src/app/settings/Services/app.service";
import { PostosService } from "../postos.service";

@Component({
  selector: "app-posto-delete",
  templateUrl: "./posto-delete.component.html",
  styleUrls: ["./posto-delete.component.css"],
})
export class PostoDeleteComponent implements OnInit {
  constructor(
    private service: AppService,
    private postoService: PostosService,
    private dialog: MatDialogRef<PostoDeleteComponent>
  ) { }

  ngOnInit(): void {
    const id = this.service.GetIdPosto();
    this.postoService.GetByIdPosto(id).subscribe((response) => {
      this.response = response.result;
    });
  }

  pageReloaded = false;
  response: any = {};

  deletePosto(): void { 
    this.service
      .DeletePosto(this.response.postos[0].Posto_ID)
      .subscribe((response) => {
        if (response) {
          this.dialog.close();
          this.service.SuccessMessage("Posto Removido com sucesso!");
        } else {
          this.service.AlertMessage("Erro ao remover posto!");
        }
      })
  }

  
}
