import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './enrroll.module';
import { AppService } from 'src/app/Services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrroll',
  templateUrl: './enrroll.component.html',
  styleUrls: ['./enrroll.component.css']
})
export class EnrrollComponent {
  form: FormGroup;

  user: User = {
    id: null,
    name: '',
    cpf: null,
    email: '',
    phone: null,
    nacionalidade: '',
    data_nascimento: null,
    sexo: '',
    rua: '',
    bairro: '',
    estado: '',
    cep: null,
  }

  constructor(private router: Router, private fb: FormBuilder, private appService: AppService) {
    this.form = this.fb.group({
      name: ['', Validators.required,],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      rg: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      nascimento: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      sexo: ['', Validators.required,],
      rua: ['', Validators.required,],
      bairro: ['', Validators.required,],
      estado: ['', Validators.required,],
      cep: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }
  submit(): void{
    this.user = this.form.value
    this.appService.sigin(this.user).subscribe(() => {
        this.appService.alertMessage('Cadastro Concluído!');
        this.router.navigate(['/login'])
      },() => {
        this.appService.error('Ocorreu um erro')
      }
      )
  }

  
}
