import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Person from "@material-ui/icons/Person";
import Email from "@material-ui/icons/Email";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import Card from "./Card";
import AppInfo from "./AppInfo";
import formStyle from "../styles/formStyle";
const useStyles = makeStyles(formStyle); // eslint-disable-next-line max-lines-per-function

const RegisterForm = props => {
  const classes = useStyles();
  const {
    appId,
    showLogin,
    showForgotPassword
  } = props;
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [processing, setProcessing] = useState(false);
  const handleNameChanged = useCallback(evt => setUserName(evt.target.value));
  const handleEmailChanged = useCallback(evt => setEmail(evt.target.value));
  const handlePasswordChanged = useCallback(evt => setPassword(evt.target.value));
  const handleShowPasswordClicked = useCallback(() => setShowPassword(!showPassword));
  const handleRegisterClicked = useCallback(evt => {
    evt.preventDefault();
    evt.stopPropagation();
    if (processing) return false;
    setProcessing(true); // Authenticate to get account info and access token

    if (props.onRegister) {
      props.onRegister();
    }
  });
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleRegisterClicked
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/React.createElement(AppInfo, {
    appId: appId
  }), /*#__PURE__*/React.createElement(Typography, null, "\u0110\u0103ng k\xFD t\xE0i kho\u1EA3n m\u1EDBi")), /*#__PURE__*/React.createElement("div", {
    className: classes.cardBody
  }, /*#__PURE__*/React.createElement(TextField, {
    fullWidth: true,
    required: true,
    size: "small",
    label: "H\u1ECD t\xEAn",
    id: "name",
    type: "text",
    variant: "outlined",
    className: classes.textField,
    value: userName,
    onChange: handleNameChanged,
    InputProps: {
      classes: {
        input: classes.input
      },
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(IconButton, {
        size: "small",
        "aria-label": "User name",
        onClick: null
      }, /*#__PURE__*/React.createElement(Person, null)))
    }
  }), /*#__PURE__*/React.createElement(TextField, {
    fullWidth: true,
    required: true,
    size: "small",
    label: "Email",
    id: "email",
    type: "email",
    variant: "outlined",
    className: classes.textField,
    value: email,
    onChange: handleEmailChanged,
    InputProps: {
      classes: {
        input: classes.input
      },
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(IconButton, {
        size: "small",
        "aria-label": "Email",
        onClick: null
      }, /*#__PURE__*/React.createElement(Email, null)))
    }
  }), /*#__PURE__*/React.createElement(TextField, {
    fullWidth: true,
    required: true,
    size: "small",
    label: "M\u1EADt kh\u1EA9u",
    id: "password",
    type: showPassword ? "text" : "password",
    autoComplete: "current-password",
    variant: "outlined",
    className: classes.textField,
    value: password,
    onChange: handlePasswordChanged,
    InputProps: {
      classes: {
        input: classes.input
      },
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(IconButton, {
        size: "small",
        "aria-label": "toggle password visibility",
        onClick: handleShowPasswordClicked
      }, showPassword ? /*#__PURE__*/React.createElement(Visibility, null) : /*#__PURE__*/React.createElement(VisibilityOff, null)))
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.footer
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justify: "center"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 6
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    disableElevation: true,
    color: "primary",
    variant: "contained",
    type: "submit",
    className: classes.button,
    disabled: processing,
    onClick: handleRegisterClicked
  }, processing ? /*#__PURE__*/React.createElement(CircularProgress, {
    size: 20
  }) : "Tạo tài khoản"))), (showLogin || showForgotPassword) && /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justify: "center",
    className: classes.links
  }, showLogin && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    className: classes.link
  }, "\u0110\xE3 c\xF3 t\xE0i kho\u1EA3n ? \u0110\u0103ng nh\u1EADp ngay"), showForgotPassword && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    className: classes.link
  }, "Qu\xEAn m\u1EADt kh\u1EA9u")))));
};

RegisterForm.displayName = "RegisterForm";
RegisterForm.defaultProps = {
  showLogin: true,
  showForgotPassword: true,
  onRegister: null
};
RegisterForm.propTypes = {
  appId: PropTypes.string.isRequired,
  showLogin: PropTypes.bool,
  showForgotPassword: PropTypes.bool,
  onRegister: PropTypes.func
};
export default RegisterForm;