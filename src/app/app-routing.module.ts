import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingOrderComponent } from './components/pending-order/pending-order.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { SizesComponent } from './components/sizes/sizes.component';
import { EventComponent } from './components/event/event.component';
import { VoucherComponent } from './components/voucher/voucher.component';
import { CategoryComponent } from './components/category/category.component';
import { AuthGuard } from "./guards/auth.guard";
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'admin/pending-orders', component: PendingOrderComponent, canActivate: [AuthGuard] },
  { path: 'tables-data', component: TablesDataComponent, canActivate: [AuthGuard] },
  { path: 'tabs', component: TabsComponent, canActivate: [AuthGuard] },
  { path: 'pages-error404', component: PagesError404Component, canActivate: [AuthGuard] },
  { path: 'login', component: SignInComponent, canActivate: [AuthGuard] },
  { path: 'user-profile', component: UsersProfileComponent, canActivate: [AuthGuard] },
  { path: "sizes", component: SizesComponent, canActivate: [AuthGuard] },
  { path: "events", component: EventComponent, canActivate: [AuthGuard] },
  { path: "vouchers", component: VoucherComponent, canActivate: [AuthGuard] },
  { path: "category", component: CategoryComponent, canActivate: [AuthGuard] },
  { path: "order-detail/:id", component: OrderDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
