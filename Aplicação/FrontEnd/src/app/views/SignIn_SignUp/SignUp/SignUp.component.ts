import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel, CepModel, EndModel, Telefone } from './SignUp.module';
import { AppService } from 'src/app/settings/Services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup ',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css']
})
export class SignUpComponent {

  cep: CepModel = {
    cep:0
  }

  usuario: UserModel = {
    id: null,
    nome: '',
    cpf: 0,
    data_Nascimento: 0,
    data_Criada: 0,
    rg: 0,
    email: '',
    sexo: '',
    senha: '',
  }

endereco: EndModel = {
    cep: 0,
    uf: '',
    localidade: '',
    bairro: '',
    logradouro: '',
    numero: 0
  }
  
  telefone: Telefone[] = [{
  numero: 0
}];

  userForm: FormGroup;
  enderecoForm: FormGroup;
  cellForm: FormGroup;
    
    constructor(private http: HttpClient, private router: Router, private fb: FormBuilder, private appService: AppService) {
      
      this.userForm = this.fb.group({
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        cpf: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        rg: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        data_Nascimento: ['', Validators.required],
        sexo: ['', Validators.required],
        senha: ['', Validators.required]
      });

      this.enderecoForm = this.fb.group({
        uf: ['', Validators.required],
        localidade: ['', Validators.required],
        logradouro: ['', Validators.required],
        bairro: ['', Validators.required],
        cep: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        numero: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      });

    this.cellForm = this.fb.group({
      numero: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }
  
  Submit() {
    const currentDate = new Date();
    const Dados = {
      usuario:  this.userForm.value,
      endereco:  this.enderecoForm.value,
      telefone: this.cellForm.value
    }
    Dados.usuario.data_Criada = currentDate.toISOString().split('T')[0];
    
    if (Dados == null) {
      this.appService.AlertMessage('Complete o formulário.');
    } else {
      this.appService.SignUp(Dados).subscribe(
        (response) => {
          if(response.error){
            console.log(response.error);
            console.log('Erro ao cadastrar:', response.error);
            this.appService.AlertMessage('Erro ao cadastrar. Verifique os campos e tente novamente.');
          } else {
            this.appService.AlertMessage('Cadastro Concluído!');
            this.router.navigate(['/']);
          }
        },
      );
    }
  }  

  DadosCep() {
   this.cep =this.enderecoForm.get('cep')?.value;
   const url = `http://viacep.com.br/ws/${this.cep}/json/`;  
   this.http.get<any>(url).subscribe(
    response => {
      this.endereco.uf = response.uf;
      this.endereco.localidade = response.localidade,
      this.endereco.bairro = response.bairro,
      this.endereco.logradouro = response.logradouro  
    }
   );
  }
}
