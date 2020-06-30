import { makeStyles, fade } from "@material-ui/core/styles";
import commonStyles from "../../styles/commonStyles";

const family = "Solomon";

export default makeStyles((theme) => {
  return Object.assign({}, commonStyles(theme), {
    card: {
      position: "relative",
      borderRadius: 16,
      padding: 12,
      minWidth: 200,
      minHeight: 200,
      [theme.breakpoints.down("lg")]: {
        minWidth: 100,
        minHeight: 100,
      },
      "&:selected": {
         border:'1px solid blue'
       }
    },
    shell: {
      position: "absolute",
      bottom: 0,
      right: 0,
      transform: "translate(70%, 50%)",
      borderRadius: "50%",
      backgroundColor: "rgba(71, 167, 162, 0.12)",
      padding: "40%",
      "&:before": {
        position: "absolute",
        borderRadius: "50%",
        content: '""',
        display: "block",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "-16%",
        backgroundColor: "rgba(71, 167, 162, 0.08)",
      },
    },
  });
});
