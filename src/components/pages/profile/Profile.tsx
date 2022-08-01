import ProfileHeader from "@components/organisms/profile/ProfileHeader";
import styles from "@scss/pages/profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileHeader />
    </div>
  );
};
export default Profile;
