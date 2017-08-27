import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { CartProvider } from "../../providers/cart/cart"
import { MyCartPage } from '../../pages/my-cart/my-cart';

/*
var PRODUCTS = [
  {name: "Product 1", price: 5.00},
  {name: "Product 2", price: 10.00},
  {name: "Product 3", price: 20.00},
  {name: "Product 4", price: 50.00},
  {name: "Product 5", price: 100.00},
  {name: "Product 6", price: 200.00},
  {name: "Personalizado", price: 0.0},
];
*/

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html'
})
export class ProductListPage {

  //products = PRODUCTS;

  public products:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http:Http,private cart:CartProvider) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8000/api/products').map((res: Response) =>{
              let body = res.json();              
              return  body || {};
            } ).subscribe(products => { this.products = products; }); 

    }

    addItem(item){
      this.cart.addItem(item);
      this.navCtrl.setRoot(MyCartPage)
      //this.navCtrl.push(MyCartPage);
    }

  
}
