import React from "react";
import {Grid} from "@material-ui/core";

import {LoginForm, RegisterForm, ForgotPasswordForm} from "./components";

const App = () => (
  <div>
    <Grid container justify="center">
      <Grid xs={12} sm={6} md={4}>
        <LoginForm appId="hello_word" />
      </Grid>
    </Grid>

    <Grid container justify="center">
      <Grid xs={12} sm={6} md={4}>
        <RegisterForm appId="hello_word" />
      </Grid>
    </Grid>

    <Grid container justify="center">
      <Grid xs={12} sm={6} md={4}>
        <ForgotPasswordForm appId="hello_word" />
      </Grid>
    </Grid>
  </div>
);

App.displayName = "App";

export default App;
