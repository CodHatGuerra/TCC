import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
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

