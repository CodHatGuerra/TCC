import { MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../../settings/Services/employees-service.service";
import { Router } from "@angular/router";
import { PostosService } from "src/app/settings/Services/postos.service";
import { AppService } from "src/app/settings/Services/app.service";

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
    private service: AppService,
    private router: Router
  ) {
    this.getPosto();
  }

  employee: any;
  idPosto: number = 0;
  postos: any;


  ngOnInit(): void {
    const id = this.employeeService.getIdFuncionario();
    this.employeeService.getByIdEmployee(id).subscribe((response) => {
      this.employee = response.result.funcionario[0]
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

  UpdateEmployee() {
    if (this.employee == null) {
      throw this.service.AlertMessage("Complete o formulário!");
    }
  
    const teste = {
      funcionario: {
        Data_Inicio: new Date(),
        Usuario_ID: this.employee.ID_Usuario,
        Posto_ID: this.employee.ID_Posto,
        Cargo: this.employee.Cargo
      }
    };
  
    this.employeeService.updateEmployee(teste);
    console.log(teste);
  
    //this.router.navigate(["adm", "employee", "update", cpf]);
    this.dialogRef.close();
  }
}
