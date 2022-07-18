export interface tableModel {
  thead: tableHeadModel[];
  tbody: tableBodyModel[];
  multiSelect?: boolean;
  actions?: tableActionModel[];
}

export interface tableActionModel {
  label: string;
  onClick?: () => void;
}
export interface tableHeadModel {
  label: any;
  width?: string;
}

export interface tableBodyModel {
  label: any;
}
