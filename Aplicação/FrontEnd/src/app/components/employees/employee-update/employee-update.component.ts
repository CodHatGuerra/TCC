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


  funcionario = {
    Data_Inicio: "",
    Usuario_ID: 0,
    Posto_ID: 2,
    Cargo: ""
  }

  ngOnInit(): void {
    const id = this.employeeService.getIdFuncionario();
    console.log(id);
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
    console.log(this.employee);
    
    if(this.employee == null)
      throw this.service.AlertMessage("Complete o formulário!")

    this.employeeService.updateEmployee(this.employee);
    //this.router.navigate(["adm", "employee", "update", cpf]);
    this.dialogRef.close();
  }
}
