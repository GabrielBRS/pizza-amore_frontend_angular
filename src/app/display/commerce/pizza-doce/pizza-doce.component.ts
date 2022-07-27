import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-doce',
  templateUrl: './pizza-doce.component.html',
  styleUrls: ['./pizza-doce.component.scss']
})
export class PizzaDoceComponent implements OnInit {
  showPrice21:boolean=false;
  showPrice22:boolean=false;
  showPrice23:boolean=false;

  showMorePizzas:boolean=false;

  id:any;

  constructor() { }

  ngOnInit() {
  }

  showPriceIngredient(id:any){
    if(id===21){
      this.showPrice21 = !this.showPrice21;
      this.id=id;
    }
    if(id===22){
      this.showPrice22 = !this.showPrice22;
      this.id=id;
    }
    if(id===23){
      this.showPrice23 = !this.showPrice23;
      this.id=id;
    }

  }

  changeShowMorePizzas(){
    this.showMorePizzas = !this.showMorePizzas;
    if(this.showMorePizzas===false){
      document.location.href="http://localhost:4200/#pizza-doce"
    }
  }
}
