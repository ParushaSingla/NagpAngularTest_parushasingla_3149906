import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../../product-list/product-list.component';
import { ProductListModule } from '../../product-list/product-list.module';
import { ProductDetailComponent } from 'src/app/product-detail/product-detail.component';
import { CartPageComponent } from 'src/app/cart-page/cart-page.component';
import { CartPageModule } from 'src/app/cart-page/cart-page.module';


const routes: Routes = [
  {path:'',redirectTo:'/productList',pathMatch:'full'},
  {path:'productList',component:ProductListComponent},
  {path:'productDetail/:id',component:ProductDetailComponent},
  {path:'toCart',component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ProductListModule,CartPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
