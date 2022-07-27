import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPublicityComponent } from './news-publicity.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModelCardPizzaModule } from 'src/app/engine/models/model-card-pizza/model-card-pizza.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModelCardPizzaModule,
  ],
  exports:[NewsPublicityComponent],
  declarations: [NewsPublicityComponent]
})
export class NewsPublicityModule { }
