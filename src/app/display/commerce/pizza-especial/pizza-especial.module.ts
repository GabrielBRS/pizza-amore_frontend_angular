import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaEspecialComponent } from './pizza-especial.component';
import { ModelCardPizzaModule } from 'src/app/engine/models/components/model-card-pizza/model-card-pizza.module';
import { PizzaServer } from 'src/app/engine/services/pizza.service';

@NgModule({
  imports: [
    CommonModule,
    ModelCardPizzaModule,
  ],
  exports: [PizzaEspecialComponent
  ],
  declarations: [PizzaEspecialComponent],
  providers:[PizzaServer]
})
export class PizzaEspecialModule { }
