import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../sharing/models/IProduct';
import { ProductDetailService } from '../core/service/productServices/product-detail.service';
import { CartDetailService } from '../core/service/cartServices/cart-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId:number
  productDetail:IProduct
  constructor(private ActivatedRoute:ActivatedRoute,private productDetailService:ProductDetailService,private router:Router,private cartService:CartDetailService) {
      this.productId=this.ActivatedRoute.snapshot.params.id
      this.productDetail=this.productDetailService.getProductDetaild(this.productId)
      console.log(this.productDetail);

  }
  addToCart(productDetail){
    this.cartService.addToCart(productDetail)
   this.router.navigate(['/toCart'])
  }
  ngOnInit(): void {
  }

}
