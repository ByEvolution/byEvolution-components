import { Divider, Grid, Typography, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import useStyles from "./ViewContainerHeaderComponentStyles";

const ViewContainerHeaderComponent = (props) => {
  let {
    title,
    showAsTitle,
    buttons,
    width,
    height,
    fontWeight,
    isClosable,
    onClose,
    isMobile,
    isTablet,
    backgroundColor,
    headerContainer,
    headerTitle,
    headerButtons,
  } = props;
  const classes = useStyles();

  const getDisplayType = () => {
    if (isClosable) return "flex";
    else return "none";
  };

  function getVariant() {
    if (isMobile) return showAsTitle ? "h6" : "body2";
    else return showAsTitle ? "h5" : "body1";
  }

  function getTitle(title) {
    if (isMobile) {
      if (title.length < 40) return title;
      else return `${title.substr(0, 39)}...`;
    } else if (isTablet) {
      if (title.length < 60) return title;
      else return `${title.substr(0, 59)}...`;
    } else return title;
  }
  let buttonRender;

  if (buttons === undefined || buttons === null || buttons.length === 0) {
    buttonRender = <Grid></Grid>;
  } else {
    buttonRender = buttons;
  }
  if (headerContainer === null || headerContainer === undefined)
    headerContainer = classes.headerContainer;
  if (headerTitle === null || headerTitle === undefined) headerTitle = classes.headerTitle;
  if (headerButtons === null || headerButtons === undefined) headerButtons = classes.headerButtons;

    return (
      <Grid container xs={12} item>
        <Grid
          container
          item
          style={{ backgroundColor: backgroundColor }}
          className={headerContainer}
        >
          <Grid item className={headerTitle}>
            <Typography variant={getVariant()}>
              <Box fontWeight={fontWeight}>{getTitle(title)}</Box>
            </Typography>
          </Grid>
          <Grid item className={headerButtons}>
            {buttonRender}
            <HighlightOffIcon
              style={{
                display: getDisplayType(),
                cursor: "pointer",
                background: "#c51162",
                color: "white",
                borderRadius: "17px",
              }}
              fontSize="medium"
              onClick={onClose}
            ></HighlightOffIcon>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ height: height, width: width }}>
          <Divider />
        </Grid>
      </Grid>
    );
};

ViewContainerHeaderComponent.defaultProps = {
  title: "",
  showAsTitle: true,
  buttons: null,
  isClosable: true,
  backgroundColor: null,
  headerContainer: null,
  headerTitle: null,
  headerButtons:null,
  onClose: () => {},
};

ViewContainerHeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  showAsTitle: PropTypes.bool.isRequired,
  buttons: PropTypes.any,
  isClosable: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  backgroundColor: PropTypes.any,
  headerContainer: PropTypes.any,
  headerTitle: PropTypes.any,
  headerButtons:PropTypes.any
};

export default ViewContainerHeaderComponent;
