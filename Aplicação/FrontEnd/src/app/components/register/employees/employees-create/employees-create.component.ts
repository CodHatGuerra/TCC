import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-employees-create",
  templateUrl: "./employees-create.component.html",
  styleUrls: ["./employees-create.component.css"],
})
export class EmployeesCreateComponent {
  formEmployee: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formEmployee = this.fb.group({
      cargo: ["", Validators.required],
      Usuario_ID: ["", Validators.required],
      Posto_ID: ["", [Validators.required, Validators.pattern("[0-9]*")]],
      numero: ["", [Validators.required, Validators.pattern("[0-9]*")]],
      Cpf: ["", [Validators.required, Validators.pattern("[0-9]*")]],
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

  "Funcionario": {
    Data_Inicio: "2023-09-13";
    Usuario_ID: "1";
    Posto_ID: 1;
    Cargo: "ATENDENTE";
  };
}
