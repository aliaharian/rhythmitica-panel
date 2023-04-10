import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "../../../assets/scss/organisms/header.module.scss";
import HeaderAvatar from "../../molecules/header/HeaderAvatar";
import HeaderGlobalSearch from "../../molecules/header/HeaderGlobalSearch";
import HeaderIconButton from "../../molecules/header/HeaderIconButton";
import HeaderLocalTime from "../../molecules/header/HeaderLocalTime";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <div className={styles.localtimeContainer}>
        <Typography className={styles.countryName}>
          {t("header.local time")} : {`Canada`}
        </Typography>
        <HeaderLocalTime />
      </div>
      <div className={styles.actionsContainer}>
        <HeaderGlobalSearch />
        <HeaderIconButton icon={`notifications_none`}/>
        <HeaderIconButton icon={`comment`}/>
        <HeaderAvatar image={'/image.jpg'}/>
      </div>
    </div>
  );
};

export default Header;
