import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AppService } from "src/app/settings/Services/app.service";
import { ProfileService } from "src/app/settings/Services/profile.service";
import { Profile } from "../../interfaces";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-profile-update",
  templateUrl: "./profile-update.component.html",
  styleUrls: ["./profile-update.component.css"],
})
export class ProfileUpdateComponent implements OnInit {
  profile: any;
  sexo: string = "Masculino";
  imageUrl: any;
  dataNascimento: any;
  base64: any;

  constructor(
    private dialog: MatDialog,
    private service: AppService,
    private profileService: ProfileService,
    private sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<ProfileUpdateComponent>
  ) { 
    this.dialogRef.disableClose = true
  }

  ngOnInit(): void {
    const id = this.profileService.getIdProfile();
    this.profileService.getUserById(id).subscribe((response) => {
      this.profile = response.result.postos[0];
      this.profile.Data_Nascimento = this.ajusteData(this.profile.Data_Nascimento);
      this.imageUrl = this.profile.Imagem
      this.sexo = this.profile.sexo;
    });
  }

  ajusteData(dataNascimentoString: any) {
    const dataNascimento = new Date(dataNascimentoString);
    const ano = dataNascimento.getFullYear();
    const mes = (dataNascimento.getMonth() + 1).toString().padStart(2, '0');
    const dia = dataNascimento.getDate().toString().padStart(2, '0');

    return new Date(`${ano}-${mes}-${dia}`);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent: string | ArrayBuffer | null = reader.result;
        this.base64 = fileContent
        if (typeof fileContent === 'string') {
          this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(`${fileContent}`);

        } else if (fileContent instanceof ArrayBuffer) {
          const buffer = new Uint8Array(fileContent);
          const base64String = btoa(String.fromCharCode.apply(null, Array.from(buffer)));
          console.log('Conteúdo do arquivo como ArrayBuffer (base64):', base64String);
        }
      };

      reader.readAsDataURL(file);
    }
  }

  profileObj: Profile = {
    usuario: {
      nome: "",
      cpf: 0,
      data_Nascimento: "",
      sexo: "",
      email: "",
      senha: "",
      imagem: ""
    },
    telefone: {
      numero: 0,
    },
  };

  private formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString();
    return `${year}-${month}-${day}`;
  }
 

  updateProfile() {
    const date = this.formatDate(this.profile.Data_Nascimento)
    
    if (this.base64 == null || this.base64 == undefined)
      this.base64 = this.profile.Imagem
    
      console.log(this.profile.Imagem);
    
    const user = this.service.GetUser();
    user[0].Cpf = this.profile.Cpf;
    user[0].Nome = this.profile.Nome
    user[0].Sexo = this.profile.Sexo,
    user[0].Email = this.profile.Email
    user[0].Imagem = this.base64
    user[0].Numero_Telefone = this.profile.Numero_do_Telefone,
    user[0].Data_Nascimento = date

    console.log(user);
    
    localStorage.setItem('user', JSON.stringify(user))
    this.profileObj = {
      usuario: {
        nome: this.profile.Nome,
        cpf: this.profile.Cpf,
        data_Nascimento: date,
        sexo: this.profile.Sexo,
        email: this.profile.Email,
        senha: "123",
        imagem: this.base64
      },
      telefone: {
        numero: this.profile.Numero_do_Telefone
      },
    };

    this.profileService.updateProfile(this.profile.ID, this.profileObj).subscribe((res) => {
      this.dialogRef.close()
      this.service.SuccessMessage("Seu perfil foi atualizado!")
      console.log(this.service.GetUser());
    })  
  }
}
