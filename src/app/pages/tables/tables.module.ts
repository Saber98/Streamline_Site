import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';

import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    DxDataGridModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TablesModule { }
