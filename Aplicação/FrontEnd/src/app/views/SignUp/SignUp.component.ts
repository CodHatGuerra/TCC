import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/settings/Services/app.service';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-signup ',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css'],
})
export class SignUpComponent {

  form: FormGroup;
  usuario: any = {}
  endereco: any = {}
  telefone: any = {}
  cep: number = 0;
  passWord: number = 0;
  confimPassWord!: string;
  picker: Date | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
    private signUpService: SignUpService,
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

  }

  fileName = '';

  validateDate(control: any) {
    const inputDate = control;

    const currentDate = new Date();
    const selectedDate = new Date(inputDate);

    if (selectedDate.getFullYear() < 1900)
      throw this.appService.AlertMessage('Data inválida');

    if (selectedDate.getFullYear() > 2025)
      throw this.appService.AlertMessage('Data inválida');
    return null;
  }

  private parseDate(dateString: string): Date {
    const day = parseInt(dateString.substring(0, 2));
    let month = parseInt(dateString.substring(2, 4));
    const year = parseInt(dateString.slice(-4));
    
  console.log('Day:', day);
  console.log('Month:', month);
  console.log('Year:', year);
    return new Date(year, month, day);
  }

  private formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString();
    return `${year}-${month}-${day}`;
  }

  onInputChange(): void {
    const dateValue = this.form.get('data_Nascimento')!.value;
  
    if (dateValue instanceof Date) {
      const dateWithoutMask = dateValue.toISOString().split('T')[0].replace(/-/g, '');
      console.log('Input Value:', dateWithoutMask);
      const dateObject = this.parseDate(dateWithoutMask);
  
      const formattedDate = this.formatDate(dateObject);
  
      this.form.patchValue({
        data_Nascimento: formattedDate,
      });
    } else {
      console.error('Invalid date value:', dateValue);
    }
  }
  
  Submit() {
    this.validateDate(this.form.value.data_Nascimento)
    this.onInputChange()

    if (this.form.invalid)
      throw this.appService.AlertMessage('Complete o formulário.');

    this.signUpService.Info.usuario.nome = this.form.value.nome;
    this.signUpService.Info.usuario.cpf = this.form.value.cpf;
    this.signUpService.Info.usuario.data_Nascimento = this.form.value.data_Nascimento;
    this.signUpService.Info.usuario.sexo = this.form.value.sexo;
    this.signUpService.Info.usuario.email = this.form.value.email;
    this.signUpService.Info.telefone.numero = this.form.value.telefone;

    console.log(this.form.value.data_Nascimento);
    
    this.router.navigate(["create-passWord"])
  }
}
