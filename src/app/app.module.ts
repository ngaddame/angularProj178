import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouter } from './app.routes';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule  } from 'ngx-bootstrap';
import {MatToolbarModule,MatSidenavModule,MatCheckboxModule,MatCardModule,MatDialogModule,MatProgressSpinnerModule,MatIconModule,MatStepperModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatRadioModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { DeviceOverviewComponent } from './deviceOverview.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RatingPipe } from './product-list/RatingPipe';
import { FilterProductPipe } from './product-list/FilterProductsPipe';
import { RatingComponent } from './product-list/rating/rating.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {ProductService} from './core/product.service';
import {CartService} from './core/cart.service';
import { DialogDataExampleDialogComponent } from './dialog/dialog-data-example-dialog/dialog-data-example-dialog.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { OrderComponent } from './order/order.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  imports: [ BrowserModule,FormsModule, Ng2TableModule,PaginationModule.forRoot(),AppRouter,MatToolbarModule,FlexLayoutModule,MatSidenavModule,BrowserAnimationsModule,MatCheckboxModule,MatCardModule,MatDialogModule,MatProgressSpinnerModule,MatIconModule,MatStepperModule,HttpModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatRadioModule],
  declarations: [ AppComponent, DeviceOverviewComponent, HeaderComponent, ProductListComponent,RatingPipe,RatingComponent, ProductDetailsComponent, DialogDataExampleDialogComponent, CartComponent, ShippingComponent, CartSummaryComponent, OrderComponent,FilterProductPipe, DetailsComponent, HomeComponent, AboutUsComponent ],
  bootstrap: [ AppComponent ],
  providers:[ProductService,CartService],
  entryComponents: [DialogDataExampleDialogComponent]
})
export class AppModule {}