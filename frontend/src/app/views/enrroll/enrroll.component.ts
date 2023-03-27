import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enrroll',
  templateUrl: './enrroll.component.html',
  styleUrls: ['./enrroll.component.css']
})
export class EnrrollComponent {
    form: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        cpf: ['', Validators.required, Validators.pattern('[0-9]*')],
        phone: ['', [Validators.required, Validators.pattern('[0-9]*')]]
      });
  }
  submit() {
    console.log(this.form.value);
  }
}