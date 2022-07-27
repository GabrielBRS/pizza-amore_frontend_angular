import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelCardPizzaComponent } from './model-card-pizza.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ModelCardPizzaComponent
  ],
  declarations: [ModelCardPizzaComponent]
})
export class ModelCardPizzaModule { }
