import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/filter'

@Injectable()
export class ProductService {

  /**
   * Creates an instance of ProductService.
   * @param {HttpService} http
   *
   * @memberof ProductService
   */
  constructor(private http: Http) { }

  /**
   *
   *
   * @param {string} id
   * @returns {Observable<any>}
   *
   * @memberof ProductService
   */
  getProduct(id: string): Observable<any> {
    return this.http.get('assets/server/json/products.json')
    .map(res => res.json());
  }

  getProductList(): Observable<any> {
    return this.http.get('assets/server/json/products.json')
    .map(res => res.json())
    .catch(err => err.json());
  }


  getProductDetail(id : string): Observable<any> {
    // value : Number = parseInt(this.id);
    console.log("id value is"+id);
    return this.http.get('assets/server/json/products.json')
    .map(function(res){
       console.log(res.json().products);
       return res.json().products.filter(function(data){
           console.log(data)
           return data.id == Number(id); 
       });
    })
    .catch(err => err.json());
  }

  /**
   *
   *
   * @returns {*}
   *
   * @memberof ProductService
   */
  getTaxonomies(): any {
    return this.http.get(`/spree/api/v1/taxonomies?set=nested`)
    .map(res => res.json());
  }

  /**
   *
   *
   * @returns {*}
   *
   * @memberof ProductService
   */
  getProducts(): any {
    return this.http.get(`/spree/api/v1/products`)
    .map(res => res.json());
  }
}
