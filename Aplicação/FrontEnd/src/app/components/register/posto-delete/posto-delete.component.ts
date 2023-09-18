import { LoginModel } from './../../../views/SignIn_SignUp/SignIn/SignIn.module';
import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { AppService } from "src/app/settings/Services/app.service";

@Component({
  selector: "app-posto-delete",
  templateUrl: "./posto-delete.component.html",
  styleUrls: ["./posto-delete.component.css"],
})
export class PostoDeleteComponent {
  constructor(
    private service: AppService,
    private dialogRef: MatDialogRef<PostoDeleteComponent>
  ) { }

  response: any = {};

  ngOnInit(): void {
    const id = this.service.GetIdPosto();
    this.service.GetByIdPosto(id).subscribe((response) => {
      this.response = response.result;
      console.log(response);
    });
  }

  deletePosto(): void{
    this.service.DeletePosto(this.response.postos[0].Posto_ID).subscribe(() => {
      this.service.SuccessMessage("Posto Removido com sucesso!");
      this.dialogRef.close();
    });
  }
}
