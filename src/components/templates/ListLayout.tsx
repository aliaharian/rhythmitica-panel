import { Outlet } from "react-router-dom";
import { listLayoutProps } from "../../app/models/list";
import styles from "../../assets/scss/templates/listLayout.module.scss";
import ListHeader from "../organisms/listLayout/ListHeader";

const ListLayout = ({
  children,
}: listLayoutProps) => {
  return <div className={styles.listLayout}>{children}</div>;
};
export default ListLayout;
