import Icon from "../../atoms/Icon";
import styles from "../../../assets/scss/molecules/listHeaderSearch.module.scss";
import { ListHeaderSearchInput } from "../../../app/models/list";

const ListHeaderSearch = ({ placeholder }: ListHeaderSearchInput) => {
  return (
    <div className={styles.searchInput}>
      <input placeholder={placeholder}/>
      <Icon icon={"search"} className={styles.icon} />
    </div>
  );
};
export default ListHeaderSearch;
