import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { LoginModel } from './SignIn.module';

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

  constructor(private appService: AppService,private fb: FormBuilder ,private router: Router){
    this.form = fb.group({
      cpf: ['', [Validators.required, Validators.pattern(`[0-9]*`)]],
      senha: ['', Validators.required]
    })
   }
 
   register() :void {
    if(this.form.valid){
      this.FormLogin = this.form.value      
      this.appService.SignIn(this.FormLogin).subscribe((response: any) => {        
        if(response.result.autenticado == true ) {
          this.appService.SetUser(response.result.resposta);
          localStorage.setItem('Token', response.result.token);
          this.router.navigate(['adm']);
          this.appService.AlertMessage('Bem vindo!')
        } else {
          this.appService.AlertMessage('Usuário não encontrado')
        }
      });
    } 
   }
}
