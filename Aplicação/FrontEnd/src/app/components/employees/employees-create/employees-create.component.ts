import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AppService } from "src/app/settings/Services/app.service";

@Component({
  selector: "app-employees-create",
  templateUrl: "./employees-create.component.html",
  styleUrls: ["./employees-create.component.css"],
})
export class EmployeesCreateComponent implements OnInit{
  formEmployee: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EmployeesCreateComponent>,
    private service: AppService
    ) 
  {
    this.formEmployee = this.fb.group({
      cargo: ["", Validators.required],
      Usuario_ID: ["", Validators.required],
      Posto_ID: ["", [Validators.required, Validators.pattern("[0-9]*")]],
      numero: ["", [Validators.required, Validators.pattern("[0-9]*")]],
      cpf: ["", [Validators.required, Validators.pattern("[0-9]*")]],
    });
  }


  ngOnInit(): void {
    this.service.GetUserByCpf(12312312312).subscribe((response)=>
    {
      console.log(response);
    });
  }


  SubmitEmployee() {
    const newDate = new Date();
    const employee = {
      funcionario: {
        Data_Inicio: newDate.toISOString().split("T")[0],
        Usuario_ID: this.formEmployee.value.Usuario_ID,
      },
    };
  }
}
