import { useState } from "react";
import { tableRowModel } from "../../../app/models/table";
import Checkbox from "../form/Checkbox";
import PopupMenu from "../popupMenu/PopupMenu";

const TableRow = ({
  multiSelect,
  thead,
  tb,
  actions,
  checked,
  setChecked,
}: tableRowModel) => {
  const [actionsOpen, setActionsOpen] = useState(false);
  return (
    <tr>
      {multiSelect && (
        <td style={{ width: "4%" }}>
          <Checkbox checked={checked} onClick={() => setChecked(!checked)} />
        </td>
      )}
      {thead.map((th, index) => (
        <td width={th.width} key={index}>
          {tb[th.name]}
        </td>
      ))}
      {actions && (
        <td style={{ width: "4%" }}>
          <PopupMenu
            open={actionsOpen}
            setOpen={(e) => setActionsOpen(e)}
            items={actions}
            rowItem={tb}
          />
        </td>
      )}
    </tr>
  );
};
export default TableRow;
