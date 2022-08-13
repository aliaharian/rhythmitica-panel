import Icon from "../../atoms/Icon";
import styles from "../../../assets/scss/molecules/listHeaderSearch.module.scss";
import { ListHeaderSearchInput } from "../../../app/models/list";

const ListHeaderSearch = ({ placeholder , handleChange , value }: ListHeaderSearchInput) => {
  return (
    <div className={styles.searchInput}>
      <input value={value} placeholder={placeholder} onChange={handleChange}/>
      <Icon icon={"search"} className={styles.icon} />
    </div>
  );
};
export default ListHeaderSearch;
