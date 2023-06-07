import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { loginModel } from './signin.module';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
form: FormGroup;

  FormLogin: loginModel = {
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
      this.appService.signIn(this.FormLogin).subscribe((response: any) => {        
        if(response.result.autenticado == true ) {
          this.appService.setUser(response.result.resposta);
          localStorage.setItem('Token', response.result.token);
          this.router.navigate(['aplication']);
          this.appService.alertMessage('Bem vindo!')
        } else {
          this.appService.alertMessage('Usuário não encontrado')
        }
      });
    } 
   }

   cadastro() :void{
    this.router.navigate(['/signup']);
   }
}
