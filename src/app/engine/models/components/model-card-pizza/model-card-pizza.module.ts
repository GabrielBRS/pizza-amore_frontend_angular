import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelCardPizzaComponent } from './model-card-pizza.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports:[
    ModelCardPizzaComponent
  ],
  declarations: [ModelCardPizzaComponent]
})
export class ModelCardPizzaModule { }
