import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/settings/services/app.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { CepModel, EndModel, Telefone, UserModel } from './SignUp.module';

@Component({
  selector: 'app-signup ',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {


   cellForm: FormGroup;
   form: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
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
        senha: ['', Validators.required],
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

  cep: CepModel = {
    cep:0
  }

  user: UserModel = {
    id: null,
    nome: this.form.value.nome,
    cpf: this.form.value.cpf,
    data_Nascimento: this.form.value.data_Nascimento,
    data_Criada: this.form.value.data_Criada,
    rg: this.form.value.rg,
    email: this.form.value.email,
    sexo: this.form.value.sexo,
    senha: this.form.value.senha
  }

  address: EndModel = {
    cep: this.form. value.cep,
    uf: '',
    localidade: '',
    bairro: '',
    logradouro: this.form.value.logradouro,
    numero: this.form.value.numero
  }
  
  telefone: Telefone[] = [{
  numero: 0
}];

  // userForm: FormGroup;
  // enderecoForm: FormGroup;
  
  SignUp(date: any): Observable<any> {
    if(date == null){
      console.log("Contém informações nulas");
    }
    return this.http.post<any>(`${environment.baseUrl}${environment.SignUp}`,date);
  }

  DadosCep() {
    this.cep =this.form.get('cep')?.value;
    const url = `http://viacep.com.br/ws/${this.cep}/json/`;  
    this.http.get<any>(url).subscribe(
     response => {
       this.address.uf = response.uf;
       this.address.localidade = response.localidade,
       this.address.bairro = response.bairro,
       this.address.logradouro = response.logradouro  
     });
   }

  Submit() {
    const currentDate = new Date();
    const Info = {
      usuario: this.user,
      endereco:  this.address,
      telefone: this.cellForm.value
    }
    Info.usuario.data_Criada = currentDate.getDate();
    console.log(Info);
    
    if (Info == null) {
      this.appService.AlertMessage('Complete o formulário.');
    } else {
      this.SignUp(Info).subscribe(
        (response) => {
          if(response.error){
            console.log('Erro ao cadastrar:', response.error);
            this.appService.AlertMessage('Erro ao cadastrar. Verifique os campos e tente novamente.');
          } else {
            this.appService.SuccessMessage('Cadastro Concluído!');
            this.router.navigate(['/signIn']);
          }
        },
      );
    }
  }  
}
