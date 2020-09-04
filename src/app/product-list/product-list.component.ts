import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../core/service/productServices/product-detail.service';
import { IProduct } from '../sharing/models/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:IProduct[]
  constructor(private productService:ProductDetailService) {
    this.productList=this.productService.getProductDetails()

  }

  ngOnInit(): void {
  }

}
