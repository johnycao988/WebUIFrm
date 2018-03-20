import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {MenuitemSelectedComponent} from './menuitem/menuitem.selected.component';

import {TestPage1Component, TestPage2Component, TestPage3Component, TestPageComponent} from './test-pages/test-pages.component';
import {MenuStateComponent} from './test-pages/manu-state.component';
import {RouteInfo} from './valueobject/route.info.vo';

const routeInfo: RouteInfo = new RouteInfo();

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeInfo.getRoutes(), {useHash: true}),
  ],
  providers: [],
  declarations: [],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {}
