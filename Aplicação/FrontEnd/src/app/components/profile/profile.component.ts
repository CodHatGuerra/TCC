import { Router } from "@angular/router";
import { AppService } from "src/app/settings/Services/app.service";
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ProfileUpdateComponent } from "./profile-update/profile-update.component";
import { ProfileService } from "src/app/settings/Services/profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
  constructor(
    private service: AppService,
    private router: Router,
    private dialog: MatDialog,
    private profileService: ProfileService
  ) {
    this.Profile();
  }

  infoUser: any[] = [];
  idade: number = 0;

  Profile() {
    const user = this.service.GetUser();
    if (user) {
      this.infoUser = user;
      const dataNascimento = new Date(user[0].Data_Nascimento);
      const hoje = new Date();
      const diffMilissegundos = hoje.getTime() - dataNascimento.getTime();
      const diffAnos = Math.floor(
        diffMilissegundos / (365 * 24 * 60 * 60 * 1000)
      );
      this.idade = diffAnos;
    } else {
      this.router.navigate([""]);
    }
  }

  updateProfile(id: number) {
    this.profileService.setIdProfile(id)
    this.dialog.open(ProfileUpdateComponent);
  }
  columns: string[] = ["name", "actions"];
}
