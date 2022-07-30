import { SelectChangeEvent } from "@mui/material";

export interface DropdownModel {
  items?: DropdownItem[];
  value?: string;
  label: string;
  handleChange?: (event: SelectChangeEvent) => void;
  hasAll?: boolean;
  formMode?: boolean;
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

export interface InputModel {
  label?: string;
  className?: string;
  type?: string;
  formik?: any;
  name: string;
  max?: string;
  min?: string;
  numberOnly?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  multiline?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}
