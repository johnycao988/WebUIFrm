import {Route} from '@angular/router';
import {MenuitemSelectedComponent} from '../menuitem/menuitem.selected.component';
import {SIDENAV_ITEMS} from '../sidenav/sidenav.items';
import {SideItem} from '../valueobject/sidenav.vo';

export class RouteInfo {

  private routes: Route[] = [];

  constructor() {

     const rd: Route = {path: '', redirectTo: 'welcome', pathMatch: 'full'};
     this.routes.push(rd);
    this.initRoutes(SIDENAV_ITEMS);
  }

  getRoutes() {
    return this.routes;
  }

  initRoutes(sideItems: SideItem[]) {

    for (const sideItem of sideItems) {

      if (sideItem.subItemList == null) {

        const si: Route = {'path': sideItem.routePath, 'component': sideItem.routeComp};

        this.routes.push(si);

      } else {

        this.initRoutes(sideItem.subItemList);

      }


    }

  }



}
