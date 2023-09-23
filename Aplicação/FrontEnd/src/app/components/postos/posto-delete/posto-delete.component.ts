import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { AppService } from "src/app/settings/Services/app.service";

@Component({
  selector: "app-posto-delete",
  templateUrl: "./posto-delete.component.html",
  styleUrls: ["./posto-delete.component.css"],
})
export class PostoDeleteComponent implements OnInit {
  constructor(
    private service: AppService,
    private dialogRef: MatDialogRef<PostoDeleteComponent>
  ) {}

  ngOnInit(): void {
    const id = this.service.GetIdPosto();
    this.service.GetByIdPosto(id).subscribe((response) => {
      this.response = response.result;
      console.log(response);
    });
  }

  response: any = {};

  deletePosto(): void {
    this.service
      .DeletePosto(this.response.postos[0].Posto_ID)
      .subscribe((response) => {
        if (response) {
          window.location.reload();
          setTimeout(() => {
            this.service.SuccessMessage("Posto Removido com sucesso!");
          }, 1000);
        }
      });
  }
}
