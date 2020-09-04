import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/sharing/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartDetailService {
  cart:IProduct[]=[
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
  constructor() { }
  addToCart(product){
   this.cart.push(product)
  }
  getCartItem(){
    return this.cart
  }
  setCart(cartDetail){
  this.cart=cartDetail
  }
}
