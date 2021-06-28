import React from "react";
import {Grid} from "@material-ui/core";

import LoginForm from "./components/loginform";

const App = () => (
  <div>
    <Grid container justify="center">
      <Grid xs={12} sm={6} md={4}>
        <LoginForm />
      </Grid>
    </Grid>
  </div>
);

App.displayName = "App";

export default App;
