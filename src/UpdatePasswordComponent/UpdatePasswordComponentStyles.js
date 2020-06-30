import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  changePasswordTextField: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    [theme.breakpoints.only("lg")]: {
      paddingRight: 10,
    },
    [theme.breakpoints.only("md")]: {
      paddingRight: 10,
    },
    [theme.breakpoints.only("sm")]: {
      paddingRight: 10,
    },
  },
  changePasswordButton: {
    marginTop: 5,
  },
  keyIcon: {
    marginRight: 5,
  },
  textFieldsPadding: {
    fontWeight: "bold",
    boxSizing: "border-box",
    [theme.breakpoints.only("md")]: {
      margin:'5px 0 0 0'
    },
    [theme.breakpoints.up("sm")]: {
      paddingRight: 10,
      margin:'5px 0 0 0'
    },
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#808B96",
  },
}));
