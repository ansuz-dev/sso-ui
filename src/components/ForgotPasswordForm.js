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

import {Email} from "@mui/icons-material";

import formStyle from "../styles/formStyle.js";

import Card from "./Card.js";
import AppInfo from "./AppInfo.js";

// eslint-disable-next-line max-lines-per-function
const ForgotPasswordForm = ({
  appId,
  showRegister,
  showLogin,
  onLogin,
  onRegister,
  onForgotPassword,
}) => {
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
        appId,
      });

      // Authenticate to get account info and access token
      sso.requestResetPassword({email})
        .then(data => {
          setProcessing(false);
          setHasError(false);

          if (onForgotPassword) {
            onForgotPassword(data);
          }
        })
        .catch(() => {
          setProcessing(false);
          setHasError(true);
        });
    }
  }, [appId, email, onForgotPassword, processing]);

  return (
    <form ref={formRef} onSubmit={handleResetClicked}>
      <Card>
        <Box sx={formStyle.header}>
          <AppInfo appId={appId} />
          <Typography>
            Hãy nhập email của bạn để thực hiện cài đặt lại mật khẩu
          </Typography>
        </Box>
        <Box sx={formStyle.cardBody}>
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
                  >
                    <Email />
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
                onClick={handleResetClicked}
              >
                {processing ? <CircularProgress size={20} /> : "Đặt lại mật khẩu"}
              </Button>
            </Grid>
          </Grid>
          {
            (showRegister || showLogin) && (
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
                  showLogin && (
                    <Grid item xs={12} sx={formStyle.link}>
                      <Typography variant="body2" onClick={onLogin}>
                        Đã có tài khoản ? Đăng nhập ngay
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

ForgotPasswordForm.displayName = "ForgotPasswordForm";

ForgotPasswordForm.defaultProps = {
  showRegister: true,
  showLogin: true,
  onLogin: null,
  onRegister: null,
  onForgotPassword: null,
};

ForgotPasswordForm.propTypes = {
  appId: PropTypes.string.isRequired,
  showRegister: PropTypes.bool,
  showLogin: PropTypes.bool,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
  onForgotPassword: PropTypes.func,
};

export default ForgotPasswordForm;
