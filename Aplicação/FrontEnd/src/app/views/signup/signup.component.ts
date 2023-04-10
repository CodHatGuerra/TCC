import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './signup.module';
import { AppService } from 'src/app/Services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup ',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: FormGroup;

  user: User = {
    id: null,
    nome: '',
    cpf: null,
    email: '',
    numero: null,
    nacionalidade: '',
    estado_civil: '',
    data_nascimento: null,
    sexo: '',
    rua: '',
    bairro: '',
    estado: '',
    cep: null,
    senha: ''
  }

  constructor(private router: Router, private fb: FormBuilder, private appService: AppService) {
    this.form = this.fb.group({
      nome: ['', Validators.required,],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      rg: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      numero: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      data_nascimento: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      sexo: ['', Validators.required,],
      estado_civil: ['', Validators.required,],
      nacionalidade: ['', Validators.required,],
      rua: ['', Validators.required,],
      bairro: ['', Validators.required,],
      estado: ['', Validators.required,],
      cep: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      senha: ['', Validators.required,],
    });
  }
  submit(): void{
    if(this.form.valid){
      this.user = this.form.value
        this.appService.signup(this.user).subscribe(() => {
          this.appService.alertMessage('Cadastro Concluído!');
          this.router.navigate(['/'])  
        },() => {this.appService.error('Erro')}
    );
    }        
}
  }
