import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';

@Component({
  selector: 'app-posto-delete',
  templateUrl: './posto-delete.component.html',
  styleUrls: ['./posto-delete.component.css']
})
export class PostoDeleteComponent{
  constructor(private service: AppService, private router: Router, private route: ActivatedRoute) { }

  posto: any;

  // ngOnInit(): void {
  //   const id = Number(this.route.snapshot.paramMap.get("id"));
  //   if (id) {
  //     this.service.readId(id).subscribe((product) => {
  //       this.product = product
  //     })
  //   }
    GetPosto(){
      this.posto = this.service.GetPosto();
    }
  
}