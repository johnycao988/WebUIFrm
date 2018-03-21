import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SideNavMenuModule} from './side-nav-menu/module';
import {TestPage1Component, TestPage2Component, TestPage3Component, TestPageComponent} from './test-pages/test-pages.component';
import {MenuStateComponent} from './test-pages/manu-state.component';
import {StateService} from './state-service';
import {MaterialModule} from './material/material.module';
import {AboutComponent} from './about/about.component';
import {MenuitemSelectedComponent} from './menuitem/menuitem.selected.component'; 
import 'hammerjs';
import {SidenavViewComponent} from './sidenav/sidenav.view.component';
import {SidenavItemsViewComponent} from './sidenav/sidenav.items.view.component';

@NgModule({
  declarations: [
    SidenavViewComponent,
    MenuitemSelectedComponent,
    AboutComponent, AppComponent,
    TestPage1Component,
    TestPage2Component,
    TestPage3Component,
    TestPageComponent,
    MenuStateComponent,
    SidenavItemsViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    MaterialModule,
    SideNavMenuModule,
    AppRoutingModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
