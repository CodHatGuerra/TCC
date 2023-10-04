import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AppService } from "src/app/settings/Services/app.service";
import { PostosService } from "../../postos/postos.service";
import { EmployeeService } from "../employees-service.service";

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
      Usuario_ID: ["", Validators.required],
      Posto_ID: ["", [Validators.required]],
      numero: ["", [Validators.required, Validators.pattern("[0-9]*")]],
      cpf: ["", [Validators.required, Validators.pattern("[0-9]*")]],
    });
  }

  ngOnInit(): void {
    this.getPosto();
  }

  getPosto() {
    const id = this.employeeService.getIdPosto();
    this.postosService.GetByIdPosto(id).subscribe((response) => {
      this.posto = response.result.postos
    });
  }

  findByUserCpf(){
    return this.employeeService.getUserByCpf(this.formEmployee.value.cpf).subscribe((response)=> {
      this.formEmployee.value.Usuario_ID = response.result.Usuario[0].ID
    })
  }

  SubmitEmployee() {
    this.findByUserCpf();
    const newDate = new Date();
    const employee = {
      funcionario: {
        Data_Inicio: newDate.toISOString().split("T")[0],
        Usuario_ID:  this.formEmployee.value.Usuario_ID,
        Posto_ID: this.formEmployee.value.Posto_ID,
        Cargo: this.formEmployee.value.cargo
      },
    };
    this.service.SuccessMessage("Funcionário registrado com sucesso!")
    console.log(employee);
    
  }
}
