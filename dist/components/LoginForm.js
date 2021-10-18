import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import SSO from "@ansuzdev/sso";
import { Box, TextField, Button, IconButton, InputAdornment, Grid, CircularProgress, Typography } from "@mui/material";
import { Email, VisibilityOff, Visibility } from "@mui/icons-material";
import formStyle from "../styles/formStyle.js";
import Card from "./Card.js";
import AppInfo from "./AppInfo.js"; // eslint-disable-next-line max-lines-per-function

const LoginForm = ({
  appId,
  showRegister,
  showForgotPassword,
  onLogin,
  onRegister,
  onForgotPassword
}) => {
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [hasError, setHasError] = useState(false);
  const handleEmailChanged = useCallback(evt => setEmail(evt.target.value), []);
  const handlePasswordChanged = useCallback(evt => setPassword(evt.target.value), []);
  const handleShowPasswordClicked = useCallback(() => setShowPassword(!showPassword), [showPassword]);
  const handleLoginClicked = useCallback(evt => {
    evt.preventDefault();
    evt.stopPropagation();
    if (processing) return false;

    if (formRef.current.reportValidity()) {
      setProcessing(true); // Authenticate to get account info and access token

      const ssoApi = new SSO({
        baseUrl: "https://sso.ansuzdev.com",
        appId
      });
      ssoApi.login({
        email,
        password
      }).then(data => {
        setHasError(false);
        setProcessing(false);

        if (onLogin) {
          onLogin(data);
        }
      }).catch(() => {
        setHasError(true);
        setProcessing(false);
      });
    }
  }, [appId, onLogin, email, password, processing]);
  return /*#__PURE__*/React.createElement("form", {
    ref: formRef,
    onSubmit: handleLoginClicked
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Box, {
    sx: formStyle.header
  }, /*#__PURE__*/React.createElement(AppInfo, {
    appId: appId
  }), /*#__PURE__*/React.createElement(Typography, null, "\u0110\u0103ng nh\u1EADp v\xE0o \u1EE9ng d\u1EE5ng")), /*#__PURE__*/React.createElement(Box, {
    sx: formStyle.cardBody
  }, /*#__PURE__*/React.createElement(TextField, {
    fullWidth: true,
    required: true,
    size: "small",
    label: "Email",
    name: "email",
    type: "email",
    variant: "outlined",
    error: hasError,
    disabled: processing,
    sx: formStyle.textField,
    value: email,
    onChange: handleEmailChanged,
    InputProps: {
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(IconButton, {
        size: "small",
        "aria-label": "Email",
        onClick: null,
        tabIndex: -1
      }, /*#__PURE__*/React.createElement(Email, null)))
    }
  }), /*#__PURE__*/React.createElement(TextField, {
    fullWidth: true,
    required: true,
    size: "small",
    label: "M\u1EADt kh\u1EA9u",
    name: "password",
    type: showPassword ? "text" : "password",
    variant: "outlined",
    tabIndex: 1,
    error: hasError,
    disabled: processing,
    sx: formStyle.textField,
    value: password,
    onChange: handlePasswordChanged,
    InputProps: {
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(IconButton, {
        size: "small",
        "aria-label": "toggle password visibility",
        onClick: handleShowPasswordClicked
      }, showPassword ? /*#__PURE__*/React.createElement(Visibility, null) : /*#__PURE__*/React.createElement(VisibilityOff, null)))
    },
    helperText: hasError ? "Email hoặc mật khẩu không đúng" : ""
  })), /*#__PURE__*/React.createElement(Box, {
    sx: formStyle.footer
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 6
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    disableElevation: true,
    color: "primary",
    variant: "contained",
    type: "submit",
    sx: formStyle.button,
    disabled: processing,
    onClick: handleLoginClicked
  }, processing ? /*#__PURE__*/React.createElement(CircularProgress, {
    size: 20
  }) : "Đăng nhập"))), (showRegister || showForgotPassword) && /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justifyContent: "center",
    sx: formStyle.links
  }, showRegister && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    sx: formStyle.link
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    onClick: onRegister
  }, "Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n ? T\u1EA1o t\xE0i kho\u1EA3n m\u1EDBi")), showForgotPassword && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    sx: formStyle.link
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    onClick: onForgotPassword
  }, "Qu\xEAn m\u1EADt kh\u1EA9u?"))))));
};

LoginForm.displayName = "LoginForm";
LoginForm.defaultProps = {
  showRegister: true,
  showForgotPassword: true,
  onLogin: null,
  onRegister: null,
  onForgotPassword: null
};
LoginForm.propTypes = {
  appId: PropTypes.string.isRequired,
  showRegister: PropTypes.bool,
  showForgotPassword: PropTypes.bool,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
  onForgotPassword: PropTypes.func
};
export default LoginForm;