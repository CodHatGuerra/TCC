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

   idPosto: number = 0; 

  ngOnInit(): void {
    this.getEmployeeByPosto()
    this.getPosto()
  }

  openSigUn(): void {
    if(this.employeeService.getIdPosto() == 0)
      return this.service.AlertMessage("É necessário Selecionar um posto!")
    
    const form = this.dialog.open(EmployeesCreateComponent);
    form.afterClosed().subscribe(a => {
      this.getEmployeeByPosto() 
    });
  }

  onSelectionChange(event: any) {
    this.idPosto = event.value;
    this.employeeService.setIdPosto(event.value);
    this.getEmployeeByPosto()
  }

  getEmployeeByPosto() {
    this.employeeService.getEmployee(this.idPosto).subscribe((response: any) => {
     this.dataSource = response.postos;
      console.log(response);
    });
  }



  getPosto() {
    this.postoService.GetPosto().subscribe((response) => {
      this.postos = response.result.postos;
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
