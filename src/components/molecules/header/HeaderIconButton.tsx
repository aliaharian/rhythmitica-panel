import { Button } from "@mui/material";
import Icon from "../../atoms/Icon";
import styles from "../../../assets/scss/molecules/headerIconButton.module.scss";
import { HeaderIconButtonProps } from "../../../app/models/icon";


const HeaderIconButton = ({ icon, onClick }: HeaderIconButtonProps) => {
  return (
    <Button onClick={onClick} className={styles.iconButton}>
      <Icon className={styles.icon} icon={icon} />
    </Button>
  );
};
export default HeaderIconButton;
