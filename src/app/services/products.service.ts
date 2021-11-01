import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product: any;
  constructor(private http: HttpClient) { }

    getAllProduct(token: any){
    
    
    const headers = {'Authorization': token}
    return this.http.get<any>('http://localhost:3000/api/products',{headers})
    .pipe(map(data =>{
        if(data){
         this.product = data;
         console.log(data);
         
        }
        return data;
    }));
  }
}
