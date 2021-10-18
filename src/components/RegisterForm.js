import React, {useCallback, useRef, useState} from "react";
import PropTypes from "prop-types";
import SSO from "@ansuzdev/sso";

import {
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Grid,
  CircularProgress,
  Typography,
} from "@mui/material";

import {Person, Email, VisibilityOff, Visibility} from "@mui/icons-material";

import formStyle from "../styles/formStyle.js";

import Card from "./Card.js";
import AppInfo from "./AppInfo.js";

// eslint-disable-next-line max-lines-per-function
const RegisterForm = ({
  baseUrl,
  appId,
  showLogin,
  showForgotPassword,
  onLogin,
  onRegister,
  onForgotPassword,
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
  const handleShowPasswordClicked = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword],
  );

  const handleRegisterClicked = useCallback(evt => {
    evt.preventDefault();
    evt.stopPropagation();

    if (processing) return false;

    if (formRef.current.reportValidity()) {
      setProcessing(true);

      // Authenticate to get account info and access token
      const ssoApi = new SSO({baseUrl, appId});

      ssoApi.registerOnApp({name: userName, email, password})
        .then(data => {
          setProcessing(false);
          setHasError(false);

          if (onRegister) {
            onRegister(data);
          }
        })
        .catch(() => {
          setProcessing(false);
          setHasError(true);
        });
    }
  }, [appId, baseUrl, email, onRegister, password, processing, userName]);

  return (
    <form ref={formRef} onSubmit={handleRegisterClicked}>
      <Card>
        <Box sx={formStyle.header}>
          <AppInfo appId={appId} />
          <Typography>
            Đăng ký tài khoản mới
          </Typography>
        </Box>
        <Box sx={formStyle.cardBody}>
          <TextField
            fullWidth
            required
            size="small"
            label="Họ tên"
            id="name"
            type="text"
            variant="outlined"
            disabled={processing}
            sx={formStyle.textField}
            value={userName}
            onChange={handleNameChanged}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    aria-label="User name"
                    onClick={null}
                    tabIndex={-1}
                  >
                    <Person />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            required
            size="small"
            label="Email"
            id="email"
            type="email"
            variant="outlined"
            error={hasError}
            disabled={processing}
            sx={formStyle.textField}
            value={email}
            onChange={handleEmailChanged}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    aria-label="Email"
                    onClick={null}
                    tabIndex={-1}
                  >
                    <Email />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            required
            size="small"
            label="Mật khẩu"
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            variant="outlined"
            error={hasError}
            disabled={processing}
            sx={formStyle.textField}
            value={password}
            onChange={handlePasswordChanged}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    aria-label="toggle password visibility"
                    onClick={handleShowPasswordClicked}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            helperText={hasError ? "Có lỗi xảy ra. Xin vui lòng thử lại" : ""}
          />
        </Box>
        <Box sx={formStyle.footer}>
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <Button
                fullWidth
                disableElevation
                color="primary"
                variant="contained"
                type="submit"
                sx={formStyle.button}
                disabled={processing}
                onClick={handleRegisterClicked}
              >
                {processing ? <CircularProgress size={20} /> : "Tạo tài khoản"}
              </Button>
            </Grid>
          </Grid>
          {
            (showLogin || showForgotPassword) && (
              <Grid container justifyContent="center" sx={formStyle.links}>
                {
                  showLogin && (
                    <Grid item xs={12} sx={formStyle.link}>
                      <Typography variant="body2" onClick={onLogin}>
                        Đã có tài khoản ? Đăng nhập ngay
                      </Typography>
                    </Grid>
                  )
                }
                {
                  showForgotPassword && (
                    <Grid item xs={12} sx={formStyle.link}>
                      <Typography variant="body2" onClick={onForgotPassword}>
                        Quên mật khẩu?
                      </Typography>
                    </Grid>
                  )
                }
              </Grid>
            )
          }
        </Box>
      </Card>
    </form>
  );
};

RegisterForm.displayName = "RegisterForm";

RegisterForm.defaultProps = {
  showLogin: true,
  showForgotPassword: true,
  onLogin: null,
  onRegister: null,
  onForgotPassword: null,
};

RegisterForm.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,
  showLogin: PropTypes.bool,
  showForgotPassword: PropTypes.bool,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
  onForgotPassword: PropTypes.func,
};

export default RegisterForm;
