import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

import {TextField, Button, InputAdornment, IconButton, Grid} from "@material-ui/core";
import {Email, VisibilityOff} from "@material-ui/icons";

import Card from "./card";
import CardBody from "./cardbody";

const useStyles = makeStyles({
  textField: {
    "marginBottom": 16,
    "&:last-child": {marginBottom: 0},
  },
  inputAdornmentIcon: {
    marginRight: 12,
    color: "grey",
  },
  footer: {marginTop: 24},
});

// eslint-disable-next-line max-lines-per-function
const LoginForm = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <Card>
        <div
          className={`${classes.cardHeader} ${classes.textCenter}`}
          color="rose"
        >
          <h4 className={classes.cardTitle}>Log in</h4>
        </div>
        <CardBody>
          <TextField
            fullWidth
            label="Email"
            id="email"
            variant="outlined"
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Email className={classes.inputAdornmentIcon} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Password"
            id="password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                  >
                    <VisibilityOff />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </CardBody>
        <div className={classes.footer}>
          <Grid container justify="center">
            <Grid item xs={4}>
              <Button
                fullWidth
                color="primary"
                variant="contained"
                disableElevation
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </div>
      </Card>
    </form>
  );
};

LoginForm.displayName = "LoginForm";

export default LoginForm;
