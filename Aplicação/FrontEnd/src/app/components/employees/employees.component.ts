import { Component, OnInit } from '@angular/core';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeService } from './employees-service.service';
import { PostosService } from '../postos/postos.service';
import { AppService } from 'src/app/settings/Services/app.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  constructor(private dialog: MatDialog,
    private employeeService: EmployeeService,
    private service: AppService,
    private router: Router,
    private postoService: PostosService) { }

  postos: any;
  dataSource: any[] = [];
  columnEmployee: string[] = ["cargo", "city", "nomePosto", "actions"];

  ngOnInit(): void {
    //this.buscarDados();
    this.getPosto()
  }

  openSigUn(): void {
    if(this.employeeService.getIdPosto() == 0)
      return this.service.AlertMessage("É necessário Selecionar um posto!")
    
    const form = this.dialog.open(EmployeesCreateComponent);
    form.afterClosed().subscribe(a => {
      // this.buscarDados()
    });
  }

  buscarDados() {
    this.employeeService.getEmployee().subscribe((response: any) => {
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



  getPosto() {
    this.postoService.GetPosto().subscribe((response) => {
      this.postos = response.result.postos;
    });
  }

  onSelectionChange(event: any) {
    this.employeeService.setIdPosto(event.value);
  }
}
