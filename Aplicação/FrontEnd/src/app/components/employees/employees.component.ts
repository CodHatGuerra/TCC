import { Component } from '@angular/core';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/settings/Services/app.service';
import { Router } from '@angular/router';
import { PostoCreateComponent } from '../postos/posto-create/posto-create.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  constructor(private dialog: MatDialog,
    private service: AppService,
    private router: Router)
  {}
  
  private _dataSource: any[] = [];
  public get dataSource(): any[] {
    return this._dataSource;
  }
  public set dataSource(value: any[]) {
    this._dataSource = value;
  }

  openDialogEmployee() {
    this.dialog.open(EmployeesCreateComponent);
  }

  openSigUn(): void {
    const form = this.dialog.open(EmployeesCreateComponent);
    form.afterClosed().subscribe(a => {
      this.buscarDados()
    });
  }

  buscarDados() {
    this.service.GetPosto().subscribe((response: any) => {
      this.dataSource = response.result.postos;
    });
  }

  // openUpdatePosto(id: number) {
  //   this.service.SetIdPosto(id);
  //   this.router.navigate(["adm", "postos", "update", id]);
  //   const dialog = this.dialog.open(PostoUpdateComponent);
  //   dialog.afterClosed().subscribe(a => {
  //     this.buscarDados()
  //   });
  // }

  // openSigOutDelete(id: number) {
  //   this.service.SetIdPosto(id);
  //   this.router.navigate(["adm", "postos", "delete", id]);
  //   const dialog = this.dialog.open(PostoDeleteComponent);
  //   dialog.afterClosed().subscribe(a => {
  //     this.buscarDados()
  //   });
  columnEmployee: string[] = ["nameEmployee", "cargo", "nomePosto", "actions"];
  }

