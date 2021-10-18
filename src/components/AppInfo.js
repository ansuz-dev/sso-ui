import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import SSO from "@ansuzdev/sso";

import {Box, Avatar, Typography} from "@mui/material";

const AppInfo = ({appId, className}) => {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "16px",
      }}
      className={className}
    >
      <Avatar
        sx={{
          width: "128px",
          height: "128px",
        }}
        variant="rounded"
        alt={appName}
        src={logo}
      >
        {appName}
      </Avatar>
      <Typography variant="h4" sx={{marginTop: "24px"}}>
        {appName}
      </Typography>
    </Box>
  );
};

AppInfo.displayName = "AppInfo";

AppInfo.defaultProps = {className: ""};

AppInfo.propTypes = {
  appId: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AppInfo;
