import { Pizza } from "./pizza-model";

export function factoryPizzaObject(id:any, namePizza: any, pizzaType: any, price: any, priceWithPromotion: any, ingredients: any[]){
  let pizza:Pizza = new Pizza();
  pizza.id = id;
  pizza.namePizza = namePizza;
  pizza.pizzaType = pizzaType;
  pizza.price = price;
  pizza.priceWithPromotion = priceWithPromotion;
  pizza.ingredients = ingredients;
  return pizza;
}
