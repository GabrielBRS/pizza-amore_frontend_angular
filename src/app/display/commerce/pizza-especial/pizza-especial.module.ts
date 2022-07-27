import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaEspecialComponent } from './pizza-especial.component';
import { ModelCardPizzaModule } from 'src/app/engine/models/model-card-pizza/model-card-pizza.module';

@NgModule({
  imports: [
    CommonModule,
    ModelCardPizzaModule,
  ],
  exports: [PizzaEspecialComponent
  ],
  declarations: [PizzaEspecialComponent]
})
export class PizzaEspecialModule { }
