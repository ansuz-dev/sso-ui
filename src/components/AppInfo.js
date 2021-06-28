import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 128,
    height: 128,
  },
  appName: {marginTop: 24},
});

const AppInfo = ({appId, className}) => {
  const classes = useStyles();

  const [logo, setLogo] = useState("https://image.freepik.com/free-vector/gold-star-logo-template_10135-199.jpg");
  const [appName, setAppName] = useState("Application Name");

  useEffect(() => {
    console.log(appId);

    // Get application information by appId
    setAppName("Application Name");
  }, []);

  return (
    <div className={`${classes.root} ${className}`}>
      <Avatar
        className={classes.logo}
        variant="rounded"
        alt="Application logo"
        src={logo}
      />
      <Typography variant="h4" className={classes.appName}>
        {appName}
      </Typography>
    </div>
  );
};

AppInfo.displayName = "AppInfo";

AppInfo.defaultProps = {className: ""};

AppInfo.propTypes = {
  appId: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AppInfo;
