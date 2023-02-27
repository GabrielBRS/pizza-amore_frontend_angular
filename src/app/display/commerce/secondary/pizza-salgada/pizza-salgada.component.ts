import { Component, Input, OnInit } from '@angular/core';
import { PizzaServer } from 'src/app/engine/services/pizza.service';

@Component({
  selector: 'app-pizza-salgada',
  templateUrl: './pizza-salgada.component.html',
  styleUrls: ['./pizza-salgada.component.scss'],
  providers:[PizzaServer]
})
export class PizzaSalgadaComponent implements OnInit {

  showMorePizzas:boolean=false;

  httpResponseClient:any;

  selectButton:any=1;
  @Input() DOMNavbar:any;

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

  chevronIncDec(number:any){
    this.selectButton = this.selectButton+number;
    if(this.selectButton<=0){
      this.selectButton = 15;
    }
    if(this.selectButton>=16){
      this.selectButton = 1;
    }
  }
}
