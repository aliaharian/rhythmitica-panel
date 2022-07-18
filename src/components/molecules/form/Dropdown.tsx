import Icon from "../../atoms/Icon";
import styles from "../../../assets/scss/molecules/dropdown.module.scss";
import { DropdownModel } from "../../../app/models/form";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useTranslation } from "react-i18next";

const Dropdown = ({
  items,
  label,
  value,
  handleChange,
  hasAll,
  showLabelInsideInput,
}: DropdownModel) => {
  const { t } = useTranslation();

  return (
    <div className={styles.dropdownContainer}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        {!showLabelInsideInput && (
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        )}
        <Select
          value={value}
          label={!showLabelInsideInput ? label : null}
          onChange={handleChange}
          variant="outlined"
          MenuProps={{
            classes: {
              paper: styles.dropdownMenu,
            },
          }}
          renderValue={(value: any) => {
            return showLabelInsideInput ? (
              <>
                <span className={styles.inputValue}>{label} :</span>
                {items?.find((val) => val.value === value)?.label ||
                  t("form.all")}
              </>
            ) : (
              <span className={styles.inputValue}>
                {items?.find((val) => val.value === value)?.label ||
                  t("form.all")}
              </span>
            );
          }}
        >
          {hasAll && <MenuItem value={"all"}>{t("form.all")}</MenuItem>}

          {items?.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default Dropdown;
