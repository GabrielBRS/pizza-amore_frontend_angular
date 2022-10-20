import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaSalgadaComponent } from './pizza-salgada.component';
import { ModelCardPizzaModule } from 'src/app/engine/models/components/model-card-pizza/model-card-pizza.module';

@NgModule({
  imports: [
    CommonModule,
    ModelCardPizzaModule,
  ],
  exports:[PizzaSalgadaComponent],
  declarations: [PizzaSalgadaComponent]
})
export class PizzaSalgadaModule { }
