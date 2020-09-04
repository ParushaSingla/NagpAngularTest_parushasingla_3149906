import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import { InMemoryDatabase } from '../core/service/InMemoryDatabase';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ProductDetailModule { }
