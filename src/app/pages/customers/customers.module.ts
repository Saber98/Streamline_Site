import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CustomersRoutingModule, routedComponents } from './customers-routing.module';

import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  imports: [
    ThemeModule,
    CustomersRoutingModule,
    DxDataGridModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CustomersModule { }
