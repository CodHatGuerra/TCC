import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/settings/Services/app.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-postos',
  templateUrl: './postos.component.html',
  styleUrls: ['./postos.component.css']
})
export class PostosComponent {
  
    cep: number = 0;
    uf: string = '';
    localidade: string = '';
    bairro: string = '';
    logradouro: string = '';
    formPosto: FormGroup;
    
  constructor(private http: HttpClient, private fb: FormBuilder, private service : AppService) {
    this.formPosto = this.fb.group({
      nome: ['', Validators.required],
      uf: ['', Validators.required],
      localidade: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      numero: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }
  
  SubmitCep() {
    this.cep =this.formPosto.get('cep')?.value;
    const url = `http://viacep.com.br/ws/${this.cep}/json/`;  
    this.http.get<any>(url).subscribe(
     ( response )=> {
       this.uf = response.uf;
       this.localidade = response.localidade,
       this.bairro = response.bairro,
       this.logradouro = response.logradouro  
     }
    );
   }

   SubmitPosto(): void {
   var formData = this.formPosto;
   if( formData == null){
      this.service.AlertMessage("Formulário incompleto");
   } 
   
    this.http.post(`${environment.baseUrl}/${environment.Posto}`, formData).subscribe((response)=>{
    this.service.AlertMessage("Posto cadastrado")
      console.log(response);
    })
  }
}