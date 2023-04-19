import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from './signup.module';
import { AppService } from 'src/app/Services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup ',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: FormGroup;

teste = 0

  user: UserModel = {
    id: null,
    nome: '',
    cpf: null,
    rg: null,
    email: '',
    telefone: null,
    sexo: '',
    senha: ''
  }

  constructor(private router: Router, private fb: FormBuilder, private appService: AppService) {
    this.form = this.fb.group({
      nome: ['', Validators.required,],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      rg: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      telefone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      sexo: ['', Validators.required,],
      senha: ['', Validators.required],
    });
  }
  submit(): void{
    if(this.form.valid){
      this.user = this.form.value
        this.appService.signup(this.user).subscribe(() => {
          this.appService.alertMessage('Cadastro Concluído!');
          this.router.navigate(['/'])  
        }
      );
    }
  }        
}
