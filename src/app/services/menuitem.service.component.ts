import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SideItem} from '../valueobject/sidenav.vo';



@Injectable()
export class MenuItemService {

  private selectedSideItem: SideItem;

  constructor() {

    this.selectedSideItem = null;
  }

  setSelectedSideItem(selectedSI: SideItem) {
    this.selectedSideItem = selectedSI;
  }

  getSelectedSideItem() {
    return this.selectedSideItem;
  }

}

