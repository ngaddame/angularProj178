import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { ProductService } from './../core/product.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {DialogDataExampleDialogComponent} from './../dialog/dialog-data-example-dialog/dialog-data-example-dialog.component'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any[];
  dresses:boolean;
  bodySuits:boolean;
  overalls:boolean;
  sales:boolean;
  salesBox:boolean=false;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  filterItems:any[]= [
    {
      value: 'dress',
      checked: false
    },
    {
      value: 'bodysuits',
      checked: false
    },
    {
      value: 'overalls',
      checked: false
    },
  ];
  saleItems:any[]= [
    {
      value: 'sale',
      checked: false
    }
  ];
  colorItems:any[]=[
    {
      value: 'blue',
      checked: false
    },
    {
      value: 'pink',
      checked: false
    },
    {
      value: 'white',
      checked: false
    },
  ];
  checked() {
    let checkboxFilterArr= this.filterItems.filter(item => { return item.checked; });
    // checkboxFilterArr.concat(this.colorItems.filter(item => { return item.checked; }))
    return checkboxFilterArr;
  }
  filterColorByCheckedValues(){
     return this.colorItems.filter(item => { return item.checked; });
  }
  constructor(private router: Router, private productService : ProductService,public dialog: MatDialog,private route : ActivatedRoute) { 
  }
  openDetailDialog(id){
    this.dialog.open(DialogDataExampleDialogComponent, {
      data: {
        "id": id
      }
    });
  }
  updateProductDetail(item){
    // console.log(item);
    // this.productService.updateProductDetail(item);
    this.router.navigate(['/list', item.id]);
    // this.router.navigate(['./productDetails']);
  }
  selectColor(i){
    this.colorItems[i].checked= !this.colorItems[i].checked;
  }
  redirect(){
    this.router.navigate(['./productDetails']);
  }
  // constructor(private route : ActivatedRoute) { }
  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.salesBox=this.saleItems[0].checked=this.sales = params['sales'] || false;

        console.log(params['sales']);
      });
    this.productService.getProductList().subscribe((productsData)=>this.products = productsData.products)
  }

}

