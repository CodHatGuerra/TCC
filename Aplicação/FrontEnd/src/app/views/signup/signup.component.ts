import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from './signup.module';
import { AppService } from 'src/app/Services/app.service';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-signup ',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: FormGroup;
  cep:any

  user: UserModel = {
    id: null,
    nome: '',
    cpf: 0,
    rg: 0,
    email: '',
    telefone: 0,
    sexo: '',
    senha: '',
    cep: 0,
    uf: '',
    localidade: '',
    bairro: '',
    logradouro: '',
    numero: 0
  }

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder, private appService: AppService) {
    this.form = this.fb.group({
      nome: ['', Validators.required,],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      rg: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      telefone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      sexo: ['', Validators.required,],
      senha: ['', Validators.required],
      uf: ['', Validators.required,],
      localidade: ['', Validators.required,],
      logradouro: ['', Validators.required,],
      bairro: ['', Validators.required,],
      rua: ['', Validators.required,],
      cep: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      numero: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }

  submit(): void {
    if(this.form.valid){
      this.user = this.form.value
        this.appService.signup(this.user).subscribe(() => {
          this.appService.alertMessage('Cadastro Concluído!');
          this.router.navigate(['/'])  
        }
      );
    }
  }        

  
  DadosCep() {
   this.cep =this.form.get('cep')?.value;
   const url = `http://viacep.com.br/ws/${this.cep}/json/`;  
   this.http.get<any>(url).subscribe(
    response => {
      this.user.uf = response.uf;
      this.user.localidade = response.localidade,
      this.user.bairro = response.bairro,
      this.user.logradouro = response.logradouro  
    }
   );
  }
}
