import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer:{
    backgroundColor: "rgba(96, 125, 139, 0.2)",
    height: "inherit",
    border:'1px dashed #607d8b',
    cursor:'pointer',
    '&:hover': {
      backgroundColor: "rgba(96, 125, 139, 0.6)",
    },
    [theme.breakpoints.only("md")]: {
     width:'inherit'
    },
  },
  thumbsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
    height: 'inherit',
  },
  thumb: {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    width: 'inherit',
    height: 'inherit',
    boxSizing: "border-box",
    paddingBottom:2
  },
  thumbInner: {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
    width:'inherit'
  },
  img: {
    display: "block",
    width: "inherit",
    height: "inherit",
    [theme.breakpoints.only('xl')]: {
      width: "inherit",
    },
    [theme.breakpoints.only('lg')]: {
      width: "inherit",
    },
    [theme.breakpoints.only('md')]: {
      width: "inherit",
    },
  },
  placeholder:{
    height:'inherit'
  },
  dropzoneBox: {
    height: "inherit",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
