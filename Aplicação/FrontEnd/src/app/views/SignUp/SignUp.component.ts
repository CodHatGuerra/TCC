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
      cpf: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      rg: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      data_Nascimento: ['', Validators.required],
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
  
  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("thumbnail", file);
  
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const fileContent: string | ArrayBuffer | null = reader.result;
  
        if (typeof fileContent === 'string') {
          // A variável 'fileContent' agora contém o conteúdo do arquivo como uma string.
          console.log('Conteúdo do arquivo como string:', fileContent);
  
          // Você pode usar o conteúdo do arquivo como desejar aqui.
        }
      };
  
      // Lê o arquivo como uma string
      reader.readAsText(file);
      
      // Envie o arquivo para o servidor ou realize outras operações necessárias.
      // Certifique-se de que o código de envio para o servidor seja chamado dentro deste bloco
      // após a leitura do arquivo.
    }
}
  validateDate(control: any) {
    const inputDate = control;
    console.log(inputDate);

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

  Submit() {
    this.validateDate(this.form.value.data_Nascimento)
    const newDate = new Date()
   
    const Info = {
      usuario: {
        nome: this.form.value.nome,
        cpf: this.form.value.cpf,
        rg: this.form.value.rg,
        data_Nascimento: this.form.value.data_Nascimento,
        sexo: this.form.value.sexo,
        email: this.form.value.email,
        data_Criada: newDate.toISOString().split('T')[0]
      },
      endereco: {
        cep: this.adressForm.value.cep,
        uf: this.adressForm.value.uf,
        localidade: this.adressForm.value.localidade,
        bairro: this.adressForm.value.logradouro,
        logradouro: this.adressForm.value.logradouro,
        numero: this.adressForm.value.numero
      },
      telefone: {
        numero: this.form.value.telefone
      }
    }

    if (this.form.invalid)
      throw this.appService.AlertMessage('Complete o formulário.');

      this.DadosCep() ;
    this.signUpService.Info.usuario.nome = this.form.value.nome;
    this.signUpService.Info.usuario.cpf = this.form.value.cpf;
    this.signUpService.Info.usuario.rg = this.form.value.rg;
    this.signUpService.Info.usuario.data_Nascimento = this.form.value.data_Nascimento;
    this.signUpService.Info.usuario.sexo = this.form.value.sexo;
    this.signUpService.Info.usuario.email = this.form.value.email;
    this.signUpService.Info.usuario.data_Criada = newDate.toISOString().split('T')[0];
    this.signUpService.Info.endereco.cep = this.adressForm.value.cep;
    this.signUpService.Info.endereco.uf = this.endereco.uf;
    this.signUpService.Info.endereco.localidade = this.endereco.localidade;
    this.signUpService.Info.endereco.logradouro = this.adressForm.value.logradouro;
    this.signUpService.Info.endereco.bairro = this.endereco.bairro;
    this.signUpService.Info.endereco.numero = this.adressForm.value.numero;
    this.signUpService.Info.telefone.numero = this.form.value.telefone;

    this.router.navigate(["create-passWord"])
  }
}

