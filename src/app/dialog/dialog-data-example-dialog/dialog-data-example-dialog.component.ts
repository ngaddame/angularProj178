import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.component.html',
  styleUrls: ['./dialog-data-example-dialog.component.css']
})
export class DialogDataExampleDialogComponent implements OnInit {
  dataVal:string;
  dialogRefVal:any;
  constructor(public dialogRef: MatDialogRef<DialogDataExampleDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }
  close(){
    this.dialogRef.close();
  }
  ngOnInit() {
    this.dataVal=this.data;
    this.dialogRefVal=this.dialogRef;
    // console.log(this.data)
  }

}

