import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class ProductListModule { }
