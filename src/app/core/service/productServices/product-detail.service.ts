import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/sharing/models/IProduct';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  apiURL='api/products'
  products:IProduct[];
  constructor(private http:HttpClient) {
    this.products=[
      {
        id:1,
        name:"product1",
        price:100,
        description:"product 1",
        tags:"tag 1",
        category:"beauty",
        quantity:1,
        returnable:true
      },
      {
        id:2,
        name:"product2",
        price:100,
        description:"product 2",
        tags:"tag 2",
        category:"beauty",
        quantity:1,
        returnable:true
      },
      {
        id:3,
        name:"product3",
        price:100,
        description:"product 3",
        tags:"tag 3",
        category:"beauty",
        quantity:1,
        returnable:true
      }
    ]
   }
  getProductDetails():IProduct[]{
  // return this.http.get<IProduct[]>(this.apiURL);
  return this.products
  }
  getProductDetaild(id:number):IProduct{
   let product= this.products.find((product)=>product.id==id)
     return product;
  }
}
