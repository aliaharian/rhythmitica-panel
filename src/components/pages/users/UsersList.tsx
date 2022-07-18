import { SelectChangeEvent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks";
import { getRolesList } from "../../../app/redux/users/actions";
import Dropdown from "../../molecules/form/Dropdown";
import ListHeaderSearch from "../../molecules/listHeader/ListHeaderSearch";
import ListHeader from "../../organisms/listLayout/ListHeader";
import ListLayout from "../../templates/ListLayout";
import styles from "../../../assets/scss/pages/usersList.module.scss";
import clsx from "clsx";
import Table from "../../molecules/table/Table";
import ItemInfo from "../../molecules/itemInfo/ItemInfo";

const UsersList = () => {
  const rolesList = useAppSelector((state) => state.users.rolesList);
  const Dispatch = useAppDispatch();
  const { t } = useTranslation();
  console.log("roles", rolesList);
  useEffect(() => {
    !rolesList && Dispatch(getRolesList());
  }, []);
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedRows, setSelectedRows] = useState([]);
  const status = [
    {
      label: t("status.active"),
      value: "active",
    },
    {
      label: t("status.deactive"),
      value: "notActive",
    },
  ];
  const tableHead = [
    {
      label: (
        <Typography className={styles.tableHeadText}>
          {t("user.user")}
        </Typography>
      ),
      width: "369px",
    },
    {
      label: (
        <Typography className={styles.tableHeadText}>
          {t("user.role")}
        </Typography>
      ),
      width: "134px",
    },
    {
      label: (
        <Typography className={styles.tableHeadText}>
          {t("user.country")}
        </Typography>
      ),
      width: "130px",
    },
    {
      label: (
        <Typography className={styles.tableHeadText}>
          {t("user.status")}
        </Typography>
      ),
      width: "145px",
    },
    {
      label: (
        <Typography className={styles.tableHeadText}>
          {t("user.joined date")}
        </Typography>
      ),
      width: "200px",
    },
  ];
  const tableBody = [
    {
      label: (
        <ItemInfo
          image={"https://itica.ca/storage/users/site_7/user_90_1606331160.png"}
          title="negar kharkan"
          subtitle="ali@gmail.com"
        />
      ),
    },
    {
      label: <Typography>admin</Typography>,
    },
    {
      label: <Typography>admin</Typography>,
    },
    {
      label: <Typography>admin</Typography>,
    },
    {
      label: <Typography>admin</Typography>,
    },
  ];
  const handleChangeRole = (event: SelectChangeEvent) => {
    setSelectedRole(event.target.value as string);
  };
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value as string);
  };
  return (
    <ListLayout>
      <ListHeader
        deleteMode={selectedRows.length > 0}
        selectedItems={selectedRows.length}
        handleClick={() => console.log("ok")}
        label={"add user"}
      >
        <ListHeaderSearch placeholder={"Search In Users"} />
        <div className={styles.dropdownContainer}>
          <Dropdown
            items={rolesList?.map((role) => ({
              label: role.name,
              value: role.id.toString(),
            }))}
            hasAll
            value={selectedRole}
            handleChange={handleChangeRole}
            label={t("list.role")}
            showLabelInsideInput
          />
        </div>
        <div className={clsx(styles.dropdownContainer, styles.statusDropdown)}>
          <Dropdown
            items={status}
            hasAll
            value={selectedStatus}
            handleChange={handleChangeStatus}
            label={t("list.status")}
            showLabelInsideInput
          />
        </div>
        <div className={clsx(styles.dropdownContainer, styles.countryDropdown)}>
          <Dropdown
            items={status}
            hasAll
            value={selectedStatus}
            handleChange={handleChangeStatus}
            label={t("list.country")}
            showLabelInsideInput
          />
        </div>
      </ListHeader>
      <div className={styles.tableContainer}>
        <Table thead={tableHead} tbody={tableBody} />
      </div>
    </ListLayout>
  );
};
export default UsersList;
