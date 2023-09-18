import { AppService } from "src/app/settings/Services/app.service";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PostoCreateComponent } from "./posto-create/posto-create.component";
import { PostoDeleteComponent } from "./posto-delete/posto-delete.component";
import { ActivatedRoute, Router } from "@angular/router";
import { PostoUpdateComponent } from "./posto-update/posto-update.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  dataSource: any[] = [];
  constructor(
    private dialog: MatDialog,
    private service: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.GetPostos();
  }
  
  openSigUn(): void {
    const form = this.dialog.open(PostoCreateComponent);
    form.afterClosed();
  }

  openSigOutDelete(id: number) {
    this.service.SetIdPosto(id);
    this.router.navigate(['adm', 'register', 'posto', 'delete', id]);
    this.dialog.open(PostoDeleteComponent);
  }

  openUpdatePosto(id: number){
    this.service.SetIdPosto(id);
    this.router.navigate(['adm', 'register', 'posto', 'update', id]);
    this.dialog.open(PostoUpdateComponent);
  }

  GetPostos() {
    this.service.GetPosto().subscribe((response: any) => {
      this.dataSource = response.result.postos;
    });
  }
  columnEmployee: string[] = ["name", "city", "rua", "actions"];
}
