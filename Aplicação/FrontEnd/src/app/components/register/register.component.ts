import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router){ }
  // botao(){
  //   this.router.navigate(["postos"]);
  //   console.log("funcionando")
  // }
}
 