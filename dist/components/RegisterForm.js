import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import SSO from "@ansuzdev/sso";
import { Box, TextField, Button, IconButton, InputAdornment, Grid, CircularProgress, Typography } from "@mui/material";
import { Person, Email, VisibilityOff, Visibility } from "@mui/icons-material";
import formStyle from "../styles/formStyle.js";
import Card from "./Card.js";
import AppInfo from "./AppInfo.js"; // eslint-disable-next-line max-lines-per-function

const RegisterForm = ({
  baseUrl,
  appId,
  showLogin,
  showForgotPassword,
  onLogin,
  onRegister,
  onForgotPassword
}) => {
  const formRef = useRef();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [hasError, setHasError] = useState(false);
  const handleNameChanged = useCallback(evt => setUserName(evt.target.value), []);
  const handleEmailChanged = useCallback(evt => setEmail(evt.target.value), []);
  const handlePasswordChanged = useCallback(evt => setPassword(evt.target.value), []);
  const handleShowPasswordClicked = useCallback(() => setShowPassword(!showPassword), [showPassword]);
  const handleRegisterClicked = useCallback(evt => {
    evt.preventDefault();
    evt.stopPropagation();
    if (processing) return false;

    if (formRef.current.reportValidity()) {
      setProcessing(true); // Authenticate to get account info and access token

      const ssoApi = new SSO({
        baseUrl,
        appId
      });
      ssoApi.registerOnApp({
        name: userName,
        email,
        password
      }).then(data => {
        setProcessing(false);
        setHasError(false);

        if (onRegister) {
          onRegister(data);
        }
      }).catch(() => {
        setProcessing(false);
        setHasError(true);
      });
    }
  }, [appId, baseUrl, email, onRegister, password, processing, userName]);
  return /*#__PURE__*/React.createElement("form", {
    ref: formRef,
    onSubmit: handleRegisterClicked
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Box, {
    sx: formStyle.header
  }, /*#__PURE__*/React.createElement(AppInfo, {
    appId: appId
  }), /*#__PURE__*/React.createElement(Typography, null, "\u0110\u0103ng k\xFD t\xE0i kho\u1EA3n m\u1EDBi")), /*#__PURE__*/React.createElement(Box, {
    sx: formStyle.cardBody
  }, /*#__PURE__*/React.createElement(TextField, {
    fullWidth: true,
    required: true,
    size: "small",
    label: "H\u1ECD t\xEAn",
    id: "name",
    type: "text",
    variant: "outlined",
    disabled: processing,
    sx: formStyle.textField,
    value: userName,
    onChange: handleNameChanged,
    InputProps: {
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(IconButton, {
        size: "small",
        "aria-label": "User name",
        onClick: null,
        tabIndex: -1
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
    id: "password",
    type: showPassword ? "text" : "password",
    autoComplete: "current-password",
    variant: "outlined",
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
    helperText: hasError ? "Có lỗi xảy ra. Xin vui lòng thử lại" : ""
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
    onClick: handleRegisterClicked
  }, processing ? /*#__PURE__*/React.createElement(CircularProgress, {
    size: 20
  }) : "Tạo tài khoản"))), (showLogin || showForgotPassword) && /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justifyContent: "center",
    sx: formStyle.links
  }, showLogin && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    sx: formStyle.link
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    onClick: onLogin
  }, "\u0110\xE3 c\xF3 t\xE0i kho\u1EA3n ? \u0110\u0103ng nh\u1EADp ngay")), showForgotPassword && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    sx: formStyle.link
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    onClick: onForgotPassword
  }, "Qu\xEAn m\u1EADt kh\u1EA9u?"))))));
};

RegisterForm.displayName = "RegisterForm";
RegisterForm.defaultProps = {
  showLogin: true,
  showForgotPassword: true,
  onLogin: null,
  onRegister: null,
  onForgotPassword: null
};
RegisterForm.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,
  showLogin: PropTypes.bool,
  showForgotPassword: PropTypes.bool,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
  onForgotPassword: PropTypes.func
};
export default RegisterForm;