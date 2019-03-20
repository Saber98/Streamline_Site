import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CustomersRoutingModule, routedComponents } from './customers-routing.module';
import { NbDialogModule } from '@nebular/theme';

import { DxDataGridModule } from 'devextreme-angular';
import { AddressCardComponent } from '../addresses/address-card/address-card.component';
import { AddressPromptComponent } from '../addresses/address-prompt/address-prompt.component';

const COMPONENTS = [
  ...routedComponents,
  AddressCardComponent,
  AddressPromptComponent,
];

const ENTRY_COMPONENTS = [
  AddressPromptComponent,
];

const MODULES = [
  ThemeModule,
  CustomersRoutingModule,
  DxDataGridModule,
  NbDialogModule.forRoot(),
];

const SERVICES = [
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})

export class CustomersModule { }
