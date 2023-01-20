import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  animationFlagItaly:any=1;

  @Input() DOMNavbar:any;
  iFrameWidth:any;
  iFrameHeigth:any;

  constructor() { }

  ngOnInit() {
    this.infinityLoop();
    this.setWidthIframe();
  }

  infinityLoop(){
    setInterval(() => { this.loopInfity(this.animationFlagItaly++) }, 1500);
  }

  loopInfity(loop: any) {
    if (loop <= 0 || loop >= 4) {
      this.animationSelectLang();
    }
 }

  animationSelectLang(){
    //console.log(this.animationFlagItaly)
    this.animationFlagItaly = 1;
    //console.log(this.animationFlagItaly)
  }

  setWidthIframe(){
    setInterval(()=>{
      if(this.DOMNavbar.width>=601){
        this.iFrameHeigth='450px';
        this.iFrameWidth='600px';
      }
      if(this.DOMNavbar.width<=601){
        this.iFrameHeigth='300px';
        this.iFrameWidth='330px';
      }
    },100)
  }
}
