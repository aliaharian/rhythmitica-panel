import { ListLabelModel } from "@/app/models/list";
import { Typography } from "@mui/material";
import styles from "@scss/atoms/listLabel.module.scss";
import clsx from "clsx";

const ListLabel= ({ label, color = "success" }: ListLabelModel) => {
  return (
    <div
      className={clsx(
        styles.listLabel,
        color === "success" && styles.labelSuccess,
        color === "danger" && styles.labelDanger
      )}
    >
      <div></div>
      <Typography>{label}</Typography>
    </div>
  );
};

export default ListLabel;
