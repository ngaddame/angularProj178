import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CartService} from './../core/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  isLinear = false;
  address:any;
  shippingOptionObj:any;
  stepOneFormGroup: FormGroup;
  stepTwoFormGroup: FormGroup;
  shippingOption:string='ground';
  stepThreeFormGroup: FormGroup;
  stepFourFormGroup: FormGroup;
  cartItems:any[]=[];
  states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM',
        'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
        'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV',
        'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW',
        'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA',
        'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP'];
  
  constructor(private fb: FormBuilder, private cartService : CartService, private router :Router) { }
  getCartDetails(){
    this.cartItems=this.cartService.getCartItems();
  }
  payOnDelivery(){
    let shippingObj={
      'address': this.stepOneFormGroup.getRawValue(),
      'shippingOption': this.stepFourFormGroup.getRawValue().shippingCtrl
    }
    console.log(shippingObj);
    this.cartService.order(shippingObj);
    this.router.navigate(['./order']);
  }
  nextStep($event) {
    let stepNum = $event.selectedIndex;
    // this.barValue = ((stepNum+1)/5)*100;
    switch(stepNum) {
        case 1:
            this.address = this.stepOneFormGroup.getRawValue();
            console.log(this.stepOneFormGroup.getRawValue());
            break;
        case 2:
            this.shippingOptionObj = this.stepFourFormGroup.getRawValue();
            break;
        default:
            break;
    }
}
  ngOnInit() {
    this.stepOneFormGroup = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
    this.stepTwoFormGroup = this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
    });
    this.stepThreeFormGroup = this.fb.group({
        
    });
    this.stepFourFormGroup = this.fb.group({
        shippingCtrl: ['', Validators.required]
    });

    this.getCartDetails()
  }
  
}
