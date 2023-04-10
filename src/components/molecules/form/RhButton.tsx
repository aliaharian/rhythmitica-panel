import Icon from "../../atoms/Icon";
import styles from "../../../assets/scss/molecules/rhButton.module.scss";
import { ButtonModel, DropdownModel } from "../../../app/models/form";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const RhButton = ({
  label,
  onClick,
  size,
  icon,
}: ButtonModel) => {
  return (
    <Button
      onClick={onClick}
      className={clsx(styles.button, size == "sm" && styles.smButton)}
    >
      {icon && <Icon className={styles.buttonIcon} icon={icon} />}
      <Typography>{label}</Typography>
    </Button>
  );
};
export default RhButton;
