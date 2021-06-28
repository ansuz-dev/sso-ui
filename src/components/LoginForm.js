import React, {useCallback, useRef, useState} from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import Email from "@material-ui/icons/Email";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

import Card from "./Card";
import AppInfo from "./AppInfo";

import formStyle from "../styles/formStyle";

const useStyles = makeStyles(formStyle);

// eslint-disable-next-line max-lines-per-function
const LoginForm = props => {
  const classes = useStyles();

  const {
    appId,
    showRegister,
    showForgotPassword,
  } = props;

  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleEmailChanged = useCallback(evt => setEmail(evt.target.value));
  const handlePasswordChanged = useCallback(evt => setPassword(evt.target.value));
  const handleShowPasswordClicked = useCallback(() => setShowPassword(!showPassword));
  const handleLoginClicked = useCallback(evt => {
    evt.preventDefault();
    evt.stopPropagation();

    if (processing) return false;

    if (formRef.current.reportValidity()) {
      setProcessing(true);
      // Authenticate to get account info and access token

      if (props.onLogin) {
        props.onLogin();
      }
    }
  });

  return (
    <form ref={formRef} onSubmit={handleLoginClicked}>
      <Card>
        <div className={classes.header}>
          <AppInfo appId={appId} />
          <Typography>
            Đăng nhập vào ứng dụng
          </Typography>
        </div>
        <div className={classes.cardBody}>
          <TextField
            fullWidth
            required
            size="small"
            label="Email"
            id="email"
            type="email"
            variant="outlined"
            disabled={processing}
            className={classes.textField}
            value={email}
            onChange={handleEmailChanged}
            InputProps={{
              classes: {input: classes.input},
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
            disabled={processing}
            className={classes.textField}
            value={password}
            onChange={handlePasswordChanged}
            InputProps={{
              classes: {input: classes.input},
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
          />
        </div>
        <div className={classes.footer}>
          <Grid container justify="center">
            <Grid item xs={6}>
              <Button
                fullWidth
                disableElevation
                color="primary"
                variant="contained"
                type="submit"
                className={classes.button}
                disabled={processing}
                onClick={handleLoginClicked}
              >
                {processing ? <CircularProgress size={20} /> : "Đăng nhập"}
              </Button>
            </Grid>
          </Grid>
          {
            (showRegister || showForgotPassword) && (
              <Grid container justify="center" className={classes.links}>
                {
                  showRegister && (
                    <Grid item xs={12} className={classes.link}>
                      Chưa có tài khoản ? Tạo tài khoản mới
                    </Grid>
                  )
                }
                {
                  showForgotPassword && (
                    <Grid item xs={12} className={classes.link}>
                      Quên mật khẩu?
                    </Grid>
                  )
                }
              </Grid>
            )
          }
        </div>
      </Card>
    </form>
  );
};

LoginForm.displayName = "LoginForm";

LoginForm.defaultProps = {
  showRegister: true,
  showForgotPassword: true,
  onLogin: null,
};

LoginForm.propTypes = {
  appId: PropTypes.string.isRequired,
  showRegister: PropTypes.bool,
  showForgotPassword: PropTypes.bool,
  onLogin: PropTypes.func,
};

export default LoginForm;
