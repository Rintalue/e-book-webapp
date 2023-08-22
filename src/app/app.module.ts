import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksComponent } from './books/books.component';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import{HttpClientModule} from '@angular/common/http';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { LoginFormContainerDirective } from './login-form-container.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { VendorComponent } from './vendor/vendor.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    LandingpageComponent,
    LoginFormContainerDirective,
    ContactComponent,
    BooksComponent,
    CategoriesComponent,
    CartComponent,
    VendorComponent,
    SellerPageComponent,
    SellerLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
