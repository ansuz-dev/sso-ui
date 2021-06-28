import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, InputAdornment, IconButton, Grid } from "@material-ui/core";
import { Email, VisibilityOff } from "@material-ui/icons";
import Card from "./card";
import CardBody from "./cardbody";
const useStyles = makeStyles({
  textField: {
    "marginBottom": 16,
    "&:last-child": {
      marginBottom: 0
    }
  },
  inputAdornmentIcon: {
    marginRight: 12,
    color: "grey"
  },
  footer: {
    marginTop: 24
  }
}); // eslint-disable-next-line max-lines-per-function

const LoginForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: `${classes.cardHeader} ${classes.textCenter}`,
    color: "rose"
  }, /*#__PURE__*/React.createElement("h4", {
    className: classes.cardTitle
  }, "Log in")), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(TextField, {
    fullWidth: true,
    label: "Email",
    id: "email",
    variant: "outlined",
    className: classes.textField,
    InputProps: {
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(Email, {
        className: classes.inputAdornmentIcon
      }))
    }
  }), /*#__PURE__*/React.createElement(TextField, {
    fullWidth: true,
    label: "Password",
    id: "password",
    type: "password",
    autoComplete: "current-password",
    variant: "outlined",
    className: classes.textField,
    InputProps: {
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(IconButton, {
        "aria-label": "toggle password visibility"
      }, /*#__PURE__*/React.createElement(VisibilityOff, null)))
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.footer
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justify: "center"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 4
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    color: "primary",
    variant: "contained",
    disableElevation: true
  }, "Login"))))));
};

LoginForm.displayName = "LoginForm";
export default LoginForm;