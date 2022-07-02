import { ListHeaderProps } from "../../../app/models/list";
import styles from "../../../assets/scss/organisms/listHeader.module.scss";
import ListHeaderSearch from "../../molecules/listHeader/ListHeaderSearch";

const ListHeader = ({ searchPlaceholder }: ListHeaderProps) => {
  return (
    <div className={styles.listHeader}>
      <div className={styles.filtersContiner}>
        <ListHeaderSearch placeholder={searchPlaceholder}/>
      </div>
      <div className={styles.actionsContainer}></div>
    </div>
  );
};
export default ListHeader;