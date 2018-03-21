import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SideItem} from '../valueobject/sidenav.vo';



export class MenuItemsService {

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

export const sidenavMIService: MenuItemsService = new MenuItemsService();
