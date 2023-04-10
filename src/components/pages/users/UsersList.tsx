import { SelectChangeEvent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks";
import {
  deleteUser,
  getCountriesList,
  getRolesList,
  getUsersList,
} from "../../../app/redux/users/actions";
import Dropdown from "../../molecules/form/Dropdown";
import ListHeaderSearch from "../../molecules/listHeader/ListHeaderSearch";
import ListHeader from "../../organisms/listLayout/ListHeader";
import ListLayout from "../../templates/ListLayout";
import styles from "../../../assets/scss/pages/usersList.module.scss";
import clsx from "clsx";
import Table from "../../molecules/table/Table";
import ItemInfo from "../../molecules/itemInfo/ItemInfo";
import ListLabel from "@/components/atoms/ListLabel";
import { useDebouncedCallback } from "use-debounce";
import InfiniteScroll from "react-infinite-scroll-component";
import ConfirmDeleteDialog from "@/components/molecules/dialog/ConfirmDeleteDialog";

const UsersList = () => {
  const rolesList = useAppSelector((state) => state.users.rolesList);
  const countriesList = useAppSelector((state) => state.users.countriesList);
  const usersList = useAppSelector((state) => state.users.usersListResponse);
  const Dispatch = useAppDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    !rolesList && Dispatch(getRolesList());
    !countriesList && Dispatch(getCountriesList());
    !usersList && Dispatch(getUsersList({}));
  }, []);

  const debouncedFunction = useDebouncedCallback((e) => {
    setPage(0);
    Dispatch(
      getUsersList({
        role: selectedRole,
        search: e.target.value,
        country: selectedCountry,
        status: selectedStatus,
        page: 0,
      })
    );
  }, 500);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [usersTable, setUsersTable] = useState<any[]>([]);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number[]>([]);

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
  useEffect(() => {
    if (usersList?.data) {
      let tmp = usersList?.data.map((item: any) => {
        let date = Date.parse(item.created_at);
        let parsed = new Date(date);
        return {
          id: item.id,
          user: (
            <ItemInfo
              image={
                item.avatar
                  ? process.env.REACT_APP_IMAGE_URL + item.avatar
                  : null
              }
              title={`${item.name} ${item.family}`}
              subtitle={item.email}
            />
          ),
          role: (
            <Typography>
              {item.roles?.find(
                (role: any) => role.site_id === process.env.REACT_APP_SITE_ID
              )?.name || "student"}
            </Typography>
          ),
          country: <Typography>{item.timezone}</Typography>,
          status: (
            <ListLabel
              label={item.is_active ? t("status.active") : t("status.deactive")}
              color={item.is_active ? "success" : "danger"}
            />
          ),
          joinedDate: (
            <Typography>
              {parsed.getDate() +
                "-" +
                parsed.getMonth() +
                "-" +
                parsed.getFullYear()}
            </Typography>
          ),
        };
      });
      setUsersTable([...tmp]);
    }
  }, [usersList]);

  const tableActions = [
    {
      label: t("app.edit"),
      onClick: () => console.log("ok!"),
    },
    {
      label: t("app.delete"),
      onClick: (e: any) => {
        setSelectedItem([e.id]);
        setOpenDeleteDialog(true);
      },
    },
  ];
  const handleChangeRole = (event: SelectChangeEvent) => {
    setSelectedRole(event.target.value as string);
    setPage(0);
    Dispatch(
      getUsersList({
        role: event.target.value,
        search: search,
        country: selectedCountry,
        status: selectedStatus,
        page: 0,
      })
    );
  };
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value as string);
    setPage(0);
    Dispatch(
      getUsersList({
        role: selectedRole,
        search: search,
        country: selectedCountry,
        status: event.target.value,
        page: 0,
      })
    );
  };
  const handleChangeCountry = (event: SelectChangeEvent) => {
    setSelectedCountry(event.target.value as string);
    setPage(0);
    Dispatch(
      getUsersList({
        role: selectedRole,
        search: search,
        country: event.target.value,
        status: selectedStatus,
        page: 0,
      })
    );
  };
  const handleSelectRows = (items: number[]) => {
    setSelectedRows([...items]);
  };

  const handleConfirmDelete = () => {
    setSelectedItem([...selectedRows]);
    setOpenDeleteDialog(true);
  };
  const handleDelete = () => {
    if (selectedItem.length === 1) {
      Dispatch(deleteUser(selectedItem[0]));
    } else if (selectedItem.length > 1) {
      selectedItem.map((item: number) => {
        Dispatch(deleteUser(item));
      });
    }
  };
  const handleCreateUser = () => {
    console.log("ok");
  };

  return (
    <ListLayout>
      {
        <ConfirmDeleteDialog
          open={openDeleteDialog}
          title={
            selectedItem.length > 1
              ? `really want to delete ${selectedItem.length} users?`
              : `really want to delete this user?`
          }
          setOpen={setOpenDeleteDialog}
          handleSubmit={handleDelete}
        />
      }
      <ListHeader
        deleteMode={selectedRows.length > 0}
        selectedItems={selectedRows.length}
        handleClick={
          selectedRows.length > 0 ? handleConfirmDelete : handleCreateUser
        }
        label={"add user"}
      >
        <ListHeaderSearch
          value={search}
          handleChange={(e) => {
            setSearch(e.target.value);
            debouncedFunction(e);
          }}
          placeholder={"Search In Users"}
        />
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
            items={countriesList?.map((country) => ({
              label: country.countryName,
              value: country.id.toString(),
            }))}
            hasAll
            value={selectedCountry}
            handleChange={handleChangeCountry}
            label={t("list.country")}
            showLabelInsideInput
          />
        </div>
      </ListHeader>
      <div className={styles.tableContainer}>
        <InfiniteScroll
          dataLength={usersList?.data?.length || 0}
          next={() => {
            setPage(page + 1);
            Dispatch(
              getUsersList({
                role: selectedRole,
                search: search,
                country: selectedCountry,
                status: selectedStatus,
                page: page + 1,
              })
            );
          }}
          hasMore={
            usersList
              ? usersList?.current_page < usersList?.last_page
                ? true
                : false
              : false
          }
          loader={<p style={{ textAlign: "center" }}>Loading...</p>}
        >
          <Table
            handleSelectRows={handleSelectRows}
            thead={tableHead}
            tbody={usersTable}
            actions={tableActions}
          />
        </InfiniteScroll>
      </div>
    </ListLayout>
  );
};
export default UsersList;
