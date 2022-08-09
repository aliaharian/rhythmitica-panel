import RhAvatar from "@/components/atoms/RhAvatar";
import { Typography } from "@mui/material";
import styles from "@scss/molecules/profileHeaderUserInfo.module.scss";

const ProfileHeaderUserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.avatarContainer}>
        <RhAvatar image={'https://itica.ca/storage/users/site_7/user_90_1606331160.png'} bordered content="A" width={170} />
      </div>
      <div className={styles.usernameContainer}>
        <Typography>Hooman Tootoonchian</Typography>
        <Typography>hoomantootoonchian@gmail.com</Typography>
      </div>
    </div>
  );
};
export default ProfileHeaderUserInfo;
