import { Component, Input } from '@angular/core';
import { Address } from '../../../@core/data/custom/address';

@Component({
  selector: 'ngx-address-card',
  styleUrls: ['./address-card.component.scss'],
  template: `
  <nb-card [ngClass]="on">
  <div class="icon-container">
    <div class="icon danger">
      <ng-content></ng-content>
    </div>
  </div>

  <div class="details">
    <div class="title">{{ address?.addressType?.addressType }}</div><br>
        <div>
            {{ address?.address1 }}<br>
            <div *ngIf="(address?.address2.length > 0)">{{ address?.address2 }}<br></div>
            {{ address?.city }}, {{ address?.state?.stateAbbreviation }} {{ address?.zip }} <br>
        </div>
  </div>
</nb-card>
  `,
})

export class AddressCardComponent {
@Input() address: Address;
}
