import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16
  },
  logo: {
    width: 128,
    height: 128
  },
  appName: {
    marginTop: 24
  }
});

const AppInfo = ({
  appId,
  className
}) => {
  const classes = useStyles();
  const [logo, setLogo] = useState("https://image.freepik.com/free-vector/gold-star-logo-template_10135-199.jpg");
  const [appName, setAppName] = useState("Application Name");
  useEffect(() => {
    console.log(appId); // Get application information by appId

    setAppName("Application Name");
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: `${classes.root} ${className}`
  }, /*#__PURE__*/React.createElement(Avatar, {
    className: classes.logo,
    variant: "rounded",
    alt: "Application logo",
    src: logo
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "h4",
    className: classes.appName
  }, appName));
};

AppInfo.displayName = "AppInfo";
AppInfo.defaultProps = {
  className: ""
};
AppInfo.propTypes = {
  appId: PropTypes.string.isRequired,
  className: PropTypes.string
};
export default AppInfo;