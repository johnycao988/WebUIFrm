import {Routes} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Injectable} from '@angular/core';


export interface SideItem {
  path: string;
  title: string;
  icon: string;
  class: string;
  url: string;
  isRemoteView: boolean;
  isMenuitemComp: boolean;
  subItemList: SideItem[];
}
