import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  animationFlagItaly:any=1;

  constructor() { }

  ngOnInit() {
    this.infinityLoop();
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
}
