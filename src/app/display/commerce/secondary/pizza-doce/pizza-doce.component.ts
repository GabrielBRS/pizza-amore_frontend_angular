import { Component, OnInit } from '@angular/core';
import { PizzaServer } from 'src/app/engine/services/pizza.service';

@Component({
  selector: 'app-pizza-doce',
  templateUrl: './pizza-doce.component.html',
  styleUrls: ['./pizza-doce.component.scss'],
  providers:[PizzaServer]
})
export class PizzaDoceComponent implements OnInit {

  showMorePizzas:boolean=false;

  httpResponseClient:any;

  constructor(private pizzaService:PizzaServer) { }

  ngOnInit() {
    this.getPizzaService();
  }

  getPizzaService(){
    this.httpResponseClient = this.pizzaService.getHttpResponseCommon().forEach(res=>{
      this.httpResponseClient = res;
    });
  }

  changeShowMorePizzas(){
    this.showMorePizzas = !this.showMorePizzas;
  }
}
