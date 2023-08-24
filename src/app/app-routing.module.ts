import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'landingpage', canActivate:[AuthGuard], component:LandingpageComponent},
  {path:'contact', component:ContactComponent},
  {path: 'books', component:BooksComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'vendor', component:VendorComponent},
  {path:'seller-page', canActivate:[AuthGuard], component: SellerPageComponent},
  {path: 'seller-login' ,component: SellerLoginComponent},
  {path: 'cart', component:CartComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'confirmation', component:ConfirmationComponent},
  {path: 'success-modal', component:SuccessModalComponent},
 {path: 'receipt', component:ReceiptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
