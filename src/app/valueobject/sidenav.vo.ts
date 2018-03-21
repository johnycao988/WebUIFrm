export interface SideItem {
  routePath?: string;
  routeComp?: any;
  title: string;
  icon?: string;
  class?: string;
  url?: string;
  isRemoteView?: boolean;
  subItemList: SideItem[];
}
