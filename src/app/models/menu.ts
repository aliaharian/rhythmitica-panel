import { tableActionModel } from "./table";

export interface menuItemChild {
  title: string;
  link?: string;
  // selected?: boolean;
}

export interface menuItem {
  icon: string;
  title: string;
  link?: string;
  // selected?: boolean;
  children?: menuItemChild[];
  isOpen?: boolean;
  setIsOpen?: () => void;
  handleCloseMenu?: () => void;
}

export interface PopupMenuModel {
  items: tableActionModel[];
  open: boolean;
  setOpen: (open: boolean) => void;
  color?: string;
  rowItem: any;
}
