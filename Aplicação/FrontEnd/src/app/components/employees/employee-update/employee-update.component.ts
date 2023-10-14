import { MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../../settings/Services/employees-service.service";
import { Router } from "@angular/router";
import { PostoUpdateComponent } from "../../postos/posto-update/posto-update.component";
import { AppService } from "src/app/settings/Services/app.service";

@Component({
  selector: "app-employee-update",
  templateUrl: "./employee-update.component.html",
  styleUrls: ["./employee-update.component.css"],
})
export class EmployeeUpdateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EmployeeUpdateComponent>,
    private service: AppService,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

    employee: any;

  ngOnInit(): void {
    // const id = this.employeeService.();
    // this.service.getUserById(id).subscribe((result)=>{
    //   console.log(result);
    //    this.employee = result.postos[0]
    // });
  }

  // UpdateEmployee() {
  //   this.employeeService.setCpfEmployee(cpf);
  //   this.router.navigate(["adm", "employee", "update", cpf]);
  //   this.dialogRef.close();
  // }
}
