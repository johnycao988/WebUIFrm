import {Routes} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Injectable} from '@angular/core';
import {SideItem} from '../valueobject/sidenav.vo';


export const SIDENAV_ITEMS: SideItem[] = [
  {
    path: '', title: 'Import LC', icon: 'menu', url: '', class: '', isRemoteView: false, isMenuitemComp: true, subItemList: [
      {
        path: 'IMLC_LC_REGISTER', title: 'LC Register', icon: 'menu', url: '/assets/pages/imlc-lc-register.html',
        class: '', isRemoteView: false, subItemList: null, isMenuitemComp: true
      },
      {
        path: 'IMLC_ISSUE_LC', title: 'Issue LC', icon: 'menu', url: '/assets/pages/imlc-issue-lc.html',
        class: '', isRemoteView: false, subItemList: null, isMenuitemComp: true
      }
    ]
  },
  {
    path: '', title: 'Standing Data', icon: 'menu', url: '', class: '', isRemoteView: false, isMenuitemComp: true, subItemList: [
      {
        path: 'STD_EXCHANGE_RATE', title: 'Exchange Rate', icon: 'menu', url: '/assets/pages/std-exchange-rate.html',
        class: '', isRemoteView: false, subItemList: null, isMenuitemComp: true
      },
      {
        path: 'STD_INTEREST_RATE', title: 'Interest Rate', icon: 'menu', url: '/assets/pages/std-interest-rate.html',
        class: '', isRemoteView: false, subItemList: null, isMenuitemComp: true
      }
    ]
  },
  {
    path: '', title: 'Level', icon: 'menu', url: '', class: '', isMenuitemComp: true, isRemoteView: false, subItemList: [
      {
        path: 'BAIDU', title: 'Baidu', icon: 'menu', url: 'https://www.baidu.com/', class: '',
        isRemoteView: false, subItemList: null, isMenuitemComp: true
      },
      {
        path: '', title: 'B-1', icon: 'menu', url: '', class: '', isRemoteView: false, isMenuitemComp: true, subItemList:
        [
          {path: 'TEST_A1', title: 'B1-1', icon: 'menu', url: '', class: '', isRemoteView: false, subItemList: null, isMenuitemComp: true},
          {path: 'TEST_A2', title: 'B1-2', icon: 'menu', url: '', class: '', isRemoteView: false, subItemList: null, isMenuitemComp: true}
        ]
      }
    ]
  },


  {
    path: 'about', title: 'About', icon: 'info', url: '/assets/pages/about.html',
    class: '', isRemoteView: false, subItemList: null, isMenuitemComp: false
  },
  {
    path: 'welcome', title: 'Welcome', icon: 'info', url: '/assets/pages/welcome.html',
    class: '', isRemoteView: false, subItemList: null, isMenuitemComp: false
  }

];

