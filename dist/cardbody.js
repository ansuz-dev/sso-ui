function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative"
  }
});

const CardBody = props => {
  const classes = useStyles();
  const {
    children,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes.root
  }, rest), children);
};

CardBody.displayName = "Card";
CardBody.propTypes = {
  children: PropTypes.node.isRequired
};
export default CardBody;