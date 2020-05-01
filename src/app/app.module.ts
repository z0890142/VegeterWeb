import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { PricePageComponent } from './components/price-page/price-page.component';
import { FriendsComponent } from './components/friends/friends.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FormsModule }   from '@angular/forms';
import { AllPricePageComponent } from './components/all-price-page/all-price-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PricePageComponent,
    FriendsComponent,
    SidenavComponent,
    AllPricePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
