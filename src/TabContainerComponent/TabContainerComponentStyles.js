import { makeStyles, useTheme } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "100%",
  },
  tabsContainer: {
    height: "inherit",
  },
  SwipeableViews: {
    boxShadow: " 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
    //width: "100%",
  },
}));
