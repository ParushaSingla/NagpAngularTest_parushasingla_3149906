import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/sharing/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDatabase implements InMemoryDbService{
  createDb() {
   const products:IProduct[]=[
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
    return products
  }
}
