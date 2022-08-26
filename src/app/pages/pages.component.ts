import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NbSidebarService, NbMenuService, NbMenuItem } from '@nebular/theme';
import { MENU_ITEMS } from './pages-menu';
import { AuthService } from '../services/auth.service';
import { Login } from '../models/Login';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu tag="menu" [items]="items">
      </nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  operator;
  items = MENU_ITEMS;

  currentUser: any = Login;
  constructor(
    public authService: AuthService,
  ) {

  }

  logout(){this.authService.doLogout();}
}
