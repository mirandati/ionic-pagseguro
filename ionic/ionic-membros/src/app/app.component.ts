import { Component, ViewChild } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';

import { HomePage } from '../pages/home/home';
import { ProductListPage } from '../pages/product-list/product-list';
import { MyCartPage } from '../pages/my-cart/my-cart';
import { MembroDetailPage } from '../pages/membro/membro-detail';

declare var PagSeguroDirectPayment;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyCartPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private http:Http) {
    this.initializeApp();
    this.getSession();

    // used for an example of ngFor and navigation
    this.pages = [      
      { title: 'Meus Dados', component: MembroDetailPage },      
      { title: 'Listagem de Produtos', component: ProductListPage },
      { title: 'Meu Carrinho', component: MyCartPage }      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  getSession(){
    this.http.get('http://localhost:8000/api/session').toPromise().then(
          response => PagSeguroDirectPayment.setSessionId(response.json().sessionId))

  }

}
