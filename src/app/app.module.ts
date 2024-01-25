import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { CategoryBarComponent } from './components/category-bar/category-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactInfoBarComponent } from './components/contact-info-bar/contact-info-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    MiniCardComponent,
    CategoryBarComponent,
    HomeComponent,
    ContactInfoBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
