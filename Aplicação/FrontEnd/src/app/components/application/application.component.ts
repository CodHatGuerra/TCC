import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
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
      const dataNascimento = new Date(user[0].Data_Nascimento);
      const hoje = new Date();
      const diffMilissegundos = hoje.getTime() - dataNascimento.getTime()
      const diffAnos = Math.floor(diffMilissegundos / (365 * 24 * 60 * 60 * 1000));
      console.log(diffAnos);
       
      this.idade = diffAnos;
    } else {
      this.router.navigate([''])
    }
   }

   columns: string[] = ['name', 'actions'];
}
