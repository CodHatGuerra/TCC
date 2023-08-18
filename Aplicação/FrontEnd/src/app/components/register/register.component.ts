import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environments';
import { PostosComponent } from './Postos/Postos.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dataSource: any[] = []
  constructor(
    private dialog: MatDialog,
    private http: HttpClient
    ){  }

    ngOnInit(): void {
      this.GetPostos();
    }
    
  openSigUn(): void {
    const form = this.dialog.open(PostosComponent,{
      width: '600px'
    });
    form.afterClosed();
  }
  
    GetPostos(){
      this.http.get(`${environment.baseUrl}/${environment.Posto}`).subscribe(
        (response: any)=>{
          this.dataSource = response.result.postos;
          console.log(response);
        }
      )
    }

colunas: string[] = ['name', 'actions'];
};

 