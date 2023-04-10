import { HeaderAvatarProps } from "../../../app/models/avatar";
import styles from "../../../assets/scss/molecules/headerAvatar.module.scss";


const HeaderAvatar = ({ image, onClick }: HeaderAvatarProps) => {
  return (
    <div onClick={onClick} className={styles.avatar}>
      <img src={image} alt="avatar" />
    </div>
  );
};

export default HeaderAvatar;
