import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/settings/services/app.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { AdressModel, UserModel } from './SignUp.module';

@Component({
  selector: 'app-signup ',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

  adressForm: FormGroup;
  form: FormGroup;
  usuario: any = {}
  endereco: any = {}
  telefone: any = {}
  cep: number = 0;

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
        telefone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        senha: ['', Validators.required]
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

      validateDate(control: any) {
        const inputDate = control;
        console.log(inputDate);
        
        const currentDate = new Date();
        const selectedDate = new Date(inputDate);
    
        if (selectedDate > currentDate) 
          return { futureDate: true };
    
        if (selectedDate.getFullYear() < 1900) 
          throw this.appService.AlertMessage('Data inválida');
    
          if(selectedDate.getFullYear() > 2025)
          throw this.appService.AlertMessage('Data inválida');

        return null;
      }

  SignUp(date: any): Observable<any> {
    if(date == null)
      console.log("Contém informações nulas");
    
    return this.http.post<any>(`${environment.baseUrl}${environment.SignUp}`, date);
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

    const Info = {
      usuario: {
        nome: this.form.value.nome,
        cpf: this.form.value.cpf,
        rg: this.form.value.rg,
        data_Nascimento: this.form.value.data_Nascimento,
        sexo: this.form.value.sexo,
        email: this.form.value.email,
        data_Criada: new Date(),
        senha: this.form.value.senha
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

    if (Info == null) 
      this.appService.AlertMessage('Complete o formulário.');
    else {
      this.SignUp(Info).subscribe(
        (response) => {
          if(response.error){
            console.log('Erro ao cadastrar:', response.error);
            this.appService.AlertMessage('Erro ao cadastrar. Verifique os campos e tente novamente.');
            
          } else {
            this.appService.SuccessMessage('Cadastro Concluído!');
            this.router.navigate(['/signIn']);
          }
        });
    }
  }  
}
