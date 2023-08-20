import { HttpClient } from '@angular/common/http';
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
      this.http.get(`${environment.baseUrl}/${environment.Posto}`).subscribe(
        (response: any)=>{
          this.dataSource = response.result.postos;
          console.log(response);
        }
      )
    }

columnPosto: string[] = ['name', 'cidade','actions'];
columnEmployee: string[] = ['name', 'cidade','actions'];
};

 