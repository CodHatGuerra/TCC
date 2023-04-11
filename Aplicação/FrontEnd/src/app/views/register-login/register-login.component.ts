import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { login } from './register-login.module';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent {
  form: FormGroup;

  login: login = {
    cpf: null,
    senha: ''
  }

  constructor(private appService: AppService,private fb: FormBuilder ,private router: Router){
    this.form = fb.group({
      cpf: ['', [Validators.required, Validators.pattern(`[0-9]*`)]],
      senha: ['', [Validators.required, Validators.pattern(`[0-9]*`)]],
    })
   }
 
   register() :void {
    if(this.form.valid){
      this.login = this.form.value      
      this.appService.login(this.login).subscribe(()=>{
        this.router.navigate(['aplication']);
      });
    }
   }

   cadastro() :void{
    this.router.navigate(['/signup']);
   }
}
