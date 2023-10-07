import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { PostoUpdateComponent } from './posto-update/posto-update.component';
import { PostoDeleteComponent } from './posto-delete/posto-delete.component';
import { PostoCreateComponent } from './posto-create/posto-create.component';
import { PostosService } from './postos.service';

@Component({
  selector: 'app-postos',
  templateUrl: './postos.component.html',
  styleUrls: ['./postos.component.css']
})
export class PostosComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private service: AppService,
    private router: Router,
    private postoService: PostosService 
  ) { }
  dataSource: any[] = [];
  ngOnInit(): void {
    this.getPosto();
  }

  openSigUn(): void {
    const form = this.dialog.open(PostoCreateComponent);
    form.afterClosed().subscribe(a => {
      this.getPosto()
    });
  }

  getPosto() {
    this.postoService.GetPosto().subscribe((response: any) => {
      this.dataSource = response.result.postos;
    });
  }

  openUpdatePosto(id: number) {
    this.service.SetIdPosto(id);
    this.router.navigate(["adm", "postos", "update", id]);
    const dialog = this.dialog.open(PostoUpdateComponent);
    dialog.afterClosed().subscribe(a => {
      this.getPosto()
    });
  }

  openSigOutDelete(id: number) {
    this.service.SetIdPosto(id);
    this.router.navigate(["adm", "postos", "delete", id]);
    const dialog = this.dialog.open(PostoDeleteComponent);
    dialog.afterClosed().subscribe(a => {
      this.getPosto()
    });
  }
  columnPosto: string[] = ["name", "city", "rua", "actions"];
}
