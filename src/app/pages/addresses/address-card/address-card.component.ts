import { Component, Input } from '@angular/core';
import { Address } from '../../../@core/data/custom/address';

@Component({
  selector: 'ngx-address-card',
  styleUrls: ['./address-card.component.scss'],
  templateUrl: 'address-card.component.html',
  // template: ``,
})

export class AddressCardComponent {
@Input() address: Address;
}
