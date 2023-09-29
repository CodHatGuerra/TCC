import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { PostoUpdateComponent } from './posto-update/posto-update.component';
import { PostoDeleteComponent } from './posto-delete/posto-delete.component';
import { PostoCreateComponent } from './posto-create/posto-create.component';

@Component({
  selector: 'app-postos',
  templateUrl: './postos.component.html',
  styleUrls: ['./postos.component.css']
})
export class PostosComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private service: AppService,
    private router: Router
  ) { }
  dataSource: any[] = [];
  ngOnInit(): void {
    this.buscarDados();
  }

  openSigUn(): void {
    const form = this.dialog.open(PostoCreateComponent);
    form.afterClosed().subscribe(a => {
      this.buscarDados()
    });
  }

  buscarDados() {
    this.service.GetPosto().subscribe((response: any) => {
      this.dataSource = response.result.postos;
    });
  }

  openUpdatePosto(id: number) {
    this.service.SetIdPosto(id);
    this.router.navigate(["adm", "postos", "update", id]);
    const dialog = this.dialog.open(PostoUpdateComponent);
    dialog.afterClosed().subscribe(a => {
      this.buscarDados()
    });
  }

  openSigOutDelete(id: number) {
    this.service.SetIdPosto(id);
    this.router.navigate(["adm", "postos", "delete", id]);
    const dialog = this.dialog.open(PostoDeleteComponent);
    dialog.afterClosed().subscribe(a => {
      this.buscarDados()
    });
  }
  columnPosto: string[] = ["name", "city", "rua", "actions"];
}
