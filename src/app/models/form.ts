import { SelectChangeEvent } from "@mui/material";

export interface DropdownModel {
  items?: DropdownItem[];
  value?: string;
  label: string;
  handleChange?: (event: SelectChangeEvent) => void;
  hasAll?: boolean;
  showLabelInsideInput?: boolean;
}
export interface DropdownItem {
  label: string;
  value: string;
}

export interface ButtonModel {
  label?: string;
  onClick?: () => void;
  size?: string;
  icon?: string;
}
export interface CheckboxModel {
  label?: string;
  onClick?: () => void;
  checked?: boolean;
}
