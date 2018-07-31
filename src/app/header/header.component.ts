import { Component, OnInit } from '@angular/core';
import {CartService} from './../core/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems:any[]=[];
  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.cartItems=this.cartService.getCartItems();
  }

}
