import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { catchError } from "rxjs";
import { AppService } from "src/app/settings/Services/app.service";

@Component({
  selector: "app-add-vacciness",
  templateUrl: "./add-vacciness.component.html",
  styleUrls: ["./add-vacciness.component.css"],
})
export class AddVaccinessComponent {
  formVacina: FormGroup;

  userToken = localStorage.getItem("Token");
  user = localStorage.getItem("user");
  headers = new HttpHeaders({
    Authorization: `${this.userToken}`,
  });

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddVaccinessComponent>, private http: HttpClient, private service: AppService) {
    this.formVacina = this.fb.group({
      nome: ["", Validators.required],
    });
  }

  createVacina() {
    const nome = this.formVacina.value.nome
    console.log(nome);
    
    this.http.post('http://localhost:8080/api/vacina', nome, { headers: this.headers }).subscribe((response)=> {
      if(response == null)  
       this.service.AlertMessage("Ocorreu um erro ao tentar registrar uma vacina.");  
      
       this.service.SuccessMessage("Vacina registrada com sucesso!");
       this.dialogRef.close();
    })
  }
}
