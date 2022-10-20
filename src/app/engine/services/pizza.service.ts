import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse} from '@angular/common/http';
import { Observable, tap} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Pizza } from '../models/objects/pizza-model';

@Injectable({
  providedIn: 'root',
})

export class PizzaServer {

  constructor(private http: HttpClient, private route:Router) { }

  getHttpResponseBestSellers():Observable<any> {
    return this.http.get<any>("http://localhost:8090/best-sellers/");
  }

  getHttpResponseCommon():Observable<any> {
    return this.http.get<any>("http://localhost:8090/pizza/");
  }

}
