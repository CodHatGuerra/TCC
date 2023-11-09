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
  columns: string[] = ["name", "actions"];

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
    this.profileService.setIdProfile(id);
    this.dialog.open(ProfileUpdateComponent);
  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("thumbnail", file);

      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent: string | ArrayBuffer | null = reader.result;

        if (typeof fileContent === 'string')
          console.log('Conteúdo do arquivo como string:', fileContent);

      };

      reader.readAsText(file);
    }
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
