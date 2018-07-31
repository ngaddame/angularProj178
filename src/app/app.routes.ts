import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceOverviewComponent } from './deviceOverview.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {DetailsComponent} from './details/details.component'
import { CartComponent } from './cart/cart.component';
import {ShippingComponent} from './shipping/shipping.component';
import {OrderComponent} from './order/order.component';
import{HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
// import{DetailListComponent} from './detailList/detailListComponent'
const routes : Routes = [
    { path:'', redirectTo:'/home', pathMatch:'full'},
    { path:'home', component:HomeComponent,},
    { path:'list', component:DeviceOverviewComponent,data:{'sales':false}},
    { path:'list/:id', component: ProductDetailsComponent},
    { path:'cart', component: CartComponent},
    { path:'aboutUs', component: AboutUsComponent},
    { path:'shipping', component: ShippingComponent},
    { path:'order', component: OrderComponent}
]

@NgModule({
    imports : [ RouterModule.forRoot( routes, { useHash: true } ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter{ }