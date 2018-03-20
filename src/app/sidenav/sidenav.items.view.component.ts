import {Component, Input} from '@angular/core';
import {SideItem} from '../valueobject/sidenav.vo';
import {Router, ActivatedRoute, NavigationEnd, RouterStateSnapshot} from '@angular/router';
import {MenuItemService} from '../services/menuitem.service.component';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-sidenav-items-disp',
  templateUrl: './sidenav.items.view.component.html'

})
export class SidenavItemsViewComponent {


  @Input() sidenavItems: SideItem[];

  @Input() sidenav: MatSidenav;

  constructor(private router: Router, private miService: MenuItemService) {

  }

  itemClick(sideItem: SideItem) {
    this.miService.setSelectedSideItem(sideItem);
    this.router.navigate([sideItem.path]);
  }

  test() {

  }

}
