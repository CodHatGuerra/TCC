import { AppService } from "src/app/settings/Services/app.service";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PostoCreateComponent } from "./posto-create/posto-create.component";
import { PostoDeleteComponent } from "./posto-delete/posto-delete.component";
import { ActivatedRoute, Router } from "@angular/router";

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.GetPostos();
  }

  openSigUn(): void {
    const form = this.dialog.open(PostoCreateComponent);
    form.afterClosed();
  }

  openSigOutDelete(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.service.GetByIdPosto(id)
    this.router.navigate(['adm/register/posto/delete', id]);
    this.dialog.open(PostoDeleteComponent);
  }

  GetPostos() {
    this.service.GetPosto().subscribe((response: any) => {
      this.dataSource = response.result.postos;
    });
  }

  columnEmployee: string[] = ["name", "city", "rua", "actions"];
}
