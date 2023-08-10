import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private http: HttpClient, 
    private router: Router
    ){ }

    ngOnInit(): void {
      this.GetPostos();
    }

    
      dados = [] 

    GetPostos(){
      this.http.get(`${environment.baseUrl}/${environment.Posto}`).subscribe(
        (response)=>{
          this.dados = response as any[];
        }
      )
    }

colunas: string[] = ['nome', 'bairro', 'localidade'];
};

 