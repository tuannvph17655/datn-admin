import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { OrderComponent } from './components/order/order.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { SizesComponent } from './components/sizes/sizes.component';
import { EventComponent } from './components/event/event.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    OrderComponent,
    TabsComponent,
    TablesDataComponent,
    UsersProfileComponent,
    SignInComponent,
    PagesError404Component,
    SizesComponent,
    EventComponent,
    CategoryComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
