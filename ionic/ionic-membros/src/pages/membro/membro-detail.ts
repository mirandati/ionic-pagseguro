import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http,Response } from '@angular/http';

import { Membro } from './membro.model'; 

import 'rxjs/add/operator/map';

@Component({
  selector: 'membro-detail',
  templateUrl: 'membro-detail.html'
})
export class MembroDetailPage {

  model:Membro = new Membro();

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http:Http) {
  }

  ngOnInit() {
  

  }

  cadastrar(){
    console.log("Cadastro");
  }


  
}
