import { useState } from "react";
import { tableModel } from "../../../app/models/table";
import styles from "../../../assets/scss/molecules/table.module.scss";
import Checkbox from "../form/Checkbox";
import PopupMenu from "../popupMenu/PopupMenu";
import TableRow from "./TableRow";

const Table = ({
  thead,
  tbody,
  actions,
  multiSelect = true,
  handleSelectRows,
}: tableModel) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const handleCheckItem = (tb: any, e: boolean) => {
    if (e) {
      setCheckedItems([...(checkedItems ?? []), tb.id]);
      if (handleSelectRows) handleSelectRows([...(checkedItems ?? []), tb.id]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== tb.id));
      if (handleSelectRows)
        handleSelectRows(checkedItems.filter((item) => item !== tb.id));
    }
  };
  const handleSelectAll = () => {
    if (checkedItems.length === tbody.length) {
      setCheckedItems([]);
      if (handleSelectRows) handleSelectRows([]);
    } else {
      setCheckedItems(tbody.map((tb) => tb.id));
      if (handleSelectRows) handleSelectRows(tbody.map((tb) => tb.id));
    }
  };
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {multiSelect && (
              <th style={{ width: "4%" }}>
                <Checkbox
                  checked={checkedItems.length === tbody.length}
                  onClick={handleSelectAll}
                />
              </th>
            )}
            {thead.map((th, index) => (
              <th key={index} style={{ width: th.width }}>
                {th.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbody.map((tb, index) => (
            <TableRow
              key={index}
              tb={tb}
              thead={thead}
              multiSelect={multiSelect}
              actions={actions}
              checked={
                checkedItems.findIndex((item: number) => item === tb.id) > -1
              }
              setChecked={(e) => {
                handleCheckItem(tb, e);
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
