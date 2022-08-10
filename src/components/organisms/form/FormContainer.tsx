import { FromContainerModel } from "@/app/models/form";
import { Typography } from "@mui/material";
import styles from "../../../assets/scss/organisms/formContainer.module.scss";

const FormContainer = ({ title, children }: FromContainerModel) => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.sectionTitle}>
        <Typography>{title}</Typography>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default FormContainer;

