import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  
  @Input() cart:any[];
  @Input() shippingOption:any;
  constructor() { }

  ngOnInit() {
  }
  getTotalPrice(){
    let totalPrice =0;
    console.log(this.cart)
    for(var i=0;i<this.cart.length;i++)
    {
      totalPrice= Number(totalPrice) + Number(this.cart[i].price);
    }
    console.log(totalPrice);
    return totalPrice;
  }
  getEstimatedShippingCost(){
    console.log("getEstimatedShippingCost"+this.shippingOption)
    // if(this.shippingOption)
  }
}
