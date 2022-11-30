import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-model-card-pizza',
  templateUrl: './model-card-pizza.component.html',
  styleUrls: ['./model-card-pizza.component.scss']
})
export class ModelCardPizzaComponent implements OnInit {

  @Input() id:any;
  @Input() namePizza:any;
  @Input() price:any;
  @Input() priceWithPromotion:any;
  @Input() ingredients:any = [];
 // @Output() getEventShowPrice = new EventEmitter<string>();

  showPrice:boolean=false;

  showMorePizzas:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  showPriceIngredient(){
    //this.showPrice = !this.showPrice;
  }

  // getEventShow(value: string) {
  //   this.getEventShowPrice.emit(value);
  // }


}
