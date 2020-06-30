import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  typography: {
    lineHeight: 1.5,
    letterSpacing: "0.1em",
  },
  infoTextBox: {
    display: "flex",
    alignItems: "center",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "flex-end",
  },
  contractTextBox: {
    paddingLeft: 30,
    paddingRight: 20,
  },
}));
