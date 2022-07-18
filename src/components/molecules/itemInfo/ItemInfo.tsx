import { Typography } from "@mui/material";
import styles from "../../../assets/scss/molecules/itemInfo.module.scss";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { menuItem } from "../../../app/models/menu";
import React, { useEffect, useState } from "react";
import { ItemInfoModel } from "../../../app/models/list";
import RhAvatar from "../../atoms/RhAvatar";

const ItemInfo = ({ image, title, subtitle }: ItemInfoModel) => {
  return (
    <div className={clsx(styles.itemInfoContainer)}>
      <RhAvatar image={image || false} content={title.substring(0, 1)} />
      <Typography>{title}</Typography>
      <Typography>{subtitle}</Typography>
    </div>
  );
};

export default ItemInfo;
