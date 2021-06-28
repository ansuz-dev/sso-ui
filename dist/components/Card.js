function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    border: "0",
    padding: "20px",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#ffffff",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  }
});

const Card = props => {
  const classes = useStyles();
  const {
    children,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes.root
  }, rest), children);
};

Card.displayName = "Card";
Card.propTypes = {
  children: PropTypes.node.isRequired
};
export default Card;