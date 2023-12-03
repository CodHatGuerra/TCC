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
    this.dialogRef.disableClose = true
  }

  employee: any;
  idPosto: number = 0;
  postos: any;
  close() {
    this.dialogRef.close();
  }
  

  ngOnInit(): void {
    const id = this.employeeService.getIdFuncionario();
    this.employeeService.getByIdEmployee(id).subscribe((response) => {
      this.employee = response.result.funcionario[0]
      this.idPosto = this.employee.Posto_ID
      console.log(this.idPosto);
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

    if (this.employee == null)
      throw this.service.AlertMessage("Complete o formulário!");

    const dataInicio = new Date();
    const ano = dataInicio.getFullYear();
    const mes = (dataInicio.getMonth() + 1).toString().padStart(2, '0');
    const dia = dataInicio.getDate().toString().padStart(2, '0');

    const idPosto = this.employeeService.getIdPosto()

    console.log(idPosto);
    
    const func = {
      Funcionario: {
        Data_Inicio: `${ano}-${mes}-${dia}`,
        Usuario_ID: this.employee.Funcionario_ID,
        Posto_ID: idPosto,
        Cargo: this.employee.Cargo
      }
    }

    if (func.Funcionario.Cargo == null)
      throw this.service.AlertMessage("É necessário informar um cargo!")

    this.employeeService.updateEmployee(func).subscribe((response) => {
      console.log(response);
      
    });
    console.log(func);
    //this.router.navigate(["adm", "employee", "update", cpf]);
    this.dialogRef.close();
  }
}
