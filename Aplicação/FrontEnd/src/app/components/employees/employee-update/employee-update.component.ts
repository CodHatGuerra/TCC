import { MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../../settings/Services/employees-service.service";
import { Router } from "@angular/router";
import { PostosService } from "src/app/settings/Services/postos.service";

@Component({
  selector: "app-employee-update",
  templateUrl: "./employee-update.component.html",
  styleUrls: ["./employee-update.component.css"],
})
export class EmployeeUpdateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EmployeeUpdateComponent>,
    private employeeService: EmployeeService,
    private postoService: PostosService,
    private router: Router
  ) {
    this.getPosto();
  }

    employee: any;
    idPosto: number = 0;
    postos: any;

  ngOnInit(): void {
    const id = this.employeeService.getIdFuncionario();
    console.log(id);
    this.employeeService.getByIdEmployee(id).subscribe((response)=>{
      this.employee = response.result.funcionario[0]
      console.log(this.employee);
    });
    this.getPosto();
  }

  onSelectionChange(event: any) {
    this.idPosto = event.value;
    this.employeeService.setIdPosto(event.value);
    //this.getEmployeesByPosto(this.idPosto);
  }

  getPosto() {
    this.postoService.GetPosto().subscribe((response) => {
      this.postos = response.result.postos;
    });
  }


  // UpdateEmployee() {
  //   this.employeeService.updateEmployee();
  //   //this.router.navigate(["adm", "employee", "update", cpf]);
  //   this.dialogRef.close();
  // }
}
