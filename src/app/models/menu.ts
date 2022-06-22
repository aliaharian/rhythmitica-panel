export interface menuItemChild {
  title: string;
  link?: string;
  selected?: boolean;
}

export interface menuItem {
  icon: string;
  title: string;
  link?: string;
  selected?: boolean;
  children?: menuItemChild[];
  isOpen?: boolean;
  setIsOpen?: () => void;
}
