import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountManagementComponent } from './account-management.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [{
  path: '',
  component: AccountManagementComponent,
  children: [
    {
      path: 'accounts',
      component: AccountsComponent,
    }, /*
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },*/
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountManagementRoutingModule { }

export const routedComponents = [
  AccountManagementComponent,
  AccountsComponent,

];
