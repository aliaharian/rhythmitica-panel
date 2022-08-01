import RhAvatar from "@/components/atoms/RhAvatar";
import { Typography } from "@mui/material";
import styles from "@scss/molecules/profileHeaderUserInfo.module.scss";

const ProfileHeaderUserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.avatarContainer}>
        <RhAvatar bordered content="A" width={170} />
      </div>
      <div className={styles.usernameContainer}>
        <Typography>Hooman Tootoonchian</Typography>
        <Typography>hoomantootoonchian@gmail.com</Typography>
      </div>
    </div>
  );
};
export default ProfileHeaderUserInfo;
