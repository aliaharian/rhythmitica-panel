import Icon from "../../atoms/Icon";
import styles from "../../../assets/scss/molecules/dropdown.module.scss";
import { DropdownModel } from "../../../app/models/form";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Dropdown = ({
  items,
  label,
  value,
  handleChange,
  hasAll,
  showLabelInsideInput,
  formMode,
  buttonMode,
}: DropdownModel) => {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(styles.dropdownContainer, formMode && styles.formMode , buttonMode && styles.buttonMode)}
    >
      <FormControl size="small">
        {!showLabelInsideInput && (
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        )}
        <Select
          size="small"
          value={value}
          label={!showLabelInsideInput ? label : null}
          onChange={handleChange}
          variant="outlined"
          MenuProps={{
            classes: {
              paper: styles.dropdownMenu,
            },
          }}
          IconComponent={() => {
            return buttonMode ? (
              <></>
            ) : (
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-hfutr2-MuiSvgIcon-root-MuiSelect-icon"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowDropDownIcon"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            );
          }}
          renderValue={(value: any) => {
            return buttonMode ? (
              <>
                <span className={styles.inputValue}></span>
                {items?.find((val) => val.value === value)?.label ||
                  t("form.all")}
              </>
            ) : showLabelInsideInput ? (
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
