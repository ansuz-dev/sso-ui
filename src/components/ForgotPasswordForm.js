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

import Card from "./Card";
import AppInfo from "./AppInfo";

import formStyle from "../styles/formStyle";

const useStyles = makeStyles(formStyle);

// eslint-disable-next-line max-lines-per-function
const ForgotPasswordForm = props => {
  const classes = useStyles();

  const {
    appId,
    showRegister,
    showLogin,
  } = props;

  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleEmailChanged = useCallback(evt => setEmail(evt.target.value));

  const handleResetClicked = useCallback(evt => {
    evt.preventDefault();
    evt.stopPropagation();

    if (processing) return false;

    if (formRef.current.reportValidity()) {
      setProcessing(true);

      // Authenticate to get account info and access token

      if (props.onResetPassword) {
        props.onResetPassword();
      }
    }
  });

  return (
    <form ref={formRef} onSubmit={handleResetClicked}>
      <Card>
        <div className={classes.header}>
          <AppInfo appId={appId} />
          <Typography>
            Hãy nhập email của bạn để thực hiện cài đặt lại mật khẩu
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
                onClick={handleResetClicked}
              >
                {processing ? <CircularProgress size={20} /> : "Đặt lại mật khẩu"}
              </Button>
            </Grid>
          </Grid>
          {
            (showRegister || showLogin) && (
              <Grid container justify="center" className={classes.links}>
                {
                  showRegister && (
                    <Grid item xs={12} className={classes.link}>
                      Chưa có tài khoản ? Tạo tài khoản mới
                    </Grid>
                  )
                }
                {
                  showLogin && (
                    <Grid item xs={12} className={classes.link}>
                      Đã có tài khoản ? Đăng nhập ngay
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

ForgotPasswordForm.displayName = "ForgotPasswordForm";

ForgotPasswordForm.defaultProps = {
  showRegister: true,
  showLogin: true,
  onResetPassword: null,
};

ForgotPasswordForm.propTypes = {
  appId: PropTypes.string.isRequired,
  showRegister: PropTypes.bool,
  showLogin: PropTypes.bool,
  onResetPassword: PropTypes.func,
};

export default ForgotPasswordForm;
