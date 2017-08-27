import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CartProvider {

  public items: Array<any> = [];
  total = 0;

   constructor(public http: Http) {
    console.log('Hello CartProvider Provider');
   }


    addItem(item){
      this.items.push(item);
      this.calculateTotal();
    }

    calculateTotal(){
      let total = 0;
      this.items.forEach(item => { 
                      total += Number(item.price);
                      this.total = total;
                    });
    }
  

   

}
