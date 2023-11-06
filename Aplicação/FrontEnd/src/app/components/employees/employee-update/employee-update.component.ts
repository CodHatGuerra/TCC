import { MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../../settings/Services/employees-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-employee-update",
  templateUrl: "./employee-update.component.html",
  styleUrls: ["./employee-update.component.css"],
})
export class EmployeeUpdateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EmployeeUpdateComponent>,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

    employee: any;

  ngOnInit(): void {
    const id = this.employeeService.getIdFuncionario();
    console.log(id);
    this.employeeService.getByIdEmployee(id).subscribe((result)=>{
      console.log(result);
       this.employee = result.result.funcionario
    });
  }

  // UpdateEmployee() {
  //   this.employeeService.updateEmployee();
  //   //this.router.navigate(["adm", "employee", "update", cpf]);
  //   this.dialogRef.close();
  // }
}
