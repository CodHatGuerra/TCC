import { Component } from '@angular/core';
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
export class PostosComponent {
  constructor(
    private dialog: MatDialog,
    private service: AppService,
    private router: Router
  ) { }

  dataSource: any[] = [];

  openSigUn(): void {
    const form = this.dialog.open(PostoCreateComponent);
    form.afterClosed();
  }
  openUpdatePosto(id: number) {
    this.service.SetIdPosto(id);
    this.router.navigate(["adm", "register", "posto", "update", id]);
    this.dialog.open(PostoUpdateComponent);
  }

  openSigOutDelete(id: number) {
    this.service.SetIdPosto(id);
    this.router.navigate(["adm", "register", "posto", "delete", id]);
    this.dialog.open(PostoDeleteComponent);
  }
  columnPosto: string[] = ["name", "city", "rua", "actions"];
}
