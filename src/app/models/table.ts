export interface tableModel {
  thead: tableHeadModel[];
  tbody: any[];
  multiSelect?: boolean;
  actions?: tableActionModel[];
  handleSelectRows?: (selectedRows: number[]) => void;
}

export interface tableActionModel {
  label: string;
  onClick?: (e:any) => void;
}
export interface tableHeadModel {
  label: any;
  width?: string;
  name: string;
}

export interface tableRowModel {
  multiSelect?: boolean;
  thead: tableHeadModel[];
  tb: any;
  actions?: tableActionModel[];
  checked: boolean;
  setChecked(checked: boolean): void;
}
