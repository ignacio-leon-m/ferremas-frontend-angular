import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { io } from "socket.io-client";
import * as Rx from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebPayService {

  private socket: any;

  constructor(private _http: HttpClient){

  }

  connect(): Rx.Subject<MessageEvent>{
      this.socket = io(environment.ws_url);

      let observable = new Observable(observer => {
          this.socket.on('paid', (data: any) => {
              observer.next(data)
          });
          return () => {
              this.socket.disconnect();
          }
      });

      let observer= {
          next: (data: Object) => {
              this.socket.emit('paid', data)
          }
      };

      return Rx.Subject.create(observer, observable);
  }
  pagar(amount: any){
    let params = {
      "amount": amount
    };
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this._http.post('http://localhost:3410/api/v1/pagar', params, {headers:headers})
    .pipe(
      map(res => res as any)
    );
  }
}