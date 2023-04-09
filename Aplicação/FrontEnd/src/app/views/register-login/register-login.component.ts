import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent {
  form: FormGroup
  constructor(private appService: AppService,private fb: FormBuilder ,private router: Router){
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(`[0-9]*`)]],
    })
   }
 
   nav() :void {
    this.form = this.form.value
    this.router.navigate(['aplication'])
    console.log('navegando');
   }

   sigin() :void{
    this.router.navigate(['/enrroll'])
   }
}
