import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService, NbMenuItem } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';

import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  // userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  userMenu = [
        {
          title: 'Profile"',
          link: '',
        },
        {
          title: 'Log out',
          link: 'auth/logout'
        }
      ]


  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserData,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              private authService: NbAuthService) {
                this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
                  if (token.isValid()) {
                    this.user = token.getPayload();
                    console.log(this.user);
                  }
                })
  }

  ngOnInit() {
    /* this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick); */
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
