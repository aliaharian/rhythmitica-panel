export interface listLayoutProps {
  children?: any;
}

export interface innerPageLayoutProps {
  children?: any;
  breadcrumb: any[];
  handleBack?: () => void;
  handleDelete?: () => void;
}

export interface ListHeaderSearchInput {
  placeholder?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
export interface DropdownItem {
  label: string;
  value: string;
}

export interface ListHeaderProps {
  children?: any;
  deleteMode?: boolean;
  selectedItems?: number;
  handleClick?: () => void;
  label?: string;
  icon?: string;
}

export interface ItemInfoModel {
  image?: string;
  title: string;
  subtitle: string;
}

export interface ListLabelModel {
  label: string;
  color?: string;
}
