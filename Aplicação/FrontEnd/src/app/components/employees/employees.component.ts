import { Component, OnInit } from '@angular/core';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/settings/Services/app.service';
import { Router } from '@angular/router';
import { EmployeeService } from './employees-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  constructor(private dialog: MatDialog,
    private service: EmployeeService,
    private router: Router)
  {}
  
  dataSource: any[] = [];
  columnEmployee: string[] = ["cargo", "city", "nomePosto", "actions"];

  ngOnInit(): void {
    //this.buscarDados();
  }

  openDialogEmployee() {
    this.dialog.open(EmployeesCreateComponent);
  }

  openSigUn(): void {
    const form = this.dialog.open(EmployeesCreateComponent);
    form.afterClosed().subscribe(a => {
     // this.buscarDados()
    });
  }

  buscarDados() {
    this.service.getEmployee().subscribe((response: any) => {
      this.dataSource = response;
      console.log(response);
    });
  }

  // openUpdateEmployee(id: number) {
  //   this.service.SetIdPosto(id);
  //   this.router.navigate(["adm", "postos", "update", id]);
  //   const dialog = this.dialog.open(PostoUpdateComponent);
  //   dialog.afterClosed().subscribe(a => {
  //     this.buscarDados()
  //   });
  // }

  // openSigOutDelete(id: number) {
  //   this.service.SetIdPosto(id);
  //   this.router.navigate(["adm", "postos", "delete", id]);
  //   const dialog = this.dialog.open(PostoDeleteComponent);
  //   dialog.afterClosed().subscribe(a => {
  //     this.buscarDados()
  //   });
  }

