import React from "react";
import {Grid} from "@material-ui/core";

import LoginForm from "./components/LoginForm.js";
import RegisterForm from "./components/RegisterForm.js";
import ForgotPasswordForm from "./components/ForgotPasswordForm.js";

const App = () => (
  <div>
    <Grid container justify="center">
      <Grid item xs={12} sm={6} md={4}>
        <LoginForm appId="invalid_appid" />
      </Grid>
    </Grid>

    <Grid container justify="center">
      <Grid item xs={12} sm={6} md={4}>
        <RegisterForm
          baseUrl="https://sso.ansuzdev.com"
          appId="ewmF3lYlzcc8m3pN5js7tSrf+LArz0c+"
        />
      </Grid>
    </Grid>

    <Grid container justify="center">
      <Grid item xs={12} sm={6} md={4}>
        <ForgotPasswordForm appId="ewmF3lYlzcc8m3pN5js7tSrf+LArz0c+" />
      </Grid>
    </Grid>
  </div>
);

App.displayName = "App";

export default App;
