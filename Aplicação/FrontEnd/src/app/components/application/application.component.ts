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
  
  user = this.service.GetUser();

  
  ngOnInit(): void {
    this.getCarteira(this.user[0].ID)
  }

  vaccines = Vacinas;
  columnCarteira: string[] = ['vacinas', 'doses', 'acoes'];
  input: string = '';

  dataSource: any;

  getCarteira(id: number){
    this.service.GetVacinasCarteira(id).subscribe((res)=> {
      this.dataSource = res.result.Vacinas
    });
  }

  CreateCarteira(){
    const dialog = this.dialog.open(CarteiraAddComponent);
    dialog.afterClosed().subscribe(()=>{
      this.getCarteira(this.user[0].ID)
    })
  }
 
}
