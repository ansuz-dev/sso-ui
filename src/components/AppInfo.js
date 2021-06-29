import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import SSO from "@ansuzdev/sso";

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

  const [logo, setLogo] = useState();
  const [appName, setAppName] = useState("Application Name");

  useEffect(() => {
    const sso = new SSO({
      baseUrl: "https://sso.ansuzdev.com",
      appId,
    });

    sso.getAppInfo()
      .then(data => {
        // Get application information by appId
        setAppName(data.name);
        setLogo(data.logo);
      })
      .catch(() => {
        setAppName("404");
      });
  }, [appId]);

  return (
    <div className={`${classes.root} ${className}`}>
      <Avatar
        className={classes.logo}
        variant="rounded"
        alt={appName}
        src={logo}
      >
        {appName}
      </Avatar>
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
