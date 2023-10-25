import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppService } from "src/app/settings/Services/app.service";
import { SignUpService } from "../sign-up.service";
import { Observable } from "rxjs";
import { environment } from "src/environments/environments";

@Component({
  selector: "app-create-pass-word",
  templateUrl: "./create-password.component.html",
  styleUrls: ["./create-password.component.css"],
})
export class CreatePassWordComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private appService: AppService,
    private signUpService: SignUpService
  ) {
    this.form = this.fb.group({
      senha: ["", Validators.required],
      confirmarSenha: ["", Validators.required],
    });
  }

  SignUp(date: any): Observable<any> {
    if (date == null)
      console.log("Contém informações nulas");

    return this.http.post<any>(`${environment.baseUrl}${environment.SignUp}`, date);
  }

  submit(): void {
    if (this.form.value.senha! == this.form.value.confirmarSenha)
      throw this.appService.AlertMessage("As senhas não coincidem");

    const Info = {
      usuario: {
        nome: this.signUpService.Info.usuario.nome,
        cpf: this.signUpService.Info.usuario.cpf,
        rg: this.signUpService.Info.usuario.rg,
        data_Nascimento: this.signUpService.Info.usuario.data_Nascimento,
        sexo: this.signUpService.Info.usuario.sexo,
        email: this.signUpService.Info.usuario.email,
        data_Criada: this.signUpService.Info.usuario.data_Criada,
      },
      endereco: {
        cep: this.signUpService.Info.endereco.cep,
        uf:  this.signUpService.Info.endereco.uf,
        localidade:  this.signUpService.Info.endereco.localidade,
        bairro:  this.signUpService.Info.endereco.logradouro,
        logradouro: this.signUpService.Info.endereco.logradouro,
        numero:  this.signUpService.Info.endereco.numero,
      },
      telefone: {
        numero:  this.signUpService.Info.telefone.numero,
      },
    };

    this.SignUp(Info).subscribe((response) => {
      if (response.error) {
        console.log("Erro ao cadastrar:", response.error);
        this.appService.AlertMessage(
          "Erro ao cadastrar. Verifique os campos e tente novamente."
        );
      } else {
        this.appService.SuccessMessage("Cadastro Concluído!");
        this.router.navigate([""]);
      }
    });
  }
}
