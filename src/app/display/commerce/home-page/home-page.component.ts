import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  title = 'pizzaamore_frontend';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
  }

  ngOnInit(): void {
  }
}
