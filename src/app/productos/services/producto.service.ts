import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDTO } from '../../shared/models/product.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //url: string = 'http://localhost:8080/api/product';


  constructor( private http: HttpClient ) { }

  public getProducts() {
    return this.http.get<ProductDTO[]>("http://localhost:8080/api/product/list");
  }
}
