import { Outlet } from "react-router-dom";
import { listLayoutProps } from "../../app/models/list";
import styles from "../../assets/scss/templates/listLayout.module.scss";
import ListHeader from "../organisms/listLayout/ListHeader";

const ListLayout = ({
  children,
  title,
  searchPlaceholder,
}: listLayoutProps) => {
  return (
    <div className={styles.listLayout}>
      <div className={styles.header}>
        <ListHeader searchPlaceholder={searchPlaceholder} />
      </div>
      <div className={styles.tableContainer}>{children}</div>
    </div>
  );
};
export default ListLayout;
