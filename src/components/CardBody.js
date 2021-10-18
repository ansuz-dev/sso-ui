import React from "react";
import PropTypes from "prop-types";

import {Box} from "@mui/material";

const CardBody = props => {
  const {children, ...rest} = props;

  return (
    <Box
      sx={{
        flex: "1 1 auto",
        WebkitBoxFlex: "1",
        position: "relative",
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

CardBody.displayName = "CardBody";

CardBody.propTypes = {children: PropTypes.node.isRequired};

export default CardBody;
