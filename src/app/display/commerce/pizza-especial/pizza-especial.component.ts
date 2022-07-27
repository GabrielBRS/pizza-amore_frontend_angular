import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-especial',
  templateUrl: './pizza-especial.component.html',
  styleUrls: ['./pizza-especial.component.scss']
})
export class PizzaEspecialComponent implements OnInit {

  showPrice21:boolean=false;
  showPrice22:boolean=false;
  showPrice23:boolean=false;

  showMorePizzas:boolean=false;

  id:any;

  httpResponseClient:any;

  constructor() { }

  ngOnInit() {
    this.httpResponse();
  }

  httpResponse() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://localhost:8090/pizza/", true);
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

  showPriceIngredient(id:any){
    if(id===1){
      this.showPrice21 = !this.showPrice21;
      this.id=id;
    }
    if(id===2){
      this.showPrice22 = !this.showPrice22;
      this.id=id;
    }
    if(id===3){
      this.showPrice23 = !this.showPrice23;
      this.id=id;
    }

  }

  changeShowMorePizzas(){
    this.showMorePizzas = !this.showMorePizzas;
    if(this.showMorePizzas===false){
      document.location.href="http://localhost:4200/#pizza-especial"
    }
  }
}
