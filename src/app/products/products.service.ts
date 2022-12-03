import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  controllerUrl: string;

  constructor(private http: HttpClient) {
    this.controllerUrl = environment.apiUrl + "products/"
   }

   getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.controllerUrl + "all")
   }
}
