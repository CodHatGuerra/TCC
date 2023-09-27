import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AppService } from "src/app/settings/Services/app.service";
import { environment } from "src/environments/environments";

@Component({
  selector: "app-posto-create",
  templateUrl: "./posto-create.component.html",
  styleUrls: ["./posto-create.component.css"],
})
export class PostoCreateComponent {
  cep: number = 0;
  uf: string = "";
  localidade: string = "";
  bairro: string = "";
  logradouro: string = "";
  formPosto: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private appService: AppService,
    private dialogRef: MatDialogRef<PostoCreateComponent>,
    private router: Router
  ) {
    this.formPosto = this.fb.group({
      nome: ["", Validators.required],
      uf: ["", Validators.required],
      localidade: ["", Validators.required],
      logradouro: ["", Validators.required],
      bairro: ["", Validators.required],
      cep: ["", [Validators.required, Validators.pattern("[0-9]*")]],
      numero: ["", [Validators.required, Validators.pattern("[0-9]*")]],
      telefone: ["", [Validators.required, Validators.pattern("[0-9]*")]],
    });
  }

  SubmitCep() {
    this.cep = this.formPosto.get("cep")?.value;
    const url = `http://viacep.com.br/ws/${this.cep}/json/`;
    this.http.get<any>(url).subscribe((response) => {
      this.uf = response.uf;
      (this.localidade = response.localidade),
        (this.bairro = response.bairro),
        (this.logradouro = response.logradouro);
    });
  }

  isObjectEmpty(obj: any): boolean {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (typeof value === "object") {
          if (!this.isObjectEmpty(value)) {
            return false;
          }
        } else {
          if (value !== null && value !== undefined && value !== "") {
            return false;
          }
        }
      }
    }
    return true;
  }

   SubmitPosto(): void {
 
    const formData = {
      posto: {
        nome: this.formPosto.value.nome,
      },
      endereco: {
        cep: this.formPosto.value.cep,
        uf: this.uf,
        localidade: this.localidade,
        bairro: this.bairro,
        logradouro: this.logradouro,
        numero: this.formPosto.value.numero,
      },
      telefone: {
        numero: this.formPosto.value.telefone,
      },
    };

    const userToken = localStorage.getItem("Token");
    const headers = new HttpHeaders({
      Authorization: `${userToken}`,
    });

    this.http
      .post(`${environment.baseUrl}/${environment.Posto}`, formData, {
        headers,
      })
      .subscribe((response) => {
        if (response) {
          this.appService.SuccessMessage("Posto cadastrado");
          this.dialogRef.close();
        } else {
          console.log(response);
          throw this.appService.AlertMessage("Error ao registrar posto");
        }
      });
  }
}
