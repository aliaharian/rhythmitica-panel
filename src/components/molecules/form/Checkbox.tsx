import { Typography } from "@material-ui/core";
import clsx from "clsx";
import { CheckboxModel } from "../../../app/models/form";
import styles from "../../../assets/scss/molecules/checkbox.module.scss";

const Checkbox = ({ checked = false, label, onClick }: CheckboxModel) => {
  return (
    <div onClick={onClick} className={styles.checkboxContainer}>
      <div
        className={clsx(styles.checkbox, checked && styles.checkboxChecked)}
      />
      {label && <Typography>{label}</Typography>}
    </div>
  );
};

export default Checkbox;