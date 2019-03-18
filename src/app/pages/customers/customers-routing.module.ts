import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

const routes: Routes = [{
  path: '',
  component: CustomersComponent,
  children: [{
    path: 'customer-search',
    component: CustomerSearchComponent,
  }, {
    path: 'customer-add',
    component: CustomerAddComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule { }

export const routedComponents = [
    CustomersComponent,
    CustomerSearchComponent,
    CustomerAddComponent,
];
