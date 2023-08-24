import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/services/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  constructor(private service: AppService, private router: Router) {
    this.teste()
   }

  infoUser: any[] = [];

  dataSource: any[] = [];
  
  idade: number = 0; 

  teste() {
    const user = this.service.GetUser();
    if (user) {
      this.infoUser = user
      const dataNascimento = user.Data_Nascimento;
      const hoje = new Date();
      // const diffAnos = hoje.getFullYear() - dataNascimento.getFullYear();
      // this.idade = diffAnos;
    } else {
      this.router.navigate([''])
    }
   }

   columns: string[] = ['name', 'actions'];
  }

 