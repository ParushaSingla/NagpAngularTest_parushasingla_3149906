import { Component, OnInit } from '@angular/core';
import { IProduct } from '../sharing/models/IProduct';
import { CartDetailService } from '../core/service/cartServices/cart-detail.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItem:IProduct[]
  constructor(private cartService:CartDetailService) {
   this.cartItem= this.cartService.getCartItem()
   console.log(this.cartItem);
  }

  ngOnInit(): void {
    this.cartItem= this.cartService.getCartItem()
    console.log(this.cartItem);
  }
  delete(id){
    let index=this.cartItem.findIndex(cart=>cart.id==id)
    this.cartItem.splice(index,1)
    this.cartService.setCart(this.cartItem)
  }
}
