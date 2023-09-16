import { Component, Input} from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { AppService } from "src/app/settings/Services/app.service";

@Component({
  selector: "app-posto-delete",
  templateUrl: "./posto-delete.component.html",
  styleUrls: ["./posto-delete.component.css"],
})
export class PostoDeleteComponent {
  constructor(
    private service: AppService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<PostoDeleteComponent>
  ) {}
  
    posto: any;

  ngOnInit(): void {
    this.service.GetSinglePosto();
    console.log(this.posto);
  }

}
