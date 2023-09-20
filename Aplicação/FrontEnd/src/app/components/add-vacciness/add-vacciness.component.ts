import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-add-vacciness",
  templateUrl: "./add-vacciness.component.html",
  styleUrls: ["./add-vacciness.component.css"],
})
export class AddVaccinessComponent {
  constructor(private dialogRef: MatDialogRef<AddVaccinessComponent>) {}
}
