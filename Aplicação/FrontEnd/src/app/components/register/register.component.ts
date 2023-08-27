import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environments';
import { PostoCreateComponent } from './posto-create/posto-create.component';


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
    const form = this.dialog.open(PostoCreateComponent);
    form.afterClosed();
  }
  
    GetPostos(){
      const userToken = localStorage.getItem('Token');
      const headers = new HttpHeaders({
       'Authorization': `Bearer ${userToken}`
      });
      this.http.get(`${environment.baseUrl}/${environment.Posto}`, { headers }).subscribe(
        (response: any)=>{
          this.dataSource = response.result.postos;
        }
      )
      console.log(userToken);
    }

columnEmployee: string[] = ['name', 'city','actions'];
};

 