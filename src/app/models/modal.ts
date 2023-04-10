export interface ModalModel {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleSubmit?: () => void;
  title?: string;
  children?: any;
}
