import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { SizesComponent } from './components/sizes/sizes.component';
import { EventComponent } from './components/event/event.component';
import { VoucherComponent } from './components/voucher/voucher.component';
import { CategoryComponent } from './components/category/category.component';
const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'admin/orders', component: ModalComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  { path: "sizes", component:SizesComponent},
  { path: "events", component:EventComponent},
  { path: "vouchers", component:VoucherComponent},
  { path: "category", component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
