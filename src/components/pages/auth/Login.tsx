import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import { LoginFormInitialValues } from "../../../app/models/auth";
import { login } from "../../../app/redux/users/actions";
import { useAppDispatch } from "../../../app/redux/hooks";

const Login = () => {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column" as "column",
    width: "100%",
    marginTop: 30,
    height: 200,
  };
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const initialValues: LoginFormInitialValues = { email: "", password: "" };
  const Dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: initialValues,
    // validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
      Dispatch(login(values))
    },
  });
  return (
    <div>
      <form style={styles} onSubmit={formik.handleSubmit}>
        <TextField
          id="outlined-basic"
          value={username}
          name="email"
          onChange={(e) => {
            setUsername(e.target.value);
            formik.setFieldValue("email", e.target.value);
          }}
          label="username"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            formik.setFieldValue("password", e.target.value);
          }}
          label="password"
          name="password"
          variant="outlined"
          type={"password"}
        />{" "}
        <Button color="primary" type="submit" variant="contained">
          login
        </Button>
      </form>
    </div>
  );
};

export default Login;
