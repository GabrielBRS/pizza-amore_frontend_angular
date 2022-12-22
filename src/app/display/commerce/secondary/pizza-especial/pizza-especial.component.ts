import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Pizza } from 'src/app/engine/models/objects/pizza-model';
import { PizzaServer } from 'src/app/engine/services/pizza.service';

@Component({
  selector: 'app-pizza-especial',
  templateUrl: './pizza-especial.component.html',
  styleUrls: ['./pizza-especial.component.scss'],
  providers:[PizzaServer]
})
export class PizzaEspecialComponent implements OnInit {

  showMorePizzas:boolean=false;

  httpResponseClient:any;

  constructor(private pizzaService:PizzaServer, private translate:TranslateService) { }

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
