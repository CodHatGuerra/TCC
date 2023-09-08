import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { Vacinas } from '../vacciness';

@Component({
  selector: 'app-home',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  constructor(private service: AppService, private router: Router) { }

  vaccines = Vacinas;

  columns: string[] = ['name', 'actions'];
  
}
