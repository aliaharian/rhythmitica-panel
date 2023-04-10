import RhTabs from "@/components/molecules/tabs/RhTabs";
import ProfileDetails from "@/components/organisms/profile/profileDetails/ProfileDetails";
import ProfileHeader from "@components/organisms/profile/ProfileHeader";
import styles from "@scss/pages/profile.module.scss";
import { useState } from "react";

const Profile = () => {
  const [tab, setTab] = useState("profile");
  const tabs = [
    {
      name: "profile",
      label: "Profile Details",
    },
    {
      name: "password",
      label: "Change Password",
    },
  ];
  return (
    <div className={styles.profile}>
      <ProfileHeader />
      <div className={styles.profileBody}>
        <RhTabs tabs={tabs} value={tab} setValue={setTab} />
        <div className={styles.tabsContainer}>
          {tab === "profile" && <ProfileDetails />}
        </div>
      </div>
    </div>
  );
};
export default Profile;
