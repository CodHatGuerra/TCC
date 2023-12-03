import { Router } from "@angular/router";
import { AppService } from "src/app/settings/Services/app.service";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ProfileUpdateComponent } from "./profile-update/profile-update.component";
import { ProfileService } from "src/app/settings/Services/profile.service";
import { HeaderComponent } from "../template/header/header.component";

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
  columns: string[] = ["name", "actions"];
  isFuncionario: boolean = false;


  Profile() {
    this.getUser()
  }

  getUser() {
    const user = this.service.GetUser();
    this.infoUser = user;
    console.log(user[0].Data_Nascimento);
    
    if (user[0].Funcionario == 1)
      this.isFuncionario = true
    else
      this.isFuncionario = false

    const dataNascimento = new Date(user[0].Data_Nascimento);
    this.idade = this.profileService.idadeCalculo(dataNascimento)
  }

  updateProfile(id: number) {
    this.profileService.setIdProfile(id);
    const dialog = this.dialog.open(ProfileUpdateComponent);
    dialog.afterClosed().subscribe(() => {
      this.getUser()
      this.service.execuarUser()
    })
  }

  // onFileChange(event: any) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsBinaryString(file);
  //   reader.onload = () => {
  //     const base64 = btoa(reader.result as string);
  //     // aqui você pode usar a string base64 como quiser
  //     this.imageBase64 = base64; // atribui a uma variável do componente
  //     this.apiService.uploadImage(base64); // envia para uma API
  //     this.snackBar.open('Imagem convertida com sucesso!'); // mostra uma mensagem na tela
  //   };
  //  }

}
