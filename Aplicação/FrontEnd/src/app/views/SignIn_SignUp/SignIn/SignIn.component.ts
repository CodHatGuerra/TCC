import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { LoginModel } from './signIn.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css']
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

 
   register() :void {
    if(this.form.valid){
      this.FormLogin = this.form.value 
      this.SignIn(this.FormLogin).subscribe((response: any) => {        
       if(response.result.autenticado == true ) {
          this.appService.SetUser(response.result.resposta);
          localStorage.setItem('Token', response.result.token);
          this.router.navigate(['adm']);
          this.appService.AlertMessage('Bem vindo!')
        } else {
          this.appService.AlertMessage('Usuário não encontrado.')
        }
      });
    } else {
      this.appService.AlertMessage('Complete os campos para prosseguir.')
    }
   }
}
