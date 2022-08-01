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
import ListLabel from "@/components/atoms/ListLabel";

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
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
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
      width: "36%",
      name: "user",
    },
    {
      label: (
        <Typography className={styles.tableHeadText}>
          {t("user.role")}
        </Typography>
      ),
      width: "12%",
      name: "role",
    },
    {
      label: (
        <Typography className={styles.tableHeadText}>
          {t("user.country")}
        </Typography>
      ),
      width: "13%",
      name: "country",
    },
    {
      label: (
        <Typography className={styles.tableHeadText}>
          {t("user.status")}
        </Typography>
      ),
      width: "13%",
      name: "status",
    },
    {
      label: (
        <Typography className={styles.tableHeadText}>
          {t("user.joined date")}
        </Typography>
      ),
      width: "18%",
      name: "joinedDate",
    },
  ];
  const tableBody = [
    {
      id: 1,
      user: (
        <ItemInfo
          // image={"https://itica.ca/storage/users/site_7/user_90_1606331160.png"}
          title="hooman tootoonchian"
          subtitle="aliaharian@gmail.com"
        />
      ),
      role: <Typography>{t("user.admin")}</Typography>,
      country: <Typography>{t("user.iran")}</Typography>,
      status: <ListLabel label={t("status.active")} />,
      joinedDate: <Typography>05 May 2022 , 9:23 pm</Typography>,
    },
    {
      id: 2,
      user: (
        <ItemInfo
          image={"https://itica.ca/storage/users/site_7/user_90_1606331160.png"}
          title="sara nasirzadeh"
          subtitle="sa.nasirzadeh@gmail.com"
        />
      ),
      role: <Typography>{t("user.admin")}</Typography>,
      country: <Typography>{t("user.iran")}</Typography>,
      status: <ListLabel label={t("status.deactive")} color="danger" />,
      joinedDate: <Typography>10-2-2020</Typography>,
    },
    {
      id: 3,
      user: (
        <ItemInfo
          // image={"https://itica.ca/storage/users/site_7/user_90_1606331160.png"}
          title="Hooman Tootoonchian"
          subtitle="h.tootoonchian@gmail.com"
        />
      ),
      role: <Typography>{t("user.admin")}</Typography>,
      country: <Typography>{t("user.iran")}</Typography>,
      status: <ListLabel label={t("status.deactive")} color="danger" />,
      joinedDate: <Typography>10-2-2020</Typography>,
    },
    {
      id: 4,
      user: (
        <ItemInfo
          // image={"https://itica.ca/storage/users/site_7/user_90_1606331160.png"}
          title="Hooman Tootoonchian"
          subtitle="h.tootoonchian@gmail.com"
        />
      ),
      role: <Typography>{t("user.admin")}</Typography>,
      country: <Typography>{t("user.iran")}</Typography>,
      status: <ListLabel label={t("status.deactive")} color="danger" />,
      joinedDate: <Typography>10-2-2020</Typography>,
    },
    {
      id: 5,
      user: (
        <ItemInfo
          // image={"https://itica.ca/storage/users/site_7/user_90_1606331160.png"}
          title="Hooman Tootoonchian"
          subtitle="h.tootoonchian@gmail.com"
        />
      ),
      role: <Typography>{t("user.admin")}</Typography>,
      country: <Typography>{t("user.iran")}</Typography>,
      status: <ListLabel label={t("status.deactive")} color="danger" />,
      joinedDate: <Typography>10-2-2020</Typography>,
    },
    {
      id: 6,
      user: (
        <ItemInfo
          // image={"https://itica.ca/storage/users/site_7/user_90_1606331160.png"}
          title="Hooman Tootoonchian"
          subtitle="h.tootoonchian@gmail.com"
        />
      ),
      role: <Typography>{t("user.admin")}</Typography>,
      country: <Typography>{t("user.iran")}</Typography>,
      status: <ListLabel label={t("status.deactive")} color="danger" />,
      joinedDate: <Typography>10-2-2020</Typography>,
    },
    {
      id: 7,
      user: (
        <ItemInfo
          // image={"https://itica.ca/storage/users/site_7/user_90_1606331160.png"}
          title="Hooman Tootoonchian"
          subtitle="h.tootoonchian@gmail.com"
        />
      ),
      role: <Typography>{t("user.admin")}</Typography>,
      country: <Typography>{t("user.iran")}</Typography>,
      status: <ListLabel label={t("status.deactive")} color="danger" />,
      joinedDate: <Typography>10-2-2020</Typography>,
    },
    {
      id: 8,
      user: (
        <ItemInfo
          // image={"https://itica.ca/storage/users/site_7/user_90_1606331160.png"}
          title="Hooman Tootoonchian"
          subtitle="h.tootoonchian@gmail.com"
        />
      ),
      role: <Typography>{t("user.admin")}</Typography>,
      country: <Typography>{t("user.iran")}</Typography>,
      status: <ListLabel label={t("status.deactive")} color="danger" />,
      joinedDate: <Typography>10-2-2020</Typography>,
    },
    {
      id: 9,
      user: (
        <ItemInfo
          // image={"https://itica.ca/storage/users/site_7/user_90_1606331160.png"}
          title="Hooman Tootoonchian"
          subtitle="h.tootoonchian@gmail.com"
        />
      ),
      role: <Typography>{t("user.admin")}</Typography>,
      country: <Typography>{t("user.iran")}</Typography>,
      status: <ListLabel label={t("status.deactive")} color="danger" />,
      joinedDate: <Typography>10-2-2020</Typography>,
    },
    {
      id: 10,
      user: (
        <ItemInfo
          // image={"https://itica.ca/storage/users/site_7/user_90_1606331160.png"}
          title="Hooman Tootoonchian"
          subtitle="h.tootoonchian@gmail.com"
        />
      ),
      role: <Typography>{t("user.admin")}</Typography>,
      country: <Typography>{t("user.iran")}</Typography>,
      status: <ListLabel label={t("status.deactive")} color="danger" />,
      joinedDate: <Typography>10-2-2020</Typography>,
    },
  ];
  const tableActions = [
    {
      label: t("app.edit"),
      onClick: () => console.log("ok!"),
    },
    {
      label: t("app.delete"),
      onClick: () => console.log("ok!"),
    },
  ];
  const handleChangeRole = (event: SelectChangeEvent) => {
    setSelectedRole(event.target.value as string);
  };
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value as string);
  };
  const handleSelectRows = (items: number[]) => {
    setSelectedRows([...items]);
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
        <Table
          handleSelectRows={handleSelectRows}
          thead={tableHead}
          tbody={tableBody}
          actions={tableActions}
        />
      </div>
    </ListLayout>
  );
};
export default UsersList;
