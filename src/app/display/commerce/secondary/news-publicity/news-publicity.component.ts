import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-publicity',
  templateUrl: './news-publicity.component.html',
  styleUrls: ['./news-publicity.component.scss']
})
export class NewsPublicityComponent implements OnInit {

  animationFlagItaly:any=1;
  httpResponseClient:any;
  selectButton:any=1;
  @Input() DOMNavbar:any;

  constructor() { }

  ngOnInit() {
    this.httpResponse();
    this.infinityLoop();
  }

  httpResponse() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://localhost:8090/best-sellers/", true);
    // xmlHttp.responseType = 'json';
    xmlHttp.send();
    xmlHttp.onload = ()=> {
      var response:any = JSON.parse(xmlHttp.response);
      this.getHttpResponse(response);
      console.log("News Publicity component "+ response.map((obj:any)=> [obj.id,obj.name]));
    }
  }

  getHttpResponse(response:any){
    this.httpResponseClient = response;
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
    this.animationFlagItaly = 1;
  }

  chevronIncDec(number:any){
    this.selectButton = this.selectButton+number;
    if(this.selectButton<=0){
      this.selectButton = 4;
    }
    if(this.selectButton>=5){
      this.selectButton = 1;
    }
  }

}
