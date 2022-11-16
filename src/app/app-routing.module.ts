import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingOrderComponent } from './components/order/pending-order/pending-order.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { EventComponent } from './components/event/event.component';
import { VoucherComponent } from './components/voucher/voucher.component';
import { CategoryComponent } from './components/category/category.component';
import { AuthGuard } from "./guards/auth.guard";
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { CancelOrderComponent} from "./components/order/cancel-order/cancel-order.component";
import {RejectOrderComponent} from "./components/order/reject-order/reject-order.component";
import {AcceptOrderComponent} from "./components/order/accept-order/accept-order.component";
import {ShippingOrderComponent} from "./components/order/shipping-order/shipping-order.component";
import {ReceivedOrderComponent} from "./components/order/received-order/received-order.component";
import {ColorComponent} from "./components/color/color.component";
import {SizeComponent} from "./components/size/size.component";
import {MaterialComponent} from "./components/material/material.component";
import {ProductComponent} from "./components/product/product.component";
import {ProductOptionComponent} from "./components/product-option/product-option.component";

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'admin/cancel-orders', component: CancelOrderComponent, canActivate: [AuthGuard] },
  { path: 'admin/pending-orders', component: PendingOrderComponent, canActivate: [AuthGuard] },
  { path: 'admin/reject-orders', component: RejectOrderComponent, canActivate: [AuthGuard] },
  { path: 'admin/accept-orders', component: AcceptOrderComponent, canActivate: [AuthGuard] },
  { path: 'admin/shipping-orders', component: ShippingOrderComponent, canActivate: [AuthGuard] },
  { path: 'admin/received-orders', component: ReceivedOrderComponent, canActivate: [AuthGuard] },
  { path: 'tables-data', component: TablesDataComponent, canActivate: [AuthGuard] },
  { path: 'tabs', component: TabsComponent, canActivate: [AuthGuard] },
  { path: 'pages-error404', component: PagesError404Component, canActivate: [AuthGuard] },
  { path: 'login', component: SignInComponent, canActivate: [AuthGuard] },
  { path: 'user-profile', component: UsersProfileComponent, canActivate: [AuthGuard] },
  { path: "event", component: EventComponent, canActivate: [AuthGuard] },
  { path: "voucher", component: VoucherComponent, canActivate: [AuthGuard] },
  { path: "category", component: CategoryComponent, canActivate: [AuthGuard] },
  { path: "order-detail/:id", component: OrderDetailComponent },
  { path: "color", component : ColorComponent},
  { path: "size", component : SizeComponent},
  { path: "material", component : MaterialComponent},
  { path: "product",component : ProductComponent},
  { path: "product-option/:id", component: ProductOptionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
