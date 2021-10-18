function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const CardBody = props => {
  const {
    children,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Box, _extends({
    sx: {
      flex: "1 1 auto",
      WebkitBoxFlex: "1",
      position: "relative"
    }
  }, rest), children);
};

CardBody.displayName = "CardBody";
CardBody.propTypes = {
  children: PropTypes.node.isRequired
};
export default CardBody;