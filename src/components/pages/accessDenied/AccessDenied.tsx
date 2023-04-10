import { CircularProgress, Typography } from "@mui/material";
import styles from "../../../assets/scss/molecules/accessDenied.module.scss";

const AccessDenied = () => {
  return (
    <div className={styles.accessDenied}>
      <Typography>ACESS DENIED!</Typography>
    </div>
  );
};
export default AccessDenied;
