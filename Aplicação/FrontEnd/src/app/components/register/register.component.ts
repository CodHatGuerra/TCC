import { AppService } from "src/app/settings/Services/app.service";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PostoCreateComponent } from "./posto-create/posto-create.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  dataSource: any[] = [];
  constructor(private dialog: MatDialog, private appService: AppService) {}

  ngOnInit(): void {
    this.GetPostos();
  }

  openSigUn(): void {
    const form = this.dialog.open(PostoCreateComponent);
    form.afterClosed();
  }

  GetPostos() {
    this.appService.GetPosto().subscribe((response: any) => {
      this.dataSource = response.result.postos;
      console.log(response);
    });
  }

  columnEmployee: string[] = ["name", "city", "actions"];
}
