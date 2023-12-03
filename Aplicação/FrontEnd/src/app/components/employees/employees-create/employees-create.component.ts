import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AppService } from "src/app/settings/Services/app.service";
import { PostosService } from "../../../settings/Services/postos.service";
import { EmployeeService } from "../../../settings/Services/employees-service.service";

@Component({
  selector: "app-employees-create",
  templateUrl: "./employees-create.component.html",
  styleUrls: ["./employees-create.component.css"],
})
export class EmployeesCreateComponent implements OnInit {
  formEmployee: FormGroup;
  posto: any;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EmployeesCreateComponent>,
    private service: AppService,
    private postosService: PostosService,
    private employeeService: EmployeeService
  ) {
    this.formEmployee = this.fb.group({
      cargo: ["", Validators.required],
      numero: ["", [Validators.required, Validators.pattern("[0-9]*")]],
      cpf: ["", [Validators.required, Validators.pattern("[0-9]*")]],
    });
    this.dialogRef.disableClose = true
  }

  ngOnInit(): void {
    this.getPosto();
  }

  getPosto() {
    const id = this.employeeService.getIdPosto();
    this.postosService.GetByIdPosto(id).subscribe((response) => {
      console.log(response);
      
      this.posto = response.result.postos;
    });
  }

  close() {
    this.dialogRef.close();
  }

  SubmitEmployee() {
    this.employeeService
      .getUserByCpf(this.formEmployee.value.cpf)
      .subscribe((response) => {
        const Usuario_ID = response.result.Usuario[0].ID;

        const newDate = new Date();
        const employee = {
          Funcionario: {
            Data_Inicio: newDate.toISOString().split("T")[0],
            Usuario_ID: Usuario_ID,
            Posto_ID: this.posto[0].Posto_ID,
            Cargo: this.formEmployee.value.cargo,
          },
        };
        console.log(employee);
        
        this.employeeService.postEmployee(employee).subscribe((response)=>{
          console.log(response);
          
          this.service.SuccessMessage("Funcionário registrado com sucesso!");
          this.dialogRef.close();
        }) 
      });
  }
}
