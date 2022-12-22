import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaSalgadaComponent } from './pizza-salgada.component';
import { ModelCardPizzaModule } from 'src/app/engine/models/components/model-card-pizza/model-card-pizza.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModelCardPizzaModule,
  ],
  exports:[PizzaSalgadaComponent],
  declarations: [PizzaSalgadaComponent]
})
export class PizzaSalgadaModule { }
