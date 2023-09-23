import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})

export class NavComponent  {
  opened = true;
  constructor(private service: AppService, private router: Router) {
    this.teste()
  }
  isSublistVisible = false;

  toggleSublist() {
    this.isSublistVisible = !this.isSublistVisible;
  }

  infoUser: any[] = [];

  dataSource: any[] = [];
  showOptions: boolean = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
  idade: number = 0;

  teste() {
    const user = this.service.GetUser();
    if (user) {
      this.infoUser = user
      const dataNascimento = new Date(user[0].Data_Nascimento);
      const hoje = new Date();
      const diffMilissegundos = hoje.getTime() - dataNascimento.getTime()
      const diffAnos = Math.floor(diffMilissegundos / (365 * 24 * 60 * 60 * 1000));
      this.idade = diffAnos;
    } else {
      this.router.navigate([''])
    }
  }
}

