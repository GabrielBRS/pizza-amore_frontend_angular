import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { HttpLoaderFactory } from 'src/app/app.module';
import { PizzaServer } from 'src/app/engine/services/pizza.service';
import { ContactModule } from '../secondary/contact/contact.module';
import { FooterModule } from '../secondary/footer/footer.module';
import { NavbarModule } from '../secondary/navbar/navbar.module';
import { NewsPublicityModule } from '../secondary/news-publicity/news-publicity.module';
import { PizzaDoceModule } from '../secondary/pizza-doce/pizza-doce.module';
import { PizzaEspecialModule } from '../secondary/pizza-especial/pizza-especial.module';
import { PizzaSalgadaModule } from '../secondary/pizza-salgada/pizza-salgada.module';
import { WhyUsModule } from '../secondary/why-us/why-us.module';




@NgModule({
  declarations: [
    HomePageComponent,
  ],
  exports:[
    HomePageComponent
  ],
  imports: [
    CommonModule,
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
export class HomePageModule { }
