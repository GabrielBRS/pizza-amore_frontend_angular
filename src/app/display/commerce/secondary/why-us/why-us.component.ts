import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements OnInit {

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
