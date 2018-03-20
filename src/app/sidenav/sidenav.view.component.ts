import {Component} from '@angular/core';
import {SIDENAV_ITEMS} from './sidenav.items';
import {SideItem} from '../valueobject/sidenav.vo';

@Component({
  selector: 'app-sidenav-disp',
  templateUrl: './sidenav.view.component.html'
})
export class SidenavViewComponent {

  private sidenavItems: SideItem[];

  constructor() {
    this.filterSidenavItems();
  }

  filterSidenavItems() {
    this.sidenavItems = SIDENAV_ITEMS;
  }

  getSidenavItems() {
    return this.sidenavItems;
  }




}
