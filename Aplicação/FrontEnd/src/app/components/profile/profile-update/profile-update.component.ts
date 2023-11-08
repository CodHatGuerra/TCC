import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AppService } from "src/app/settings/Services/app.service";
import { ProfileService } from "src/app/settings/Services/profile.service";
import { Profile } from "../../interfaces";

@Component({
  selector: "app-profile-update",
  templateUrl: "./profile-update.component.html",
  styleUrls: ["./profile-update.component.css"],
})
export class ProfileUpdateComponent implements OnInit {
  profile: any;
  sexo: string ="Masculino";

  constructor(
    private dialog: MatDialog,
    private service: AppService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    const id = this.profileService.getIdProfile();
    this.profileService.getUserById(id).subscribe((response) => {
      this.profile = response.result.postos[0];
      console.log(response);
      this.sexo = this.profile.sexo; 
      
    });
  }

  profileObj: Profile = {
    usuario: {
      nome: "",
      cpf: 0,
      data_Nascimento: "",
      sexo: "",
      email: "",
      data_Criada: "",
      senha: 0,
    },
    telefone: {
      numero: 0,
    },
  };
 
  updateProfile() {
    this.profileObj = {
      usuario: {
        nome: this.profile.Nome,
        cpf: this.profile.Cpf,
        data_Nascimento: this.profile.data_Nascimento,
        sexo: "Masculino",
        email: this.profile.Email,
        data_Criada: this.profile.data_Criada,
        senha: 0,
      },
      telefone: {
        numero: 0,
      },
    };
    console.log(this.profileObj);
  }
    
}
