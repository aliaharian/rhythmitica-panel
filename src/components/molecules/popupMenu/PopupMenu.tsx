import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { PopupMenuModel } from "../../../app/models/menu";
import { tableActionModel } from "../../../app/models/table";
import styles from "../../../assets/scss/molecules/popupMenu.module.scss";
import Icon from "../../atoms/Icon";

const PopupMenu = ({ open, setOpen, items }: PopupMenuModel) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };
  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClickItem = (item: tableActionModel) => {
    if (item.onClick) {
      item.onClick();
    }
    handleClose();
  };
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickButton}
        className={styles.menuButton}
      >
        <Icon icon="more_vert" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: styles.menu,
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {items.map((item, index) => (
          <MenuItem key={index} onClick={() => handleClickItem(item)}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default PopupMenu;
