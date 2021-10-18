import React from "react";
import {Grid} from "@mui/material";

import LoginForm from "./components/LoginForm.js";
import RegisterForm from "./components/RegisterForm.js";
import ForgotPasswordForm from "./components/ForgotPasswordForm.js";

const App = () => (
  <div>
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <LoginForm appId="9QcX4NDGyA+/OctHKu7fwoE+u5rUhMJp" />
      </Grid>
    </Grid>

    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <RegisterForm
          baseUrl="https://ezy.ansuzdev.com/api/v1/auth/register"
          appId="5sbDgsePcOKcblUoKu1yUWIxBkpV7bJQ"
        />
      </Grid>
    </Grid>

    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <ForgotPasswordForm appId="ewmF3lYlzcc8m3pN5js7tSrf+LArz0c+" />
      </Grid>
    </Grid>
  </div>
);

App.displayName = "App";

export default App;
