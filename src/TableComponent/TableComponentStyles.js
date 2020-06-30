import { makeStyles, fade } from "@material-ui/core/styles";
import commonStyles from "../../styles/commonStyles";

export default makeStyles((theme) => {
  return Object.assign({}, commonStyles(theme), {
    overflowXTable: {
      [theme.breakpoints.only("xs")]: {
        overflowX: "unset",
      },
    },
  });
});
