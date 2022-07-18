import { tableModel } from "../../../app/models/table";
import styles from "../../../assets/scss/molecules/table.module.scss";

const Table = ({ thead, tbody, actions, multiSelect = true }: tableModel) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <th>
            <td style={{ width: 38 }}>
              {multiSelect && <input type="checkbox" />}
            </td>
            {thead.map((th, index) => (
              <td key={index} style={{ width: th.width }}>
                {th.label}
              </td>
            ))}
          </th>
        </thead>
        <tbody>
          <tr>
            {tbody.map((tb, index) => (
              <td key={index}>
                {tb.label}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
