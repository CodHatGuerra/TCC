import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environments';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private http: HttpClient
    ){  }

    ngOnInit(): void {
      this.GetPostos();
    }
    
    dados: any[] = []

    GetPostos(){
      this.http.get(`${environment.baseUrl}/${environment.Posto}`).subscribe(
        (response)=>{
          this.dados = response as any[];
          console.log(this.dados)
        }
      )
    }

colunas: string[] = ['nome','localidade','bairro'];
};

 