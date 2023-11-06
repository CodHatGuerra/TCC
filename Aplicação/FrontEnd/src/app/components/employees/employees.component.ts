import { Component, ElementRef, OnInit } from "@angular/core";
import { EmployeesCreateComponent } from "./employees-create/employees-create.component";
import { MatDialog } from "@angular/material/dialog";
import { EmployeeService } from "../../settings/Services/employees-service.service";
import { PostosService } from "../../settings/Services/postos.service";
import { AppService } from "src/app/settings/Services/app.service";
import { FormControl } from "@angular/forms";
import { Subject, debounceTime } from "rxjs";
import { EmployeeDeleteComponent } from "./employee-delete/employee-delete.component";
import { Router } from "@angular/router";
import { EmployeeUpdateComponent } from "./employee-update/employee-update.component";

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
    private postoService: PostosService,
    private router: Router
  ) {}

  input: string = "";
  postos: any;
  postoControl = new FormControl();
  dataSource: any[] = [];
  columnEmployee: string[] = [ "nome", "cargo", "acoes"];
  idPosto: number = 0;
  private searchInput: Subject<string> = new Subject<string>();
  
  
  allEmployees: any[] = [];
  searchTerm: string = '';

  search(event: Event): void {
    if (this.searchTerm.trim() === '') {
      this.dataSource = this.allEmployees;
    } else {
      this.dataSource = this.allEmployees.filter((employee) =>
        employee.Nome_Pessoa.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  
  ngOnInit(): void {
    this.getAllEmployee();
    this.getPosto();
  }

  employeeDelete(id: number) {
    this.employeeService.setIdFuncionario(id);
    const dialog = this.dialog.open(EmployeeDeleteComponent);
    dialog.afterClosed().subscribe((a) => {
      this.getAllEmployee();
    });
  }

  getPosto() {
    this.postoService.GetPosto().subscribe((response) => {
      this.postos = response.result.postos;
    });
  }

  onSelectionChange(event: any) {
    this.idPosto = event.value;
    this.employeeService.setIdPosto(event.value);
    this.getEmployeesByPosto(this.idPosto);
  }

  getEmployeesByPosto(idPosto: number) {
    this.employeeService.getEmployeeByPosto(idPosto).subscribe((response) => {
      this.allEmployees = response.result.funcionario;
      this.dataSource = response.result.postos; 
      console.log(response);
      
    });
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe((response: any) => {
      this.dataSource = response.result.funcionario;
      this.allEmployees = response.result.funcionario;
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

  getEmployeeByPosto() {
    this.employeeService
      .getEmployeeByPosto(this.idPosto)
      .subscribe((response: any) => {
        this.dataSource = response.result.funcionario;
        this.dataSource = response.postos;
      });
  }

  employeeUpdate(id: number) {
     this.employeeService.setIdFuncionario(id);
     this.dialog.open(EmployeeUpdateComponent);
  }

  onSearchKeyUp() {
    this.searchInput.next(this.input);
  }

  openUpdateEmployee(id: number) {
    this.employeeService.setIdFuncionario(id);
    this.router.navigate(["adm", "postos", "update", id]);
    const dialog = this.dialog.open(EmployeeDeleteComponent);
    dialog.afterClosed().subscribe(a => {
      this.getAllEmployee();
      this.getPosto();
    });
  }

  // openSigOutDelete(id: number) {
  //   this.service.SetIdPosto(id);
  //   this.router.navigate(["adm", "postos", "delete", id]);
  //   const dialog = this.dialog.open(PostoDeleteComponent);
  //   dialog.afterClosed().subscribe(a => {
  //     this.getAllEmployee();
  //     this.getPosto();
  //   });
}
