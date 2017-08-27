import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductListPage } from '../pages/product-list/product-list';
import { MyCartPage } from '../pages/my-cart/my-cart';
import { CheckoutPage } from '../pages/checkout/checkout';
import { MembroDetailPage } from '../pages/membro/membro-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';


import { HttpModule } from '@angular/http';
import { CartProvider } from '../providers/cart/cart';


@NgModule({
  declarations: [
    MyApp,
    HomePage,    
    ProductListPage,
    MyCartPage,
    CheckoutPage,
    MembroDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
   // AngularFireModule.initializeApp(firebaseConfig),
   // AngularFireDatabaseModule,
    //AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,    
    ProductListPage,
    MyCartPage,
    CheckoutPage,
    MembroDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CartProvider
  ]
})
export class AppModule {}
