import { LoginModel } from './SignIn.module';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.css']
})
export class SignInComponent {
form: FormGroup;

  FormLogin: LoginModel = {
    cpf: 0,
    senha: ''
  }

  constructor(private http: HttpClient, private appService: AppService,private fb: FormBuilder ,private router: Router){
    this.form = fb.group({
      cpf: ['', [Validators.required, Validators.pattern(`[0-9]*`)]],
      senha: ['', Validators.required]
    })
   }
   
   SignIn(login: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(`${environment.baseUrl}${environment.SignIn}`, login);
  }

  PrimaryName(nome: string){
    const palavras = nome.split(' ');
    if (palavras.length > 0) {
      return palavras[0];
    }
    return '';
  }

   Register() :void {
    if(this.form.valid){
      this.FormLogin = this.form.value 
      this.SignIn(this.FormLogin).subscribe((response: any) => {        
       if(response.result.autenticado == true) {
          this.appService.SetUser(response.result.resposta);
          localStorage.setItem('Token', response.result.token);
          this.router.navigate(['adm', 'application']);
         const name =  this.PrimaryName(response.result.resposta[0].Nome)
          this.appService.Message(`Bem vindo ${name} !`)
        } else {
          this.appService.AlertMessage('Usuário não encontrado.')
        }
      });
    } else {
      this.appService.AlertMessage('Complete os campos para prosseguir.')
    }
   }
}
