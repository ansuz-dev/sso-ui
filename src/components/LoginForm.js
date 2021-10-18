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

import {Email, VisibilityOff, Visibility} from "@mui/icons-material";

import formStyle from "../styles/formStyle.js";

import Card from "./Card.js";
import AppInfo from "./AppInfo.js";

// eslint-disable-next-line max-lines-per-function
const LoginForm = ({
  appId,
  showRegister,
  showForgotPassword,
  onLogin,
  onRegister,
  onForgotPassword,
}) => {
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleEmailChanged = useCallback(
    evt => setEmail(evt.target.value),
    [],
  );
  const handlePasswordChanged = useCallback(
    evt => setPassword(evt.target.value),
    [],
  );
  const handleShowPasswordClicked = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword],
  );
  const handleLoginClicked = useCallback(evt => {
    evt.preventDefault();
    evt.stopPropagation();

    if (processing) return false;

    if (formRef.current.reportValidity()) {
      setProcessing(true);
      // Authenticate to get account info and access token

      const ssoApi = new SSO({
        baseUrl: "https://sso.ansuzdev.com",
        appId,
      });

      ssoApi.login({email, password})
        .then(data => {
          setHasError(false);
          setProcessing(false);

          if (onLogin) {
            onLogin(data);
          }
        })
        .catch(() => {
          setHasError(true);
          setProcessing(false);
        });
    }
  }, [appId, onLogin, email, password, processing]);

  return (
    <form ref={formRef} onSubmit={handleLoginClicked}>
      <Card>
        <Box sx={formStyle.header}>
          <AppInfo appId={appId} />
          <Typography>
            Đăng nhập vào ứng dụng
          </Typography>
        </Box>
        <Box sx={formStyle.cardBody}>
          <TextField
            fullWidth
            required
            size="small"
            label="Email"
            name="email"
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
            name="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            tabIndex={1}
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
            helperText={hasError ? "Email hoặc mật khẩu không đúng" : ""}
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
                onClick={handleLoginClicked}
              >
                {processing ? <CircularProgress size={20} /> : "Đăng nhập"}
              </Button>
            </Grid>
          </Grid>
          {
            (showRegister || showForgotPassword) && (
              <Grid container justifyContent="center" sx={formStyle.links}>
                {
                  showRegister && (
                    <Grid item xs={12} sx={formStyle.link}>
                      <Typography variant="body2" onClick={onRegister}>
                        Chưa có tài khoản ? Tạo tài khoản mới
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

LoginForm.displayName = "LoginForm";

LoginForm.defaultProps = {
  showRegister: true,
  showForgotPassword: true,
  onLogin: null,
  onRegister: null,
  onForgotPassword: null,
};

LoginForm.propTypes = {
  appId: PropTypes.string.isRequired,
  showRegister: PropTypes.bool,
  showForgotPassword: PropTypes.bool,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
  onForgotPassword: PropTypes.func,
};

export default LoginForm;
