import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {
    
  }

  OnConfirm() {
    this.dialogRef.close('confirm');
  }

  OnCancel() {
    this.dialogRef.close();
  }
}
