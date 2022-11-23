import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './pages/categories/category-add/category-add.component';
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductAddComponent } from './pages/products/product-add/product-add.component';
import { ProductListComponent } from './pages/products/product-list/product-list/product-list.component';
import { UserAddComponent } from './pages/users/user-add/user-add.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';

const routes: Routes = [
  {path:"home",
   component:HomeComponent},
   {path:"product-add",
   component:ProductAddComponent},
   {path:"app-category-add",
  component:CategoryAddComponent},
  {path:"app-product-list",
  component:ProductListComponent},
  {path:"app-user-list",
  component:UserListComponent},
  {path:"app-user-add",
  component:UserAddComponent},
  {path:"app-category-list",
  component:CategoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
