import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { SignupComponent } from './signup/signup.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'landingpage', component:LandingpageComponent},
  {path:'contact', component:ContactComponent},
  {path: 'books', component:BooksComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'vendor', component:VendorComponent},
  {path:'seller-page', component: SellerPageComponent},
  {path: 'seller-login' ,component: SellerLoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
