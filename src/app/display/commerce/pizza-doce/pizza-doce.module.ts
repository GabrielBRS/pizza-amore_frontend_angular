import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaDoceComponent } from './pizza-doce.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModelCardPizzaModule } from 'src/app/engine/models/components/model-card-pizza/model-card-pizza.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModelCardPizzaModule,
  ],exports:[PizzaDoceComponent],
  declarations: [PizzaDoceComponent]
})
export class PizzaDoceModule { }
