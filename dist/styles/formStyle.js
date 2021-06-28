const formStyle = theme => ({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  cardBody: {marginTop: 32},
  footer: {marginTop: 24},
  textField: {
    "marginBottom": 24,
    "&:last-child": {marginBottom: 0},
  },
  button: {minHeight: 36},
  input: {
    paddingTop: "11.5px",
    paddingBottom: "11.5px",
  },
  links: {marginTop: 32},
  link: {
    "fontSize": 12,
    "cursor": "pointer",
    "textAlign": "center",
    "marginBottom": 8,
    "color": theme.palette.primary.main,
    "&:last-child": {marginBottom: 0},
    "&:hover": {color: theme.palette.primary.dark},
  },
});

export default formStyle;
