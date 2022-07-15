export interface listLayoutProps {
  children?: any;
  title: string;
  searchPlaceholder: string;
}

export interface ListHeaderSearchInput {
  placeholder?: string;
}
export interface ListHeaderDropdown {
  items?: DropdownItems[];
}
export interface DropdownItems {
  label: string;
  value: string;
}

export interface ListHeaderProps {
  searchPlaceholder: string;
}
