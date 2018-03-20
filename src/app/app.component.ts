import {Component} from '@angular/core';
import {StateService} from './state-service';
import {SidenavViewComponent} from './sidenav/sidenav.view.component';
@Component({
  selector: 'app-root',
  template: `<app-sidenav-disp></app-sidenav-disp>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
