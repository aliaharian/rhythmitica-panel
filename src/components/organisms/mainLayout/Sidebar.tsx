import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { menuItem, menuItemChild } from "../../../app/models/menu";
import styles from "../../../assets/scss/organisms/sidebar.module.scss";
import SidebarItem from "../../molecules/sidebar/SidebarItem";

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const [menus, setMenus] = useState<menuItem[]>([
    {
      title: t("menu.dashboard"),
      link: "/dashboard",
      icon: "space_dashboard",
    },
    {
      title: t("menu.profile"),
      link: "/profile",
      icon: "account_circle",
    },
    {
      title: t("menu.users"),
      link: "/users",
      icon: "assignment_ind",
      children: [
        { title: t("menu.users list"), link: "/users/list" },
        { title: t("menu.users roles"), link: "/users/roles" },
      ],
    },
    {
      title: t("menu.private lessons"),
      link: "/privateLessons",
      icon: "person",
      children: [
        { title: t("menu.Private lessons list"), link: "/about" },
        { title: t("menu.reserves list"), link: "/about" },
        { title: t("menu.box"), link: "/about" },
        { title: t("menu.category"), link: "/about" },
      ],
    },
    {
      title: t("menu.blog"),
      link: "/blog",
      icon: "post_add",
      children: [
        { title: t("menu.blog list"), link: "/blog/list" },
        { title: t("menu.blog category"), link: "/blog/category/list" },
      ],
    },
    {
      title: t("menu.events"),
      link: "/privateLessons",
      icon: "people_alt",
      children: [
        { title: t("Private lessons list"), link: "/about" },
        { title: t("reserves list"), link: "/about" },
        { title: t("box"), link: "/about" },
        { title: t("category"), link: "/about" },
      ],
    },
  ]);

  const handleToggleOpenSubmenu = (menu: menuItem) => {
    let tmp = [...menus];
    const initialOpen = menu.isOpen;
    //close all menus
    tmp.forEach((item) => {
      item.isOpen = false;
    });
    //find menu
    const index = tmp.findIndex((item) => item.title === menu.title);
    if (index !== -1) {
      tmp[index].isOpen = !initialOpen;
    }
    setMenus([...tmp]);
  };
  const handleCloseSubmenu = (menu: menuItem) => {
    let tmp = [...menus];
    //close all menus
    tmp.forEach((item) => {
      item.isOpen = false;
    });
    setMenus([...tmp]);
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Typography>{t("app.app name")}</Typography>
      </div>
      <div className={styles.itemsContainer}>
        {menus.map((menu: menuItem, index: number) => (
          <SidebarItem
            key={index}
            title={menu.title}
            link={menu.link}
            icon={menu.icon}
            children={menu.children}
            isOpen={menu.isOpen}
            setIsOpen={() => handleToggleOpenSubmenu(menu)}
            handleCloseMenu={() => handleCloseSubmenu(menu)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
