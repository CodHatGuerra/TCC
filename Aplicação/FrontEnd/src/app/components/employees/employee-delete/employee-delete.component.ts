import { Component, OnInit } from "@angular/core";
import { EmployeeUpdateComponent } from "../employee-update/employee-update.component";
import { MatDialogRef } from "@angular/material/dialog";
import { EmployeeService } from "../../../settings/Services/employees-service.service";
import { AppService } from "src/app/settings/Services/app.service";

@Component({
  selector: "app-employee-delete",
  templateUrl: "./employee-delete.component.html",
  styleUrls: ["./employee-delete.component.css"],
})
export class EmployeeDeleteComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EmployeeUpdateComponent>,
    private employeeService: EmployeeService,
    private service: AppService
  ) {
    this.dialogRef.disableClose = true
  }

  ngOnInit(): void {}
  
  delete(): void {
    let id = this.employeeService.getIdFuncionario();
    this.employeeService.deleteEmployee(id).subscribe((result) => {
      if (result) {
        this.dialogRef.close();
        this.service.SuccessMessage("Posto Removido com sucesso!");
      } else {
        this.service.AlertMessage("Erro ao remover posto!");
      }
    });
  }
}
