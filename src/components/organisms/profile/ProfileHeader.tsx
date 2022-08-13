import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { getRolesList } from "@/app/redux/users/actions";
import Dropdown from "@/components/molecules/form/Dropdown";
import PopupMenu from "@/components/molecules/popupMenu/PopupMenu";
import ProfileHeaderUserInfo from "@/components/molecules/profileHeader/ProfileHeaderUserInfo";
import { SelectChangeEvent } from "@mui/material";
import styles from "@scss/organisms/profileHeader.module.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ProfileHeader = () => {
  const rolesList = useAppSelector((state) => state.users.rolesList);
  const Dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [selectedRole, setSelectedRole] = useState("10");
  const [actionsOpen, setActionsOpen] = useState(false);
  useEffect(() => {
    !rolesList && Dispatch(getRolesList());
  }, []);
  const handleChangeRole = (event: SelectChangeEvent) => {
    setSelectedRole(event.target.value as string);
  };
  const actions = [
    {
      label: t("app.edit"),
      onClick: () => console.log("ok!"),
    },
    {
      label: t("app.delete"),
      onClick: () => console.log("ok!"),
    },
  ];
  return (
    <div className={styles.profileHeader}>
      <div>
        <div className={styles.userInfoContainer}>
          <ProfileHeaderUserInfo />
        </div>
        <div className={styles.actionsContainer}>
          <div className={styles.rolesContainer}>
            <Dropdown
              items={rolesList?.map((role) => ({
                label: role.name,
                value: role.id.toString(),
              }))}
              value={selectedRole}
              handleChange={handleChangeRole}
              label={t("list.role")}
              showLabelInsideInput
              buttonMode
            />
            <PopupMenu
              open={actionsOpen}
              setOpen={(e) => setActionsOpen(e)}
              items={actions}
              color="main"
              rowItem={null}
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default ProfileHeader;
