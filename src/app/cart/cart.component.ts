import { Component, OnInit } from '@angular/core';
import {CartService} from './../core/cart.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cartItems:any[];
    shippingCost:Number=8;
    // totalPrice:Number=0;
    constructor(private cartService : CartService, private router : Router) { 
    }
    getTotalPrice(){
      let totalPrice =0;
      console.log(this.cartItems)
      for(var i=0;i<this.cartItems.length;i++)
      {
        totalPrice= Number(totalPrice) + Number(this.cartItems[i].price);
      }
      console.log(totalPrice);
      return totalPrice;
    }
    ngOnInit() {
      this.cartItems=this.cartService.getCartItems();
    }
    placeOrder(){
      this.router.navigate(['/shipping']);
    }
  }
