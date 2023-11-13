import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { PostoUpdateComponent } from './posto-update/posto-update.component';
import { PostoDeleteComponent } from './posto-delete/posto-delete.component';
import { PostoCreateComponent } from './posto-create/posto-create.component';
import { PostosService } from '../../settings/Services/postos.service';

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
  ) { 
    this.GetPosto();
  }
  dataSource: any[] = [];

  ngOnInit(): void {
    this.GetPosto();
  }

  allPostos: any[] = [];
  searchTerm: string = '';

  search(event: Event): void {
    if (this.searchTerm.trim() === '') {
      this.dataSource = this.allPostos;
    } else {
      this.dataSource = this.allPostos.filter((Posto) =>
        Posto.Nome_do_Posto.toLowerCase().includes(this.searchTerm.toLowerCase() )
      );
    }
  }

  CreatePosto(): void { 
    const form = this.dialog.open(PostoCreateComponent);
    form.afterClosed().subscribe(a => {
      this.GetPosto()
    });
  }

  GetPosto() {
    this.postoService.GetPosto().subscribe((response: any) => {
      this.allPostos = response.result.postos;
      this.dataSource = response.result.postos;
      console.log(this.dataSource);
    });
  }

  UpdatePosto(id: number) {
    this.service.SetIdPosto(id);
    this.router.navigate(["adm", "postos", "update", id]);
    const dialog = this.dialog.open(PostoUpdateComponent);
    dialog.afterClosed().subscribe(a => {
      this.GetPosto()
    });
  }

  DeletePosto(id: number) {
    this.service.SetIdPosto(id);
    this.router.navigate(["adm", "postos", "delete", id]);
    const dialog = this.dialog.open(PostoDeleteComponent);
    dialog.afterClosed().subscribe(a => {
      this.GetPosto()
    });
  }
  columnPosto: string[] = ["name", "city", "rua", "bairro","actions"];
}
