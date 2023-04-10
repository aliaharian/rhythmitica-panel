import { Typography } from "@mui/material";
import styles from "../../../assets/scss/molecules/sidebarItem.module.scss";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { menuItem } from "../../../app/models/menu";
import React, { useEffect, useState } from "react";

const SidebarItem = ({
  icon,
  title,
  link = "#",
  children,
  isOpen,
  setIsOpen = () => {},
  handleCloseMenu = () => {},
}: menuItem) => {
  const location = useLocation();
  const [childrenHeight, setChildrenHeight] = useState(0);
  const [selected, setSelected] = useState(location.pathname.includes(link));
  useEffect(() => {
    setSelected(location.pathname.includes(link));
    handleCloseMenu();
  }, [location.pathname]);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (children) {
      e.preventDefault();
      setIsOpen();
    }
  };
  useEffect(() => {
    if (children && (selected || isOpen)) {
      setChildrenHeight(children.length * 42);
    } else {
      setChildrenHeight(0);
    }
  }, [isOpen, selected]);

  return (
    <div
      className={clsx(
        styles.sidebarItem,
        (selected || isOpen) && styles.sidebarItemSelected
      )}
    >
      <Link onClick={handleClick} to={link} className={styles.item}>
        <div className={styles.iconContainer}>
          <span className="material-icons-outlined">{icon}</span>
        </div>
        <Typography>{title}</Typography>
      </Link>
      {children && (
        <div className={styles.children} style={{ height: childrenHeight }}>
          {children.map((child, index) => {
            const childSelected = location.pathname.includes(child.link || "#");
            return (
              <Link
                key={index}
                className={clsx(
                  styles.itemChild,
                  childSelected && styles.childSelected
                )}
                to={child.link || "#"}
              >
                <Typography>{child.title}</Typography>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
