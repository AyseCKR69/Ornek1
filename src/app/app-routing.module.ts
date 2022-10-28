import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './pages/categories/category-add/category-add.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductAddComponent } from './pages/products/product-add/product-add.component';

const routes: Routes = [
  {path:"home",
   component:HomeComponent},
   {path:"product-add",
   component:ProductAddComponent},
   {path:"app-category-add",
  component:CategoryAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
