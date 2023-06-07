import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel, cepModel, EndModel, celular } from './signup.module';
import { AppService } from 'src/app/settings/Services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup ',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  cep:cepModel = {
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
  
  celular: celular[] = [{
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
  
  submit(): void {
    const currentDate = new Date();

    const Dados = {
      usuario:  this.userForm.value,
      endereco:  this.enderecoForm.value,
      celular: this.cellForm.value
    }
    Dados.usuario.data_Criada = currentDate.toISOString().split('T')[0];
    
    
    this.appService.signUp(Dados).subscribe(() => {
      this.appService.alertMessage('Cadastro Concluído!');
      this.router.navigate(['/'])  
    });
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
