import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import SSO from "@ansuzdev/sso";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Email from "@material-ui/icons/Email";
import formStyle from "../styles/formStyle.js";
import Card from "./Card.js";
import AppInfo from "./AppInfo.js";
const useStyles = makeStyles(formStyle); // eslint-disable-next-line max-lines-per-function

const ForgotPasswordForm = ({
  appId,
  showRegister,
  showLogin,
  onLogin,
  onRegister,
  onForgotPassword
}) => {
  const classes = useStyles();
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);
  const [hasError, setHasError] = useState(false);
  const handleEmailChanged = useCallback(evt => setEmail(evt.target.value), []);
  const handleResetClicked = useCallback(evt => {
    evt.preventDefault();
    evt.stopPropagation();
    if (processing) return false;

    if (formRef.current.reportValidity()) {
      setProcessing(true);
      const sso = new SSO({
        baseUrl: "https://sso.ansuzdev.com",
        appId
      }); // Authenticate to get account info and access token

      sso.requestResetPassword({
        email
      }).then(data => {
        setProcessing(false);
        setHasError(false);

        if (onForgotPassword) {
          onForgotPassword(data);
        }
      }).catch(() => {
        setProcessing(false);
        setHasError(true);
      });
    }
  }, [appId, email, onForgotPassword, processing]);
  return /*#__PURE__*/React.createElement("form", {
    ref: formRef,
    onSubmit: handleResetClicked
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/React.createElement(AppInfo, {
    appId: appId
  }), /*#__PURE__*/React.createElement(Typography, null, "H\xE3y nh\u1EADp email c\u1EE7a b\u1EA1n \u0111\u1EC3 th\u1EF1c hi\u1EC7n c\xE0i \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u")), /*#__PURE__*/React.createElement("div", {
    className: classes.cardBody
  }, /*#__PURE__*/React.createElement(TextField, {
    fullWidth: true,
    required: true,
    size: "small",
    label: "Email",
    id: "email",
    type: "email",
    variant: "outlined",
    error: hasError,
    disabled: processing,
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
    },
    helperText: hasError ? "Có lỗi xảy ra. Xin vui lòng thử lại" : ""
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
    onClick: handleResetClicked
  }, processing ? /*#__PURE__*/React.createElement(CircularProgress, {
    size: 20
  }) : "Đặt lại mật khẩu"))), (showRegister || showLogin) && /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justify: "center",
    className: classes.links
  }, showRegister && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    className: classes.link
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    onClick: onRegister
  }, "Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n ? T\u1EA1o t\xE0i kho\u1EA3n m\u1EDBi")), showLogin && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    className: classes.link
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    onClick: onLogin
  }, "\u0110\xE3 c\xF3 t\xE0i kho\u1EA3n ? \u0110\u0103ng nh\u1EADp ngay"))))));
};

ForgotPasswordForm.displayName = "ForgotPasswordForm";
ForgotPasswordForm.defaultProps = {
  showRegister: true,
  showLogin: true,
  onLogin: null,
  onRegister: null,
  onForgotPassword: null
};
ForgotPasswordForm.propTypes = {
  appId: PropTypes.string.isRequired,
  showRegister: PropTypes.bool,
  showLogin: PropTypes.bool,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
  onForgotPassword: PropTypes.func
};
export default ForgotPasswordForm;