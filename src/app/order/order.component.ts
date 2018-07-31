import { Component, OnInit } from '@angular/core';
import {CartService} from './../core/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderInfo:any;
  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.orderInfo=this.cartService.getOrder();
  }

}
