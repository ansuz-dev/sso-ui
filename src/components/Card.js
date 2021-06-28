import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

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
    fontSize: ".875rem",
  },
});

const Card = props => {
  const classes = useStyles();
  const {children, ...rest} = props;

  return (
    <div className={classes.root} {...rest}>
      {children}
    </div>
  );
};

Card.displayName = "Card";

Card.propTypes = {children: PropTypes.node.isRequired};

export default Card;
