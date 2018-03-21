import {Component, OnInit, Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SideItem} from '../valueobject/sidenav.vo';
import {sidenavMIService} from '../services/menuitem.service.component';

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


  constructor(private sanitizer: DomSanitizer) {

  }

  getUrl() {

    if (sidenavMIService.getSelectedSideItem() === null) {
      return '';
    }


    let rtnUrl: string;


    const url = sidenavMIService.getSelectedSideItem().url;

    if (url === null || url === undefined) {
      rtnUrl = '/assets/pages/welcome.html';
    } else {
      rtnUrl = url;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(rtnUrl + '?isRemoteReq=true');

  }

  ngOnInit() {

  }

}



