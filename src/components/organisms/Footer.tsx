import { Typography } from "@mui/material";
import styles from "../../assets/scss/organisms/footer.module.scss";

const Footer = () => {
  return <div className={styles.footer}>
    <Typography className={styles.copyright}>Copyright © 2020 Rhythmitica</Typography>
  </div>;
};

export default Footer;
