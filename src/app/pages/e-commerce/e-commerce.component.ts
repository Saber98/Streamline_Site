import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  link: string;
}

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})

export class ECommerceComponent {

  private alive = true;

  customersCard: CardSettings = {
    title: 'Customers',
    iconClass: 'nb-person',
    type: 'primary',
    link: '#/pages/customers/customer-search',
  };
  ordersCard: CardSettings = {
    title: 'Orders',
    iconClass: 'nb-compose',
    type: 'primary',
    link: '#/pages/orders',
  };
  tasksCard: CardSettings = {
    title: 'Tasks',
    iconClass: 'nb-list',
    type: 'primary',
    link: '#/pages/tasks',
  };
  purchasingCard: CardSettings = {
    title: 'Purchasing',
    iconClass: 'nb-e-commerce',
    type: 'primary',
    link: '#/pages/purchasing',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.customersCard,
    this.ordersCard,
    this.tasksCard,
    this.purchasingCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.customersCard,
        type: 'primary',
      },
      {
        ...this.ordersCard,
        type: 'primary',
      },
      {
        ...this.tasksCard,
        type: 'secondary',
      },
      {
        ...this.purchasingCard,
        type: 'secondary',
      },
    ],
  };

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
    .pipe(takeWhile(() => this.alive))
    .subscribe(theme => {
    this.statusCards = this.statusCardsByThemes[theme.name];
    });

}
}
