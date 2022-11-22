import { Component, OnInit } from '@angular/core';
import { factoryPizzaObject } from 'src/app/engine/models/objects/factory-pizza-obj';
import { PizzaServer } from 'src/app/engine/services/pizza.service';

@Component({
  selector: 'app-pizza-doce',
  templateUrl: './pizza-doce.component.html',
  styleUrls: ['./pizza-doce.component.scss'],
  providers:[PizzaServer]
})
export class PizzaDoceComponent implements OnInit {

  showMorePizzas:boolean=false;

  httpResponseClient:any[] = [];

  constructor(private pizzaService:PizzaServer) { }

  ngOnInit() {
    this.getPizzaService();
  }

  getPizzaService(){
    // this.httpResponseClient = this.pizzaService.getHttpResponseCommon().forEach(res=>{
    //   this.httpResponseClient = res;
    // });
    // this.httpResponseClient.push(factoryPizzaObject(null, "Chocolate", 2, 48.00, 40.00, [{"ingredientes":[{"":"aa"},{"":"ss"}]}]))
    // this.httpResponseClient.push(factoryPizzaObject(null, "Doce de leite", 2, 48.00, 40.00, [{"ingredientes":"aaa"}]));
  }

  changeShowMorePizzas(){
    this.showMorePizzas = !this.showMorePizzas;
  }
}
