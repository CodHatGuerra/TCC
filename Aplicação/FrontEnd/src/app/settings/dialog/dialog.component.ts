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
  @Input() nome: string = "";
  @Output() logoutConfirmed: EventEmitter<void> = new EventEmitter<void>();
  @Output() logoutCancelled: EventEmitter<void> = new EventEmitter<void>();
  

  OnConfirm() {
    this.logoutConfirmed.emit();
  }

  OnCancel() {
    this.logoutCancelled.emit();
  }
  // confirmLogout(): void {
  //   this.dialogRef.close(true);
  // }

  // cancelLogout(): void {
  //   this.dialogRef.close(false);
  // }
}
