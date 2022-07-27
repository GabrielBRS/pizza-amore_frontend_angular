import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyUsComponent } from './why-us.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports:[WhyUsComponent],
  declarations: [WhyUsComponent]
})
export class WhyUsModule { }
