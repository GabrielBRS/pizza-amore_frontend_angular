import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './display/commerce/contact/contact.module';
import { FooterModule } from './display/commerce/footer/footer.module';
import { NavbarModule } from './display/commerce/navbar/navbar.module';
import { NewsPublicityModule } from './display/commerce/news-publicity/news-publicity.module';
import { PizzaDoceModule } from './display/commerce/pizza-doce/pizza-doce.module';
import { PizzaEspecialModule } from './display/commerce/pizza-especial/pizza-especial.module';
import { PizzaSalgadaModule } from './display/commerce/pizza-salgada/pizza-salgada.module';
import { WhyUsModule } from './display/commerce/why-us/why-us.module';
import { PizzaServer } from './engine/services/pizza.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    NewsPublicityModule,
    PizzaEspecialModule,
    PizzaSalgadaModule,
    PizzaDoceModule,
    ContactModule,
    WhyUsModule,
    FooterModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
  ],
  providers: [PizzaServer],
  bootstrap: [AppComponent]
})
export class AppModule {

}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
