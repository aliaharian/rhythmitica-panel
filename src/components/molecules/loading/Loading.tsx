import { CircularProgress } from "@mui/material";
import styles from "../../../assets/scss/molecules/loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <CircularProgress />
    </div>
  );
};
export default Loading;
