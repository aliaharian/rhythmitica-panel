import { Typography } from "@mui/material";
import styles from "../../assets/scss/molecules/sidebarItem.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { style } from "@mui/system";
import { menuItem } from "../../app/models/menu";
import React, { useEffect, useState } from "react";

const SidebarItem = ({
  icon,
  title,
  link = "#",
  selected = false,
  children,
  isOpen,
  setIsOpen = () => {},
}: menuItem) => {
  const [childrenHeight, setChildrenHeight] = useState(0);
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
    <Link
      to={link}
      onClick={handleClick}
      className={clsx(
        styles.sidebarItem,
        (selected || isOpen) && styles.sidebarItemSelected
      )}
    >
      <div className={styles.item}>
        <div className={styles.iconContainer}>
          <span className="material-icons-outlined">{icon}</span>
        </div>
        <Typography>{title}</Typography>
      </div>
      {children && (
        <div className={styles.children} style={{ height: childrenHeight }}>
          {children.map((child, index) => (
            <Link
              className={styles.itemChild}
              key={index}
              to={child.link || "#"}
            >
              <Typography>{child.title}</Typography>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
};

export default SidebarItem;
