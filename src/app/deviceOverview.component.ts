import {Component, OnInit, style} from '@angular/core';
import { TableData } from './table-data';
import { Router } from '@angular/router';
// import{ router } from '@angular/router';
// @Component({
//     selector: 'device-overview',
//     template: `<ng-table [config]="config" [columns]="columns" > </ng-table>
//     <table class="table table-bordered">
//     <tbody> 
//       <tr *ngFor="let row of rows"> 
//           <td *ngFor="let column of columns">
//                   {{row[column["name"]]}}
//           </td>
//        </tr> </tbody>
//   </table>
//     `
//   })
  
  // webpack html imports
//   let template = require('./table-demo.html');
  
  @Component({
    selector: 'device-overview',
    templateUrl:'./table-demo.html',
    styleUrls: ['./table-demo.css']
  })
  export class DeviceOverviewComponent implements OnInit {
    public rows:Array<any> = [];
    // redirectTo() {
    //     this.router.navigate(['/about']);
    // }
    // public columns:Array<any> = [
    //   {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
    //   {
    //     title: 'Position',
    //     name: 'position',
    //     sort: false,
    //     filtering: {filterString: '', placeholder: 'Filter by position'}
    //   },
    //   {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},
    //   {title: 'Extn.', name: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
    //   {title: 'Start date', className: 'text-warning', name: 'startDate'},
    //   {title: 'Salary ($)', name: 'salary'}
    // ];
    // public page:number = 1;
    // public itemsPerPage:number = 10;
    // public maxSize:number = 5;
    // public numPages:number = 1;
    // public length:number = 0;
  
    // public config:any = {
    //   paging: true,
    //   sorting: {columns: this.columns},
    //   filtering: {filterString: ''},
    //   className: ['table-striped', 'table-bordered']
    // };
  
    // private data:Array<any> = TableData;
  
    public constructor() {
      // this.length = this.data.length;
    }
  
    public ngOnInit():void {
      // this.onChangeTable(this.config);
    }
  
   
  }
//   export class DeviceOverviewComponent {
//     columns = [{ 
//         name: "id",
//         title: "id"
//       }, { 
//         name: "title",
//         title: "title"
//       }
//       ];
//     public config:any = {
//         paging: true,
//         sorting: {columns: this.columns},
//         filtering: {filterString: ''},
//         className: ['table-bordered']
//       };
//       rows = [{
//         id: '1',
//         title: 'title test1'
//       }, {
//         id: '2',
//         title: 'title test2'
//       }, {
//         id: '3',
//         title: 'title test3'
//       }]
//    }
  