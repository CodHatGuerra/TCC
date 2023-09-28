import { Component } from '@angular/core';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  constructor(private dialog: MatDialog)
  {}
  
  dataSource: any[] = [];

  openDialogEmployee() {
    this.dialog.open(EmployeesCreateComponent);
  }

  columnEmployee: string[] = ["nameEmployee", "cargo", "nomePosto", "actions"];

}
