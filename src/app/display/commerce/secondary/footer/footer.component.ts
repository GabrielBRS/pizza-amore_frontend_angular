import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  animationFooterNumber:any = 1;

  constructor() { }

  ngOnInit() {
    this.infinityLoop();
  }

  infinityLoop(){
    setInterval(() => { this.loopInfity(this.animationFooterNumber++) }, 3000);
  }

  loopInfity(loop: any) {
    if (loop <= 0 || loop >= 4) {
      this.animationSelectLang();
    }
 }

  animationSelectLang(){
    //console.log(this.selectLanguageAnimationNumber)
    this.animationFooterNumber = 1;
    //console.log(this.selectLanguageAnimationNumber)
  }

}
