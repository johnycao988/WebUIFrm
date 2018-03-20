import {Routes} from '@angular/router';
import {MenuitemSelectedComponent} from '../menuitem/menuitem.selected.component';
import {SIDENAV_ITEMS} from '../sidenav/sidenav.items';

export class RouteInfo {

  private routes: Routes;

  constructor() {

    this.init();
  }

  getRoutes() {

    return this.routes;
  }

  init() {

    this.routes = [

      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      {
        path: 'welcome',
        component: MenuitemSelectedComponent
      },
      {
        path: 'about',
        component: MenuitemSelectedComponent
      },
      {
        path: 'MenuItemSelected',
        component: MenuitemSelectedComponent
      }
    ];

  }

}
