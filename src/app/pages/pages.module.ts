import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
/*import { HomeComponent } from './home/home.component';
import {HomeModule} from './home/home.module';*/

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    /*HomeModule,*/
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    /*HomeComponent,*/
    /*AuthComponent,*/
    /*InventoryComponent,
    AccountManagementComponent,
    AccountsComponent,*/
  ],
})
export class PagesModule {
}
