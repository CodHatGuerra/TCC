import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-postos',
  templateUrl: './Postos.component.html',
  styleUrls: ['./Postos.component.css']
})
export class PostosComponent {
  
    cep: number = 0;
    uf: string = '';
    localidade: string = '';
    bairro: string = '';
    logradouro: string = '';
    formPosto: FormGroup;
    
  constructor(private http: HttpClient, private fb: FormBuilder) {
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
  
  dataCep() {
    this.cep =this.formPosto.get('cep')?.value;
    const url = `http://viacep.com.br/ws/${this.cep}/json/`;  
    this.http.get<any>(url).subscribe(
     response => {
       this.uf = response.uf;
       this.localidade = response.localidade,
       this.bairro = response.bairro,
       this.logradouro = response.logradouro  
     }
    );
   }

   dataPosto() {
    this.formPosto
   }
}