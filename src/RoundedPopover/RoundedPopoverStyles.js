import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    width: 200,
    maxWidth: "100%",
  },
  actions: {
    backgroundColor: grey[50],
    justifyContent: "center",
  },
  popoverBox: {
    [theme.breakpoints.up("sm")]: {
      top: "15px !important",
    },
    [theme.breakpoints.down("xs")]: {
      top: "27px !important",
    },
  },
}));
