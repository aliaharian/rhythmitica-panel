import { InputModel } from "@/app/models/form";
import { useAppDispatch } from "@/app/redux/hooks";
import { SearchOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import styles from "@scss/molecules/input.module.scss";
import { useState } from "react";

const Input = ({
  label,
  type = "text",
  formik,
  name,
  max = "100",
  min = "0",
  numberOnly,
  readOnly,
  placeholder,
  multiline = false,
}: InputModel) => {
  const { values, touched, errors, setFieldValue } = formik;
  const [showPass, setShowPass] = useState(false);
  const Dispatch = useAppDispatch();
  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let flag = true;
    if (e.target.value.length > parseInt(max)) {
      flag = false;
    }
    if (numberOnly) {
      var reg = new RegExp("^[0-9]+$");
      if (!reg.test(e.target.value) && e.target.value !== "") {
        flag = false;
      }
    }
    flag && setFieldValue(e.target.name, e.target.value);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl size="small" className={styles.input} variant="outlined">
      {label && (
        <InputLabel
          className={errors[name] && touched[name] && styles.errorHelper}
          htmlFor="outlined-adornment-password"
        >
          {label}
        </InputLabel>
      )}
      <OutlinedInput
        size="small"
        type={type === "password" ? (showPass ? "text" : "password") : type}
        value={values[name]}
        onChange={handleChange}
        className={styles.inputInside}
        error={errors[name] && touched[name]}
        name={name}
        multiline={multiline}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={multiline ? 5 : 1}
        autoComplete={type === "text" ? "off" : ""}
        endAdornment={
          type === "password" && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPass ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
        startAdornment={
          type === "search" && (
            <InputAdornment position="start">
              <IconButton aria-label="toggle password visibility" edge="start">
                <SearchOutlined />
              </IconButton>
            </InputAdornment>
          )
        }
        label={label}
      />
      {errors[name] && touched[name] && (
        <FormHelperText
          className={styles.errorHelper}
          id="component-error-text"
        >
          {errors[name]}
        </FormHelperText>
      )}
    </FormControl>
  );
};
export default Input;
