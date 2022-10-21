import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseLanguageComponent } from './choose-language.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ChooseLanguageComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports:[ChooseLanguageComponent]
})
export class ChooseLanguageModule { }
