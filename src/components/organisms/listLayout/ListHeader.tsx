import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { ListHeaderProps } from "../../../app/models/list";
import styles from "../../../assets/scss/organisms/listHeader.module.scss";
import Icon from "../../atoms/Icon";
import RhButton from "../../molecules/form/RhButton";

const ListHeader = ({
  children,
  deleteMode,
  selectedItems,
  handleClick,
  label,
  icon = "add",
}: ListHeaderProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.listHeader}>
      <div className={styles.filtersContiner}>{children}</div>
      <div className={clsx(styles.actionsContainer , deleteMode && styles.deleteContainer)}>
        {deleteMode ? (
          <RhButton
            label={t("list.items selected", { number: selectedItems })}
            size="sm"
            onClick={handleClick}
            icon={'delete'}
          />
        ) : (
          <RhButton label={label} size="sm" onClick={handleClick} icon={icon} />
        )}
      </div>
    </div>
  );
};
export default ListHeader;
