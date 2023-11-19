import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { Vacinas } from '../vacciness';
import { MatDialog } from '@angular/material/dialog';
import { CarteiraAddComponent } from './carteira-add/carteira-add.component';

@Component({
  selector: 'app-home',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit{
  constructor(private service: AppService, private router: Router, private dialog: MatDialog,) { }
  
  ngOnInit(): void {
    const user = this.service.GetUser();
    this.service.GetVacinasCarteira(user[0].ID).subscribe((res)=> {
      this.dataSource = res.result.Vacinas
      console.log(this.dataSource);
      
    });
  }

  vaccines = Vacinas;
  columnCarteira: string[] = ['vacinas', 'doses', 'acoes'];
  input: string = '';

  dataSource: any;

  CreateCarteira(){
    this.dialog.open(CarteiraAddComponent)
  }
 
}
