import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-status-link-card',
  styleUrls: ['./status-link-card.component.scss'],
  template: `
    <nb-card [ngClass]="on">
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
      <a href={{link}}>{{ title }}</a>
        <div class="title"></div>
      </div>
    </nb-card>
  `,
})
export class StatusLinkCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() link: string;
}
