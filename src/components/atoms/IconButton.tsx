import { Button } from "@mui/material";
import Icon from "@components/atoms/Icon";
import { HeaderIconButtonProps } from "@models/icon";
import styles from "@scss/atoms/iconButton.module.scss";
const IconButton = ({ icon, onClick }: HeaderIconButtonProps) => {
  return (
    <Button className={styles.iconButton} onClick={onClick}>
      <Icon icon={icon}></Icon>
    </Button>
  );
};
export default IconButton;
