import { ViewsService } from './../views.service';
import { User } from './enrroll.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enrroll',
  templateUrl: './enrroll.component.html',
  styleUrls: ['./enrroll.component.css']
})
export class EnrrollComponent {
    form: FormGroup;

    user: User = {
      id: 0,
      name: '',
      cpf: 0,
      email: '',
      phone: 0,
    }
  
    constructor(private fb: FormBuilder, private viewsService: ViewsService) {
      this.form = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        cpf: ['', Validators.required, Validators.pattern('[0-9]*')],
        phone: ['', [Validators.required, Validators.pattern('[0-9]*')]]
      });
  }

  submit(): void{
    this.viewsService.newUser(this.user).subscribe(( )=> {
      console.log('Dados enviados')
    })
  }
}