import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showLang:boolean = false;
  langSelected:any = "Português";
  selectLanguageAnimationNumber:any = 1;

  constructor(
    private translate:TranslateService
    ) { }

  ngOnInit() {
    this.infinityLoop();
  }

  infinityLoop(){
    setInterval(() => { this.loopInfity(this.selectLanguageAnimationNumber++) }, 1500);
  }

  loopInfity(loop: any) {
    if (loop <= 0 || loop >= 3) {
      this.animationSelectLang();
    }
 }

  animationSelectLang(){
    //console.log(this.selectLanguageAnimationNumber)
    this.selectLanguageAnimationNumber = 1;
    //console.log(this.selectLanguageAnimationNumber)
  }

  setLang(lang:any){
    if(lang==="Português"){
      this.langSelected="Português";
      this.translate.use("pt");
      //  setTimeout(() => {
      //    this.translate.use("pt");
      //    this.booleanOpenSelectedMenu();
      //  }, 1000);
    }
    if(lang==="English"){
      this.langSelected="English";
      this.translate.use("en");
      //  setTimeout(() => {
      //    this.translate.use("en");
      //    this.booleanOpenSelectedMenu();
      //  }, 1000);
    }
    if(lang==="Español"){
      this.langSelected="Español";
      this.translate.use("es");
      //  setTimeout(() => {
      //    this.translate.use("es");
      //    this.booleanOpenSelectedMenu();
      //  }, 1000);
    }
    if(lang==="Français"){
      this.langSelected="Français";
      this.translate.use("fr");
      //  setTimeout(() => {
      //    this.translate.use("fr");
      //    this.booleanOpenSelectedMenu();
      //  }, 1000);
    }
    if(lang==="Italiano"){
      this.langSelected="Italiano";
      this.translate.use("it");
      //  setTimeout(() => {
      //    this.translate.use("it");
      //    this.booleanOpenSelectedMenu();
      //  }, 1000);
    }
  }
}
