import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pizzaamore_frontend';

  DOMNavbar = {width:0, html:'', menu:false}

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
  }
  ngOnInit(): void {
    this.setScreen();
  }

  setScreen(){
    setInterval(()=>{
      this.DOMNavbar.width = 599;
      this.DOMNavbar.width = window.screen.width;
      console.log(this.DOMNavbar)
      if(this.DOMNavbar.width>=600){
        this.DOMNavbar.html = "container-navbar-itens";
      }
      if(this.DOMNavbar.width<=600){
        this.DOMNavbar.html = "container-navbar-mobile";
      }
    },100);
  }
}
