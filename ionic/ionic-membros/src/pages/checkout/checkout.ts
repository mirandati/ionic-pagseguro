import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartProvider } from "../../providers/cart/cart"

declare var PagSeguroDirectPayment;

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage implements OnInit {

  public paymentMethods:Array<any> = [];

  public body:Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private cart:CartProvider,
               private ref: ChangeDetectorRef) {
  }


  ngOnInit():any{
    PagSeguroDirectPayment.getPaymentMethods({
      amount : this.cart.total,
      sucess: response => {
         let paymentMethods  = response.paymentMethods;
         this.paymentMethods = 
                Object.keys(paymentMethods).map((k) => paymentMethods[k]);     

          this.ref.detectChanges();        
      }
    })

  }

}
