import { Button } from "@mui/material";
import Icon from "../../atoms/Icon";
import styles from "../../../assets/scss/molecules/headerGlobalSearch.module.scss";

const HeaderGlobalSearch = () => {
  return (
    <div className={styles.globalSearch}>
      <input />
      <Button className={styles.submit}>
        <Icon className={styles.icon} icon={`search`} />
      </Button>
    </div>
  );
};

export default HeaderGlobalSearch;
