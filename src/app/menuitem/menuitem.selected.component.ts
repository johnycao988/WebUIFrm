import {Component, OnInit, Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SideItem} from '../valueobject/sidenav.vo';
import {MenuItemService} from '../services/menuitem.service.component';

@Component({
  selector: 'app-menu-item',
  template: `
      <div>
         <iframe [src]="getUrl()" width="100%" height="1280" frameborder="0" scrolling="no"  >
         </iframe>
     </div>
`
})

export class MenuitemSelectedComponent implements OnInit {


  constructor(private miService: MenuItemService, private sanitizer: DomSanitizer) {

  }

  getUrl() {

    let rtnUrl: string;

    rtnUrl = '/assets/pages/welcome.html';

    if (this.miService.getSelectedSideItem() !== null && this.miService.getSelectedSideItem().url !== null
      && this.miService.getSelectedSideItem().url.length > 0) {
      rtnUrl = this.miService.getSelectedSideItem().url;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(rtnUrl + '?isRemoteReq=true');

  }

  ngOnInit() {

  }

}



