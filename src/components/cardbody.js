import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative",
  },
});

const CardBody = props => {
  const classes = useStyles();
  const {children, ...rest} = props;

  return (
    <div className={classes.root} {...rest}>
      {children}
    </div>
  );
};

CardBody.displayName = "Card";

CardBody.propTypes = {children: PropTypes.node.isRequired};

export default CardBody;
