import { Typography } from "@mui/material";
import clsx from "clsx";
import { CheckboxModel } from "../../../app/models/form";
import styles from "../../../assets/scss/molecules/checkbox.module.scss";

const Checkbox = ({ checked = false, label, onClick }: CheckboxModel) => {
  return (
    <div onClick={onClick} className={clsx(styles.checkboxContainer , label && styles.checkboxStart)}>
      <div
        className={clsx(styles.checkbox, checked && styles.checkboxChecked)}
      />
      {label && <Typography>{label}</Typography>}
    </div>
  );
};

export default Checkbox;