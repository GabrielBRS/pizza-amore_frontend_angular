import { IPizza } from "./contracts/i-pizza-model";

export class Pizza implements IPizza{
  id: any;
  namePizza: any;
  pizzaType: any;
  price: any;
  priceWithPromotion: any;
  ingredients: any;
  //   constructor ();
  //   constructor (pizza:any);
  //   constructor (pizza?:any){
  //   {
  //     this.id = pizza?.id;
  //     this.namePizza = pizza?.namePizza;
  //     this.pizzaType = pizza?.pizzaType;
  //     this.price = pizza?.price;
  //     this.priceWithPromotion = pizza?.priceWithPromotion;
  //     this.ingredients = pizza?.ingredients;
  //   }
  // }
}
