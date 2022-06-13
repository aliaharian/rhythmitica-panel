import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "../../assets/scss/organisms/sidebar.module.scss";

const Sidebar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Typography>{t('app.app name')}</Typography>
      </div>
    </div>
  );
};

export default Sidebar;
