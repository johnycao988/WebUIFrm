import {SideItem} from '../valueobject/sidenav.vo';
import {MenuitemSelectedComponent} from '../menuitem/menuitem.selected.component';

export const SIDENAV_ITEMS: SideItem[] = [
  {
    title: 'Import LC', subItemList: [
      {
        routePath: 'IMLC_LC_REGISTER',
        routeComp: MenuitemSelectedComponent,
        title: 'LC Register',
        icon: 'menu',
        url: '/assets/pages/imlc-lc-register.html',
        subItemList: null
      },
      {
        routePath: 'IMLC_ISSUE_LC',
        routeComp: MenuitemSelectedComponent,
        title: 'Issue LC',
        icon: 'menu',
        url: '/assets/pages/imlc-issue-lc.html',
        subItemList: null
      }
    ]
  },
  {
    title: 'Standing Data', subItemList: [
      {
        routePath: 'STD_EXCHANGE_RATE',
        routeComp: MenuitemSelectedComponent,
        title: 'Exchange Rate',
        icon: 'menu',
        url: '/assets/pages/std-exchange-rate.html',
        subItemList: null
      },
      {
        routePath: 'STD_INTEREST_RATE',
        routeComp: MenuitemSelectedComponent,
        title: 'Interest Rate',
        icon: 'menu',
        url: '/assets/pages/std-interest-rate.html',
        subItemList: null
      }
    ]
  },
  {
    title: 'Level', subItemList: [
      {
        routePath: 'BAIDU',
        routeComp: MenuitemSelectedComponent,
        title: 'Baidu',
        icon: 'menu',
        url: 'https://www.baidu.com/',
        subItemList: null
      },
      {
        title: 'B-1', subItemList:
        [
          {routePath: 'TEST_A1', routeComp: MenuitemSelectedComponent, title: 'B1-1', icon: 'menu', subItemList: null},
          {routePath: 'TEST_A2', routeComp: MenuitemSelectedComponent, title: 'B1-2', icon: 'menu', subItemList: null}
        ]
      }
    ]
  },


  {
    routePath: 'about', routeComp: MenuitemSelectedComponent, title: 'About', icon: 'info',
    url: '/assets/pages/about.html', subItemList: null

  },
  {
    routePath: 'welcome', routeComp: MenuitemSelectedComponent, title: 'Welcome', icon: 'info',
    url: '/assets/pages/welcome.html', subItemList: null
  }

];

