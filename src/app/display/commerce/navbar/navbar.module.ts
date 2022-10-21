import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { ChooseLanguageModule } from 'src/app/engine/models/components/choose-language/choose-language.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ChooseLanguageModule,
  ],
  exports:[NavbarComponent],
  declarations: [NavbarComponent]
})
export class NavbarModule { }

