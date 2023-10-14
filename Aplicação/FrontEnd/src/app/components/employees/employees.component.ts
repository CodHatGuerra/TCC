import { Component, ElementRef, OnInit } from "@angular/core";
import { EmployeesCreateComponent } from "./employees-create/employees-create.component";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { EmployeeService } from "../../settings/Services/employees-service.service";
import { PostosService } from "../../settings/Services/postos.service";
import { AppService } from "src/app/settings/Services/app.service";
import { FormControl } from "@angular/forms";
import { Subject, debounceTime } from "rxjs";
import { EmployeeUpdateComponent } from "./employee-update/employee-update.component";
import { EmployeeDeleteComponent } from "./employee-delete/employee-delete.component";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"],
})
export class EmployeesComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private employeeService: EmployeeService,
    private service: AppService,
    private postoService: PostosService
  ) {}

  input: string = "";
  postos: any;
  postoControl = new FormControl();
  dataSource: any[] = [];
  columnEmployee: string[] = ["cargo", "nome", "nomePosto", "acoes"];

  idPosto: number = 0;
  private searchInput: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.getAllEmployee();
    this.getPosto();
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe((response: any) => {
      this.dataSource = response.result.funcionario;
      console.log(response.result.funcionario);
    });
  }

  openSigUn(): void {
    if (this.employeeService.getIdPosto() == 0)
      return this.service.AlertMessage("É necessário Selecionar um posto!");
    const form = this.dialog.open(EmployeesCreateComponent);
    form.afterClosed().subscribe(() => {
      this.getAllEmployee();
    });
  }

  onSelectionChange(event: any) {
    this.idPosto = event.value;
    this.employeeService.setIdPosto(event.value);
  }

  getEmployeeByPosto() {
    this.employeeService
      .getEmployeeByPosto(this.idPosto)
      .subscribe((response: any) => {
        this.dataSource = response.postos;
        console.log(response);
      });
  }

  employeeUpdate(id: number) {
    // this.employeeService.setIdUser(id);
    // this.dialog.open(EmployeeUpdateComponent);
  }

  employeeDelete(id: number) {
     this.employeeService.setIdFuncionario(id);
     const dialog = this.dialog.open(EmployeeDeleteComponent);
     dialog.afterClosed().subscribe(a => {
      this.getAllEmployee();
    });
  }

  getPosto() {
    this.postoService.GetPosto().subscribe((response) => {
      this.postos = response.result.postos;
    });
  }

  onSearchKeyUp() {
    this.searchInput.next(this.input);
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
