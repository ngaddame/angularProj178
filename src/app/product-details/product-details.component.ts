import { Component, OnInit , Inject, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ProductService} from './../core/product.service';
import {CartService} from './../core/cart.service';
// import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:string;
  @Input() idValue:any;
  @Input() dialogRef:any;
  productDetail:any[];
  addToCart(item){
    // console.log(dialgVal,val)
     this.cartService.addToCart(item);
     if(this.idValue && this.dialogRef)
     {
      this.dialogRef.close();
     }
  }
  constructor(private productService : ProductService,private cartService : CartService, private route : ActivatedRoute) { }
  ngOnInit() {
    console.log(this.idValue);
    if(!!(this.idValue))
    {
        this.id = this.idValue;
        console.log(this.id);
    }
    else{
      this.route.params.subscribe(params => {
        this.id = params['id']; // (+) converts string 'id' to a number
        console.log(this.id)
        // In a real app: dispatch action to load the details here.
     });
    }
    let that = this;
   this.productService.getProductDetail(this.id)
    .subscribe(function(productsData) { 
      return that.productDetail= productsData[0]
    });
  }

}
