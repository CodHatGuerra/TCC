import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/settings/Services/app.service';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-signup ',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css']
})
export class SignUpComponent {

  adressForm: FormGroup;
  form: FormGroup;
  usuario: any = {}
  endereco: any = {}
  telefone: any = {}
  cep: number = 0;
  passWord: number = 0;
  confimPassWord!: string ;
  formData = { data_Nascimento: null as Date | null };

  constructor(
    private http: HttpClient,
    private router: Router,
    private signUpService : SignUpService,
    private fb: FormBuilder,
    private appService: AppService

  ) {

    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      data_Nascimento: [null, Validators.required],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      sexo: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    });

    this.adressForm = this.fb.group({
      uf: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      localidade: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }

  fileName = '';
  
   validateDate(control: any) {
    const inputDate = control;

    const currentDate = new Date();
    const selectedDate = new Date(inputDate);

    if (selectedDate > currentDate)
      return { futureDate: true };

    if (selectedDate.getFullYear() < 1900)
      throw this.appService.AlertMessage('Data inválida');

    if (selectedDate.getFullYear() > 2025)
      throw this.appService.AlertMessage('Data inválida');

    return null;
  }

  DadosCep() {
    this.cep = this.adressForm.get('cep')?.value;
    const url = `http://viacep.com.br/ws/${this.cep}/json/`;
    this.http.get<any>(url).subscribe(
      response => {
        this.endereco.uf = response.uf;
        this.endereco.localidade = response.localidade,
          this.endereco.bairro = response.bairro,
          this.endereco.logradouro = response.logradouro
      });
  }
  
  formatDate(value: string | null | undefined): void {

    if (value === null || value === undefined) {
      this.formData.data_Nascimento = null;
      return;
    }
    if (typeof value !== 'string') {
      // Se for uma data, use-a diretamente
      this.formData.data_Nascimento = value;
      return;
    }
    
    const numericValue = value.replace(/\D/g, '');

    const formattedDate = `${numericValue.slice(4, 8)}/${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}`;

    this.formData.data_Nascimento = new Date(formattedDate);
    console.log('Data Nascimento formatada:', this.formData.data_Nascimento);
  }

  Submit() {
    this.validateDate(this.form.value.data_Nascimento)
    const newDate = new Date()
   
    if (this.form.invalid)
      throw this.appService.AlertMessage('Complete o formulário.');

      this.DadosCep() ;
    this.signUpService.Info.usuario.nome = this.form.value.nome;
    this.signUpService.Info.usuario.cpf = this.form.value.cpf;
    this.signUpService.Info.usuario.data_Nascimento = this.form.value.data_Nascimento;
    this.signUpService.Info.usuario.sexo = this.form.value.sexo;
    this.signUpService.Info.usuario.email = this.form.value.email;
    this.signUpService.Info.usuario.data_Criada = newDate.toISOString().split('T')[0];
    this.signUpService.Info.telefone.numero = this.form.value.telefone;

    console.log(this.form.value.data_Nascimento);
    
    this.router.navigate(["create-passWord"])
  }
}

