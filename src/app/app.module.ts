import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductAddComponent } from './pages/products/product-add/product-add.component';
import { CategoryAddComponent } from './pages/categories/category-add/category-add.component';
import { ProductListComponent } from './pages/products/product-list/product-list/product-list.component';
import { UserAddComponent } from './pages/users/user-add/user-add/user-add.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ProductAddComponent,
    CategoryAddComponent,
    ProductListComponent,
    UserAddComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
