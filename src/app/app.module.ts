import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { PendingOrderComponent } from './components/order/pending-order/pending-order.component';
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
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {JwtModule} from "@auth0/angular-jwt";
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ColorComponent } from './components/color/color.component';
import { SizeComponent } from './components/size/size.component';
import { MaterialComponent } from './components/material/material.component';
import { CancelOrderComponent } from './components/order/cancel-order/cancel-order.component';
import { RejectOrderComponent } from './components/order/reject-order/reject-order.component';
import { AcceptOrderComponent } from './components/order/accept-order/accept-order.component';
import { ShippingOrderComponent } from './components/order/shipping-order/shipping-order.component';
import { ReceivedOrderComponent } from './components/order/received-order/received-order.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PendingOrderComponent,
    TabsComponent,
    TablesDataComponent,
    UsersProfileComponent,
    SignInComponent,
    PagesError404Component,
    SizesComponent,
    EventComponent,
    CategoryComponent,
    OrderDetailComponent,
    ColorComponent,
    SizeComponent,
    MaterialComponent,
    CancelOrderComponent,
    RejectOrderComponent,
    AcceptOrderComponent,
    ShippingOrderComponent,
    ReceivedOrderComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(), // ToastrModule added
        JwtModule.forRoot({
          config: {
            tokenGetter: () => {
              return localStorage.getItem('auth-token');
            },
            allowedDomains: ['localhost:8888'],
          }
        }),
      ToastrModule.forRoot(),

    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
