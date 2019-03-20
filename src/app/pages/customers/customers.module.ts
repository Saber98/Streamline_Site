import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CustomersRoutingModule, routedComponents } from './customers-routing.module';
import { NbDialogModule } from '@nebular/theme';

import { DxDataGridModule } from 'devextreme-angular';
import { AddressCardComponent } from '../extra-components/address-card/address-card.component';
import { AddressPromptComponent } from '../extra-components/address-card/address-prompt/address-prompt.component';

@NgModule({
  imports: [
    ThemeModule,
    CustomersRoutingModule,
    DxDataGridModule,
    NbDialogModule.forChild(),
  ],
  declarations: [
    ...routedComponents,
    AddressCardComponent,
    AddressPromptComponent,
  ],
  entryComponents: [
    AddressPromptComponent,
  ],
})
export class CustomersModule { }
